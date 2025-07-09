module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("admin");

  // Add collections
  eleventyConfig.addCollection("releases", (collection) =>
    collection.getFilteredByGlob("./releases/*.md")
  );
  eleventyConfig.addCollection("live", (collection) =>
    collection.getFilteredByGlob("./live/*.md")
  );
  eleventyConfig.addCollection("radio", (collection) =>
    collection.getFilteredByGlob("./radio/*.md")
  );
  eleventyConfig.addCollection("read", (collection) =>
    collection.getFilteredByGlob("./read/*.md")
  );
  eleventyConfig.addCollection("watch", (collection) =>
    collection.getFilteredByGlob("./watch/*.md")
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
