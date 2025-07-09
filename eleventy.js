module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("styles");   // main.css and other styles
  eleventyConfig.addPassthroughCopy("public");   // images, PDFs, etc.
  eleventyConfig.addPassthroughCopy("admin");    // Netlify CMS admin panel if used

  return {
    dir: {
      input: ".",             // root directory for source files
      includes: "_includes",  // layout and partials folder
      output: "_site"         // output folder for Netlify
    }
  };
};
