---
---

# Credits

In order to maake a website for implemented algorithm in [Abali pseudocode](), we used the following tools:

**Eleventy**

[Eleventy](https://www.11ty.dev) is a Static Site Generator (SSG) to convert a fleet of Markdown files into a static web site.

**Eleventy Notes**

Currently in beta, [Eleventy Notes](https://github.com/rothsandro/eleventy-notes) is a theme for the Eleventy engine.

**Google Gemini**

A Large Language Model (LLM), developed by Google, is available at [Google AI Studio](https://aistudio.google.com/prompts/new_chat).

# How to Run

1. Make a folder for the project (`proj_dir`).

2. Change folder to it:

    ```
    cd path/to/proj_dir
    ```

3. Clone the repository in the project folder:

    ```
    proj_dir> git clone https://github.com/megacodist/algorithms.git .
    ```

4. After cloning this GitHub repository into your `proj_dir`, change directory to `.app/`, install dependencies, and run the local server:

    ```
    proj_dir> cd .app/
    proj_dir/.app> npm install
    proj_dir/.app> npm start
    ```

    Or alternatively in the project root:

    ```
    proj_dir> npm install --prefix .app/
    proj_dir> npm start --prefix .app/
    ```
