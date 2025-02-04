export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"./src/styles/index.css": "styles"});
    eleventyConfig.addPassthroughCopy({"./src/images/placeholderpfp.svg": "images"})

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}