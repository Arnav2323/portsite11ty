import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    return {
        dir: {
            input: "src",
            output: "_site",
        },
    }
}