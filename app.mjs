// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Algorithms in Abali",
  description:
    "Abali pseudocode, pseudocode examples, algorithm tutorials",
  lang: "en",
  editThisNote: {
    url: "https://github.com/megacodist/algorithms/edit/main/{{file}}",
  },
  staticAssets: {
    paths: {
      "assets/robots.txt": "/robots.txt",
      "assets/": "/assets/"
    },
  },
  ignores: ["README.md", "draft.md"],
  notes: {
    pathPrefix: "/n/",
  },
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
      {
        name: "author",
        label: "Written By"
      },
      {
        name: "updatedOn",
        label: "Updated on",
        options: {
          date: {
            locale: "en-US",
            format: {
              dateStyle: "medium",
              timeStyle: "short",  // Optional: Adds time (e.g., "Sep 25, 2025, 7:51 AM")
              timeZone: "UTC"  // Forces UTC display regardless of user's locale
            }
          }
        }
      },
    ],
  },
  sidebar: {
    links: [
      {
        url: "https://github.com/megacodist/algorithms",
        label: "GitHub / Support",
        icon: "github",
      },
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
  panel: {
    tableOfContents: true,
    tags: true,
    customProperties: true,
    incomingLinks: true,
    outgoingLinks: true,
    externalLinks: true,
  },
  tags: {
    map: {
      "dynamic-content": "dynamic content",
    },
  },
});
