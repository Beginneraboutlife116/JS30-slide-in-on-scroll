import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector(".scroll-tracker")

scrollTracker.animate(
  {
    scale: ["0 1", "1 1"]
  },
  {
    duration: 1000,
    timeline: new ScrollTimeline({
      scrollOffset: [
        new CSSUnitValue(0, '%'),
        new CSSUnitValue(100, '%')
      ]
    })
  }
)
