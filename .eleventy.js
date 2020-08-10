const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	// Don't process folders with static assets e.g. images
	eleventyConfig.addPassthroughCopy("fonts/");
	eleventyConfig.addPassthroughCopy("scss/");
	eleventyConfig.addWatchTarget("./scss/");
	eleventyConfig.addWatchTarget("style.css");

	// Date formatting (machine readable)
	eleventyConfig.addFilter("utcDate", dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat("yyyyMMddhhmmss");
	});


	return {
		templateFormats: ["html"],
		htmlTemplateEngine: ["njk"],
	};
};
