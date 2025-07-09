module.exports = function(eleventyConfig) {
  // ✅ Copy styles/ folder to _site
  eleventyConfig.addPassthroughCopy("styles");

  // ✅ Also passthrough assets if needed
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("admin");

  // ✅ Define collections
  eleventyConfig.addCollection("releases", collection =>
    collection.getFilteredByGlob("./releases/*.md")
  );
  eleventyConfig.addCollection("live", collection =>
    collection.getFilteredByGlob("./live/*.md")
  );
  eleventyConfig.addCollection("radio", collection =>
    collection.getFilteredByGlob("./radio/*.md")
  );
  eleventyConfig.addCollection("read", collection =>
    collection.getFilteredByGlob("./read/*.md")
  );
  eleventyConfig.addCollection("watch", collection =>
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
