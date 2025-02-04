import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    return {
        dir: {
            input: "src",
            includes: "/_includes",
            output: "_site",
        },
    }
}

export const config = {
    pathPrefix:  "/portsite11ty/",
}