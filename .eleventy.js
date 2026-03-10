module.exports = function (eleventyConfig) {
  // Kopieer assets en admin direct naar _site (niet verwerken als template)
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.ignores.add("src/admin/**");

  // Datum-filter voor blog posts (bijv. "Januari 2025")
  eleventyConfig.addFilter("dutchDate", function (date) {
    const d = new Date(date);
    return d.toLocaleDateString("nl-NL", { month: "long", year: "numeric" });
  });

  eleventyConfig.addFilter("limit", function (array, n) {
    return array.slice(0, n);
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
