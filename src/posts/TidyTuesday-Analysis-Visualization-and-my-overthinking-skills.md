---
title: "TidyTuesday: Analysis, Visualization and my overthinking skills"
date: 2025-04-17
categories:
  - sveltekit
  - svelte
  - R
  - shiny
  - vanilla
published: true
---

# TidyTuesday: Analysis, Visualization and my overthinking skills

Hello there, I recently discovered TidyTuesday. It's really quite an amazing project to keep my R skills in check. I'm starting from week 15 and hopefully continue it as long as possible.

But, for some reason I decided to make an SPA to list all (and future) TidyTuesday Shiny apps, and it was a joyride.

My goal was straight:
1. Build an SPA with Svelte
2. Put the Shiny apps in `static` folder
3. Host with GitHub Pages

As easy as I thought it would be, didn't know I was overcomplicating for absolutely no reason. This will mostly be a self-roast blog because sometimes you don't learn from your mistakes and keep doing more of it until you get your head fixed.

## _Building an SPA with Svelte_

I didn't waste my time here, simply created a blank Svelte project and copied code from this blog page. After that I went ahead looking for ways to save the Shiny apps as static web page. One workaround was to open it in browser and save the page right from there as `index.html`. Then I made a post build script that copied the entire folder, which has both `R` code for the shiny app as well the `index.html` file which I saved before, to `build` output folder of Svelte.

Logically this should have worked, but I forgot that I'm building a static SPA app with Svelte and set `prerender = true` in my `+layout.ts`. So naturally it would show a `404` to the link I set for the shiny app.

Then my good friend [Daniel](http://danferns.github.io/) suggested me to code those static webpage folders to Svelte's static folder. That actually worked. But, there was a problem arise but that "workaround" method. The shiny app wasn't interactive at all.

Next, I used [`shinylive`](https://posit-dev.github.io/r-shinylive/). Quite an incredible tool which uses [`webR`](https://docs.r-wasm.org/webr/latest/) to run Shiny in browser. At first, I did the above method with output from `shinylive`, no doubt it didn't work. Yet, I still went the overcomplicated path and decided to import then `shinylive` exported index.html and embed in a Svelte page. I really crossed my border of stupidity with this one.

## Round 2: The Vanilla Style

At the end, I went vanilla HTML/CSS/JS using the same structure from this blog and `tailwindcss` for CSS and `moment.js` for formatting `DateTime`. Fortunately, everything works fine.

The repository for all the code for R, Shiny and the static dashboard-link page is live

[https://github.com/boredcodebyk/rworks](https://github.com/boredcodebyk/rworks)

as well as the GitHub Page: 

[https://boredcodebyk.github.io/rworks/](https://boredcodebyk.github.io/rworks/)


