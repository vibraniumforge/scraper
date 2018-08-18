const request = require("request");
const cheerio = require("cheerio");

request(
  "https://en.wiktionary.org/wiki/gold/translations#Noun",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const siteHeading = $("#Translations-element");
      const output = siteHeading.children("li");

      //   console.log(output);

      $("#Translations-element").each((i, el) => {
        const link = $(el)
          .text()
          .trim();
        console.log(link);
      });
      //   $(".nav-item a").each((i, el) => {
      //     const item = $(el).text();
      //     const link = $(el).attr("href");
      //     console.log(link);
      //   });
    }
  }
);
