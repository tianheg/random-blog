const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// for feeds.json
let parser = require("md-list-tree-parser");
let feeds = parser("./feeds.md");
fs.writeFile("feeds.json", JSON.stringify(feeds, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Successfully written data to feeds.json");
});

const url = "https://www.yidajiabei.xyz/blog/index.html";

async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    const listItems = $(".org-ul li");
    // Stores data for all countries
    const countries = [];
    // Use .each method to loop through the li we selected
    listItems.each((idx, el) => {
      // Object holding data for each country/jurisdiction
      const country = { title: "", link: "" }; // , link: ""
      // Select the text content of a and span elements
      // Store the textcontent in the above object
      country.title = $(el).children("a").text();
      country.link = $(el).children("a").attr("href");
      // console.log(country.title);
      // Populate countries array with country data
      countries.push(country);
    });
    // Logs countries array to the console
    console.dir(countries);
    // Write countries array in countries.json file
    fs.writeFile("blogs.json", JSON.stringify(countries, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successfully written data to blogs.json");
    });
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
scrapeData();
