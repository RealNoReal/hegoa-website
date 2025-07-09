module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addCollection("releases", function (collectionApi) {
    return collectionApi.getFilteredByGlob("releases/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addCollection("radio", function (collectionApi) {
    return collectionApi.getFilteredByGlob("radio/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addCollection("read", function (collectionApi) {
    return collectionApi.getFilteredByGlob("read/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addCollection("live", function (collectionApi) {
    return collectionApi.getFilteredByGlob("live/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addCollection("watch", function (collectionApi) {
    return collectionApi.getFilteredByGlob("watch/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
