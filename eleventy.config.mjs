// "use strict";

import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    // Basic Config
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setOutputDirectory("_site");

    // Pass through copies
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");

    // Extra
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    return {
        pathPrefix: "/"
    }
}