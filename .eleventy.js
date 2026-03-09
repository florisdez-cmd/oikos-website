module.exports = function (eleventyConfig) {
  // Kopieer assets (logo's, foto's, admin) direct naar _site
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Datum-filter voor blog posts (bijv. "Januari 2025")
  eleventyConfig.addFilter("dutchDate", function (date) {
    const d = new Date(date);
    return d.toLocaleDateString("nl-NL", { month: "long", year: "numeric" });
  });

  eleventyConfig.addFilter("dutchDateFull", function (date) {
    const d = new Date(date);
    return d.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
