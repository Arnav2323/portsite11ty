export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"styles/*.css": "styles"});
    eleventyConfig.addPassthroughCopy({"images/*.svg": "images"})

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}