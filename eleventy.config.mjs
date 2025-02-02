export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"**/*.css": "styles"});
    eleventyConfig.addPassthroughCopy({"**/*.svg": "images"})

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}