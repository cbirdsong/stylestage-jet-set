module.exports = function (eleventyConfig) {
	// Don't process folders with static assets e.g. images
	eleventyConfig.addPassthroughCopy("fonts/");
	eleventyConfig.addPassthroughCopy("scss/");
	eleventyConfig.addPassthroughCopy("style.css");
	eleventyConfig.addPassthroughCopy("style.css.map");

	eleventyConfig.addWatchTarget("./scss/");
	eleventyConfig.addWatchTarget("style.css");

	return {
		templateFormats: ["html"],
	};
};
