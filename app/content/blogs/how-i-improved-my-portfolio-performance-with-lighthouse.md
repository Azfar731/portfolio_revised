---
title: "How I Improved My Portfolio Performance with Lighthouse"
description: "A case study on improving my portfolio's performance"
slug: "how-i-improved-my-portfolio-performance-with-lighthouse"
cover_image: "/blog_images/how-i-improved-my-portfolio-performance-with-lighthouse/hero.webp"
base_images_path: "/blog_images/how-i-improved-my-portfolio-performance-with-lighthouse"
canonical_url: ""
tags:
  - performance
  - react
  - lighthouse
readable_publish_date: "March 5, 2026"
---

Okay, so you have learned what Google Lighthouse is, how it works, and what the metrics are. But most tutorials keep telling you what the metrics are instead of showing you how to actually improve them.
For that purpose, I am structuring this article as a case study in which I am going to optimize the performance of my own portfolio through Google Lighthouse while also highlighting what to
focus on, what to ignore, and some useful tips for using Google Lighthouse.

## Prerequisite

I wrote this article for junior developers, especially those using Google Lighthouse for the first time and trying to understand how to act on its reports in a practical way.

To follow along, you only need a basic understanding of the main Core Web Vitals and loading metrics: FCP, LCP, INP, and CLS.

## Before You Run Lighthouse

Before using Lighthouse, make sure you are testing in the right environment.

- If you want to measure the actual performance of your site, run Lighthouse on the live domain where the site is hosted. You can still use it during development or on a local production build to catch issues, but those environments should not be used to judge the site's real performance.
- Open the site in an incognito window before running Lighthouse. This helps avoid browser extensions interfering with the test results.

> [!Tip]
> If your website has been live for some time and gets enough traffic, PageSpeed Insights can show you how real users are actually experiencing it through Chrome UX Report (CrUX) data. This makes it useful for spotting real-world performance issues and making decisions based on actual user data.
> At the same time, you still need to know how to read a Lighthouse report properly. PageSpeed Insights also uses Google Lighthouse, so the lab data, audits, and improvement insights are still presented in a very similar way.

## How to Analyze Lighthouse Results

Before getting into the case study itself, here are a few things worth keeping in mind when reading Lighthouse results.

- Lighthouse scores can vary from one scan to another. Sometimes the difference can even be 20 to 30 points, so do not judge your site based on a single run. Run Lighthouse around 4 to 5 times first to get a more reliable picture. You can also run it again after some time (1-2 hours) for a better overall view.
- After fixing an issue, do not just look at the final Performance score. Go back to the **Insights** tab and check whether that insight is no longer highlighted or whether its severity has gone down. Also check the values shown next to it, such as time saved, file size, or delay, and see if they improved.
- Some fixes may not lead to a noticeable jump in the Performance score. That does not necessarily mean the fix was useless. Some improvements are not heavily reflected in the score but they can still boost the site's overall performance.
- You do not need to fix every single thing Lighthouse highlights. In some cases, a flagged item may just be part of how your site is built, and changing it may not be worth the effort unless it is something causing major issues.
- A good place to start is the insights with the highest warning level. The red ones usually deserve attention first because they tend to have the biggest impact. The yellow ones are worth considering too, especially when the fix is small and easy to apply.

![Lighthouse Severity Levels|491]({{base}}/severity_levels.webp)

## How I Optimized My Portfolio

Up to this point, I have covered the setup and the things to keep in mind while reading Lighthouse results. Now it is time for the practical part, where I go through my own portfolio step by step and show what I fixed, what I ignored, and why.

### Pre-Optimization Results

Before making any changes, I first ran Lighthouse multiple times to get a more reliable starting point. These were the results of my portfolio before I applied any fixes.

**Mobile Version:**

![Lighthouse Mobile Performance Score]({{base}}/55_score.webp)

**Desktop Version:**

![Lighthouse Desktop Performance Score]({{base}}/68_score.webp)

Moving forward, I will be using the mobile view to analyze performance. This is because Google is mobile-first, and in my case, both mobile and desktop versions load the same assets and only differ in layout, so improving results on mobile would also improve the results on the desktop version.

### Initial Mobile Performance Breakdown

My initial mobile Lighthouse score was **55**. To understand where that score was coming from, I broke down the metric contributions below:

![Lighthouse Mobile Score breakdown]({{base}}/55_score_expanded.webp)

| Metric | Contribution | What it showed                                    |
| ------ | ------------ | ------------------------------------------------- |
| TBT    | 30 / 30      | This was already in good shape.                   |
| CLS    | 25 / 25      | Layout shifts were not a problem.                 |
| SI     | 0 / 10       | The page was taking too long to visually load.    |
| FCP    | 0 / 10       | The first visible content was appearing too late. |
| LCP    | 0 / 25       | The main content was loading too late.            |

This made the main problem clear. The page was stable in terms of layout, but it was slow to show content and slow to load the most important content. That is why my focus in the next steps was on metrics like **FCP**, **LCP**, and **Speed Index**.

### Acting on the Lighthouse Insights

As the breakdown shows, **LCP** carries a lot of weight in the performance score and it is currently at 0. At the same time, **FCP** is also performing poorly. I am going to focus on **FCP** first because if the page starts showing content earlier, that will usually help **LCP** as well.

Filtering down the Lighthouse suggestions for FCP, I got the following insights.

![FCP Issues highlighted by Lighthouse]({{base}}/FCP_issues.webp)

#### Reducing JavaScript Bundle Size

Normally I would have started with the **Insights** tab first, but one thing in the diagnostics stood out immediately. Lighthouse showed potential savings of `2445KiB` from unused JavaScript. When I checked the built JavaScript bundles, the total size was `2517KB`. That is absurd for a page like this, because a reasonable bundle size is usually in the low hundreds of KB, not multiple MB. Most of that size was coming from `home.js` alone at `2005KB`, while `index.js` was another `472KB`.

![Reduce Unused JavaScript issue]({{base}}/reduce_js.webp)

After seeing that, I inspected the libraries I was importing in my components to find what was causing such a huge bundle size. It turned out that one library was responsible for most of it. I only needed a small part of that library, so I changed the import and used just the subset I actually needed. This brought the build size down by a lot.

This fix caused such a massive improvement because the JavaScript bundles were simply too large before. The browser had to download much more code than necessary, which delayed how quickly the page could start showing content. That was hurting **FCP**, and because of that, **LCP** was also affected. Once the bundle size dropped, the JavaScript loaded much faster and the performance score jumped from **55** to **87**.

![87 Performance Score]({{base}}/87_score.webp)

Even though Lighthouse marks `Reduce unused JavaScript` as unscored, cutting down that much JavaScript still had a direct effect on the page's actual loading performance. You can also see in the diagnostics below that the JavaScript size dropped to a much more reasonable level after the fix:
![Resolved Reduce Unused JavaScript issue]({{base}}/reduce_js_result.webp)

#### Self-Hosting Google Fonts

Now I moved back to the **Insights** tab. The biggest issue there was `Render Blocking Requests`. It showed that apart from requests to my own server, the page was also making a request to the **Google Fonts API**. That request alone was costing around `1020ms`.

![Render blocking requests issue]({{base}}/blocking_request.webp)

This was happening because I was using Google Fonts through the embed code. That is fine during development, but once your site is finalized and you already know which fonts and font styles you need, it makes more sense to self-host them. Self-hosting the fonts has a few clear advantages:

- It removes reliance on a third-party font delivery service.
- It removes the extra DNS, TCP, and TLS connection setup needed to fetch fonts from Google.
- It is better for privacy and supports GDPR compliance by avoiding transmission of visitor IP addresses and related request data to Google for font delivery. See [Google Fonts and GDPR: How to Stay Compliant?](https://www.cookieyes.com/documentation/google-fonts-and-gdpr/).

##### Using `WOFF2` instead of `TTF`

You can download font files directly from Google Fonts, but they usually come as `.ttf` files. Those are not ideal for the web because the file sizes are larger than needed. You can convert them to `woff2` yourself, or you can use the [Google-WebFont-Helper](https://gwfh.mranftl.com/fonts) website. It lets you download `woff2` versions of Google Fonts directly.

![Google Web Font Helper website]({{base}}/google_webfonts.webp)

After self-hosting the fonts, the performance score went up to around **95-96**. This improvement came from removing that extra external request and reducing the render-blocking delay caused by the font loading.  
![95 performance score]({{base}}/95_score.webp)

At this point, the performance score was already above 90, which is generally a good range. But I still decided to go through the remaining insights because some of the fixes were easy to apply and could still improve the website's actual performance, even if the score did not change much.

#### Prioritizing the LCP Image

The next insight showed that the LCP image was not being fetched with high priority.
![LCP request discovery issue]({{base}}/LCP_request_discovery.webp)

This was a simple fix. I only needed to add `fetchPriority="high"` to the LCP image. Even though this did not noticeably change the performance score by itself, it is still a good practice because the browser can start prioritizing the most important image earlier.

#### Optimizing Image Sizes

The last major area left to improve was image delivery. Most of the images on my website were in `png` or `jpeg` format, so I converted them to `webp`. `webp` is generally a better choice for the web because it usually gives you much smaller file sizes.
On top of that, I also compressed the images by lowering their quality to around `75-80%`. This reduced their size even further without causing any noticeable drop in quality. I applied this to all images on the website except the LCP image, since that one was already only `30KB` and I did not want to reduce its quality at all.

After replacing the images, I was able to reduce their combined size from around **8000KB** to **200KB**.

![Total Image size comparison]({{base}}/image_size_before_after.webp)

### Results After Optimization:

To improve the performance of the portfolio, I reduced the JavaScript bundle size, self-hosted the Google Fonts, prioritized the LCP image, and optimized the image sizes. Together, these fixes improved how quickly the page started rendering and how quickly the important content loaded.

As a result, the **mobile performance score** improved from **55 to 96**, while the **desktop performance score** improved from **68 to 100**.

Mobile Scores:
![Final Lighthouse Mobile score]({{base}}/Final_mobile_score.webp)

Desktop Scores:
![Final Lighthouse Desktop score]({{base}}/Final_desktop_score.webp)

I also acted on some of the **Accessibility** and **SEO** insights, which helped improve those scores as well. However, I am not covering them here so the article stays focused on performance.

## What I Did Not Fix

There was one insight called `Network Dependency Tree`. It showed that during the initial page load, some requests were depending on earlier requests before they could start. In simple terms, the browser was not able to fetch everything in parallel because parts of the page were waiting on other resources first.

![Network Dependency Tree issue]({{base}}/network_dependency_tree.webp)

Even though Lighthouse marked this insight with a high severity level, I decided not to act on it. In my case, this behavior was part of how the page was built, and fixing it would have required a lot more time and effort than the other changes.

Another reason I ignored it was that the maximum critical path latency was only around `300ms`. That is not nothing, but compared to the other issues I had already fixed, it was not important enough to justify a bigger rewrite.

## How to Keep Track of Performance Over Time

Improving performance once is not enough. As you keep adding new features, images, libraries, or third-party scripts, the performance of the site can start dropping again. That is why it is important to keep checking it over time.

- A simple habit is to run Lighthouse again after every major update. This can be after adding a new section, a new library, new images, or anything else that changes how the page loads. If you want to take it a step further, you can also integrate Lighthouse into your **CI/CD pipeline** and set a minimum performance threshold. That way, the build can fail automatically if the score drops below the level you want to maintain.
- It also helps to keep a record of your scores and key metrics like **FCP**, **LCP**, and **CLS**. This makes it easier to spot regressions early. Lighthouse allows you to save the reports in multiple formats (HTML, JSON, etc.), which makes it easier to keep track of the scores.
- If your site starts getting enough traffic, start checking **PageSpeed Insights** as well. It can show you how real users are actually experiencing your website through **CrUX** data, which is something Lighthouse alone cannot give you.
- As a more advanced step, you can also use the **web-vitals** library or analytics-based monitoring to track performance from real users directly. This gives you a better idea of how the site is behaving outside of lab tests.

## Conclusion

In the end, the goal is not to chase a perfect score every single time. The real goal is to understand what is slowing your site down. Once you know how to read Lighthouse properly, it becomes much easier to decide what to fix, what to ignore, and how to keep the site fast over time.
