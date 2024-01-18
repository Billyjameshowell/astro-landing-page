---
title: Programmatic SEO in Action — Does it really work?
description: Learn how we took doubled this sports startup traffic in just 3 months with programmatic SEO.
date: 2023-11-01
stringDate: November 1, 2023
draft: false
author: Billy Howell
---
In this case study we discuss the SEO strategies we implemented to triple this website's traffic in just 3 months.
![Hockey Stick Graph](../../pseo-traffic-spike.png)
Isn't this a pretty chart? If you want your site's traffic to look like this you should stop reading now and book a [discovery call](https://calendly.com/billy-owex/owex-labs-intro).

Otherwise, continue reading to learn how we did it.

## The Client
The client is a technology startup in the sports card industry. They are a marketplace for buying and selling graded sports cards. They also offer card grading services themselves.

The sports card market is a competitive industry. eBay dominates the resale market and [PSA](https://www.psacard.com/) dominates the grading market. 

## The Challenge

When the client came to us they were averaging 2,000 impressions and 100 clicks a day on branded traffic alone. 

Branded traffic is search traffic from users querying the brand name. So these users were Googling their business name. 

They wanted to leverage a pSEO to increase their organic traffic and target relevant users. 

The good news is the client's website was built on Webflow which works great with our pSEO system.

So how could we use automation and our AI writer app [KiwiWriter.ai](https://app.kiwiwriter.ai/) to supercharge their traffic?

## The Stack
- [Airtable](https://www.airtable.com)
- [Whalesync](https://www.whalesync.com/)
- [KiwiWriter](https://www.kiwiwriter.ai/)
- [BannerBear](https://www.bannerbear.com/)
- [Make.com](https://www.make.com/)

First we set up an Airtable to act as a hub for all blog content. 

Next we set up KiwiWriter to bulk create SEO content using ChatGPT 4 and Claude 2 APIs (please try Kiwiwriter, I'll give you free credits).

We connected Airtable to our Webflow CMS collection with [Whalesync](https://www.whalesync.com). 

Note: KiwiWriter offers syncing straight to Webflow but at the moment doesn't offer some of the more fancy automations I like to use in Airtable. For a pSEO novice KiwiWriter and Webflow should be sufficient!

Finally, I set up an automation in Make.com to automatically generate hero images, thumbnails and SEO descriptions for each blog post after it lands in Airtable.

Voila! We now have a content factory for our client's blog. But how did we use it?

## The Solution

To programmatically generate blogs you first need blog titles to feed into KiwiWriter so it knows what to write about. 

This is where we got growth-hacky. In Airtable we made lists of professional sports teams, leagues and athletes we think users are searching for. Then using an airtable formula we generated hundreds of article titles. 

We started with generic formulas like "most valuable [sports league] cards" or "Top [athlete] cards".

We started out posting 5 blogs a day. After a month we had modest results. But we noticed something interesting. After posting 50+ blogs, most of our traffic was coming from just 3 or 4 blogs. This was like Google painting a target for us!

So we dove back into our formula strategy using what we learned from the data. For pro sports teams we used the formula [modifier] + [team]. Modifiers included phrases like "Top 5 Most valuable [team] cards of all time". Same goes for [modifier] + [athlete]. "Top 5 Most valuable [athlete] cards", "Top 10 [athlete] rookie cards", "rarest [athlete] cards" and so on.

Now we were pumping out highly targeted articles that Google could serve its readers. Our blog impressions were slowly climbing to a few hundred a day. But our clicks were still low, just a half a dozen a day.

## Technical Challenges.

The client's Webflow had this problem where it was taking 4-5 seconds just to load a page. For two months we couldn't figure it out. We tried everything from optimizing images to changing the fonts of the entire website but nothing made a dent.

Finally, the client's graphic designer found the problem. The webflow was still linked to a now defunct Google Optimize campaign. So each time the website loaded it was trying to load a Google api that no longer works!

We removed the tracking tag and the results were astonishing. The pages started loading instantly. And Traffic rocketed up to thousands of impressions a day and several hundred clicks. 

Google holds user experience above all. They don't want their users to have to wait for poorly optimized pages to load. So it's important to use free tools like [PageSpeed Insights](https://pagespeed.web.dev/) to ensure you're delivering the best experience to your users.

## Conclusion

pSEO is a powerful tool in the marketer's toolbox. You can test it cheaply using a spreadsheet and an AI writer. 

But if you really want to supercharge your traffic you need to have a system that consistently creates good content. And you need to understand technical SEO. Here at Owex Labs we've got you covered.

You can book a free [discovery call](https://calendly.com/billy-owex/owex-labs-intro) today to learn how you can take advantage of our pSEO system.