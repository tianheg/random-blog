$.getJSON("blogs.json", function (data) {
  let randomBlog = data[Math.ceil(Math.random() * data.length) - 1]; // get each JSON object
  document.getElementById("content").innerText = randomBlog.name;
  document.getElementById("content").href =
    "https://www.yidajiabei.xyz/blog/" + randomBlog.link;
  // console.log(randomBlog.name);
  // console.log("https://www.yidajiabei.xyz/blog/" + randomBlog.link);
});

$("#bt_new").click(function () {
  location.reload();
});