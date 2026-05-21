// @ts-check
import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightImageZoom from "starlight-image-zoom";
import starlightSidebarTopics from "starlight-sidebar-topics";
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
        starlightLinksValidator(),
        starlightImageZoom(),
        starlightSidebarTopics([
          {
            label: "Getting Started",
            icon: "open-book",
            link: "/guides/",
            items: [
              {
                label: "Introduction",
                link: "/guides/introduction",
              },
              {
                label: "Installation",
                link: "/guides/installation",
              },
              {
                label: "Quick Start",
                link: "/guides/quick-start",
              },
            ],
          },
          {
            label: "Features",
            icon: "star",
            link: "/features/",
            items: [
              {
                label: "Ticket System",
                link: "/features/ticket-system",
              },
              {
                label: "Categories & Panels",
                link: "/features/categories-panels",
              },
              {
                label: "Staff Management",
                link: "/features/staff-management",
              },
              {
                label: "Shifts",
                link: "/features/shifts",
              },
              {
                label: "Analytics",
                link: "/features/analytics",
              },
              {
                label: "Premium Features",
                link: "/features/premium",
              },
            ],
          },
          {
            label: "Configuration",
            icon: "settings",
            link: "/config/",
            items: [
              {
                label: "Bot Settings",
                link: "/config/bot-settings",
              },
              {
                label: "Server Settings",
                link: "/config/server-settings",
              },
              {
                label: "Customization",
                link: "/config/customization",
              },
              {
                label: "Commands",
                link: "/config/commands",
              },
            ],
          },
          {
            label: "API Reference",
            icon: "code",
            link: "/api/",
            items: [
              {
                label: "Bot API",
                link: "/api/bot",
              },
              {
                label: "Dashboard API",
                link: "/api/dashboard",
              },
              {
                label: "Webhooks",
                link: "/api/webhooks",
              },
            ],
          },
          {
            label: "Support",
            icon: "heart",
            link: "/support/",
            items: [
              {
                label: "FAQ",
                link: "/support/faq",
              },
              {
                label: "Troubleshooting",
                link: "/support/troubleshooting",
              },
              {
                label: "Discord Community",
                link: "https://discord.gg/tHwtjXhUHf",
              },
            ],
          },
        ]),
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
      components: {
        //Search: "./src/components/Page/Search.astro",
        Head: "./src/components/Page/Head.astro",
        PageTitle: "./src/components/Page/PageTitle.astro",
        PageSidebar: "./src/components/Page/PageSidebar.astro",
        Sidebar: "./src/components/Page/Sidebar.astro",
        Pagination: "./src/components/Page/Pagination.astro",
      },
      pagefind: true,
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
