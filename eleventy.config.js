module.exports = function (eleventyConfig) {
  // Collections
  eleventyConfig.addCollection("releases", (collectionApi) =>
    collectionApi.getFilteredByGlob("./releases/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("radio", (collectionApi) =>
    collectionApi.getFilteredByGlob("./radio/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("read", (collectionApi) =>
    collectionApi.getFilteredByGlob("./read/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("watch", (collectionApi) =>
    collectionApi.getFilteredByGlob("./watch/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("live", (collectionApi) =>
    collectionApi.getFilteredByGlob("./live/*.md").sort((a, b) => b.date - a.date)
  );

  // Passthrough
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
