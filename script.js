/* pure JS
   https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
 */

function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "feeds.json", true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadJSON(function(response) {
    let actual_JSON = JSON.parse(response);
    console.log(actual_JSON);
    let randomPost = actual_JSON[Math.ceil(Math.random() * actual_JSON.length) - 1];
    console.log(randomPost);
})






/* jQuery */
$.getJSON("blogs.json", function (data) {
  let randomBlog = data[Math.ceil(Math.random() * data.length) - 1]; // get each JSON object
  // console.log(Math.ceil(Math.random() * data.length));
  document.getElementById("blogs").innerText = randomBlog.title;
  document.getElementById("blogs").href =
    "https://www.yidajiabei.xyz/blog/" + randomBlog.link;
  // console.log(randomBlog.name);
  // console.log("https://www.yidajiabei.xyz/blog/" + randomBlog.link);
});

$.getJSON("feeds.json", function (data) {
  let randomBlog = data[Math.ceil(Math.random() * data.length) - 1]; // get each JSON object
  // console.log(Math.ceil(Math.random() * data.length));
  document.getElementById("feeds").innerText = randomBlog.title;
  document.getElementById("feeds").href = randomBlog.link;
});

$("#btn").click(function () {
  location.reload();
});
