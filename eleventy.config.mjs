export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}