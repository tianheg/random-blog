const fs = require('fs');

// for feeds.json
let parser = require('md-list-tree-parser');
let feeds = parser('./feeds.md');
fs.writeFile('feeds.json', JSON.stringify(feeds, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Successfully written data to feeds.json');
});
