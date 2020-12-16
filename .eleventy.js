const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	// Don't process folders with static assets e.g. images
	eleventyConfig.addPassthroughCopy("./src/fonts/");
	eleventyConfig.addPassthroughCopy("./src/scss/");
	eleventyConfig.addPassthroughCopy("./src/css/");

	eleventyConfig.addWatchTarget("./src/scss/");
	eleventyConfig.addWatchTarget("./src/css/");

	// Date formatting (machine readable)
	eleventyConfig.addFilter("utcDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("yyyyMMddhhmmss");
	});

	return {
		passthroughFileCopy: true,
		templateFormats: ["html"],
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
