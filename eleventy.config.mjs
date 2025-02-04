export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: {
            input: "src",
            includes: "/_includes",
            markdownTemplateEngine: "md",
            htmlTemplateEngine: "njk",
            pathPrefix: "/portsite11ty/",
            output: "_site"
        }
    }
}