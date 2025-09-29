// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Algorithms in Abali",
  description:
    "Abali pseudocode, pseudocode examples, algorithm tutorials",
  lang: "en",
  editThisNote: {
    url: "https://github.com/megacodist/Algorithms/edit/main/{{file}}",
  },
  staticAssets: {
    paths: {
      "assets/robots.txt": "/robots.txt",
      "assets/": "/assets/"
    },
  },
  ignores: ["README.md", "draft.md"],
  customProperties: {
    properties: [
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    links: [
      {
        url: "https://github.com/megacodist/Algorithms",
        label: "GitHub / Support",
        icon: "github",
      },
      //{
      //  url: "https://www.buymeacoffee.com/sandroroth",
      //  label: "Buy me a coffee",
      //  icon: "coffee",
      //},
    ],
    sections: [
      {
        label: "Algorithms",
        groups: [
          {
            label: "Sort",  // Sub-header
            query: createNotesQuery({
              pattern: "/algos/",
              tags: ["sort"],
            }),
            expanded: false,
          },
        ],
      },
    ],
  },
  tags: {
    map: {
      "dynamic-content": "dynamic content",
    },
  },
});
