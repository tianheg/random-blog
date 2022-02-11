# Random Blog

This is a page that generate a random article from my [Chinese blog](https://www.yidajiabei.xyz/blog/).

## How-to

### 1. ~Get JSON file~(removed because blog has been changed)

related files: `gen-json.js`, `package.json`

- Use `axios` get url file data
- Use `cheerio` deal with DOM

### 2. Pass JSON data to HTML file

related files: `script.js`, `feeds.json`

- Use `jQuery` get data from JSON file
- Use `jQuery` reload page through button

## ToDo

- [ ] get JSON file with pure JS
- [x] ~GitHub Action bot release v1(jQuery), althrough this state of repo was broken because I change my blog again~

## Acknowledgement

1. [How to Scrape Websites with Node.js and Cheerio](https://www.freecodecamp.org/news/how-to-scrape-websites-with-node-js-and-cheerio/)
2. [jQuery get JSON file](https://stackoverflow.com/a/7346598/12539782)
3. [jQuery reload](https://stackoverflow.com/a/5404869/12539782)
4. [Converting a Buffer to JSON and Utf8 Strings in Nodejs](https://medium.com/hackernoon/https-medium-com-amanhimself-converting-a-buffer-to-json-and-utf8-strings-in-nodejs-2150b1e3de57)
