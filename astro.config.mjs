// @ts-check
import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightImageZoom from "starlight-image-zoom";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://docs.oriaxen.com",
  devToolbar: {
    enabled: false,
  },
  trailingSlash: "ignore",
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      lastUpdated: false,
      plugins: [
        starlightImageZoom(),
      ],
      title: "Ticket-v2",
      favicon: "/favicon.ico",
      logo: {
        src: "./src/images/icon_new.webp",
      },
      social: {
        github: "https://github.com/sayrzs/Ticket-v2",
        discord: "https://discord.gg/tHwtjXhUHf",
      },
      editLink: {
        baseUrl: "https://github.com/sayrzs/Ticket-v2/edit/main/website/",
      },
      head: [
        // Google Analytics, Anonymized (for the user)
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-GMH27HJZGY",
          },
        },
        {
          tag: "script",
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-GMH27HJZGY');
          `,
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "Ticket-v2",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "theme-color",
            content: "#8B5CF6",
          },
        },
      ],
    }),
    react(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      // @ts-ignore
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            class: "heading-link",
          },
        },
      ],
    ],
  },
});
