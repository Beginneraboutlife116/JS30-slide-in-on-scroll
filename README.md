# JS30 - 13 - slide-in-on-scroll

## Table of contents
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- scroll down to see the picture with animation for slide in.
- see the scroll timeline for progress during reviewing the website.

### Screenshot

![](./src/screen-record.gif)

### Links

- [Solution URL](https://github.com/Beginneraboutlife116/JS30-slide-in-on-scroll)
- [Live Site URL](https://beginneraboutlife116.github.io/JS30-slide-in-on-scroll/)

### What I learned

1. Intersection Observer
  - Although this challenge practices how to use scroll event to trigger the image showing, I wanna try to use intersection observer to finish this.
  - I don't how to use the intersection observer, so I watch Kevin Powell's videos to achieve this scroll event.
  - And even the intersection observer would have better performance than scroll event to make this animation.
2. Scroll timeline
  - In this part, I just know this by [Kevin's video](https://www.youtube.com/watch?v=VgS5CP7zlXE).
  - Try to use [scroll timeline polyfill](https://github.com/flackr/scroll-timeline) to achieve another way for scroll animation.
    - It's pretty fun, but some variables I can't find the usage about that.
    - So if you want to use this, you may need to watch this video first or dig into the source code to understand how it works.
3. Lazy loading
  - Because in this challenge, it's pretty well to do the lazy loading by using intersection observer, however, I know that there was a attribute for lazy loading by setting on html, I just want to try it.
4. Element.animate()
  - This is also my first time to use this method, because I always use CSS to achieve the animation, and this is a nice chance to use this with the scroll timeline.
  - Could watch Kevin's video which I have mentioned above to have a peep how it works.

### Continued development

I would keep play the intersection observer for modern website design, or even to use some libraries or tools which they are built by this fundamental.

### Useful resources

- [Introduction to the Intersection Observer JavaScript API](https://www.youtube.com/watch?v=T8EYosX4NOo) - This helped me for using intersection observer. It's good to take a look!
- [JavaScript Scroll Animation Tutorial | Web Animations API + ScrollTimeline](https://www.youtube.com/watch?v=VgS5CP7zlXE) - With this video, I know how to use the scroll timeline polyfill.
- [Scroll-timeline Polyfill](https://github.com/flackr/scroll-timeline) - play with it to build a lot of wonderful stuffs!
  - The article for that, it's detailed. [Scroll-Linked Animations With the Web Animations API (WAAPI) and ScrollTimeline](https://css-tricks.com/scroll-linked-animations-with-the-web-animations-api-waapi-and-scrolltimeline/)
- [Lazy loading is too easy now](https://www.youtube.com/watch?v=AActXSWxsRo&t=811s) - It gave me a great demo for lazy loading on HTML.
  - However, this challenge only has 4 images to load, and the last picture is same as the first, so it still loads once the html was finished.
  - But still, it contains tons of knowledge about the `load="lazy"` on HTML.
  - Also, we could check [W3School](https://www.w3schools.com/tags/att_img_loading.asp) for more details.