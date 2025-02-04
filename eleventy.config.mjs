export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"styles/index.css": "styles"});
    eleventyConfig.addPassthroughCopy({"images/placeholderpfp.svg": "images"})

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}