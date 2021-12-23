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
