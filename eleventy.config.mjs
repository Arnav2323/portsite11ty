export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"**/*.css": "styles"});

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}