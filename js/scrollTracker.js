import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector(".scroll-tracker")
const popUp = document.querySelector(".pop-up")

scrollTracker.animate(
  {
    scale: ["0 1", "1 1"]
  },
  {
    duration: 1000,
    timeline: new ScrollTimeline({
      scrollOffset: [new CSSUnitValue(0, "%"), new CSSUnitValue(100, "%")]
    })
  }
)

popUp.animate(
  {
    opacity: "1",
    clipPath: ["circle(0%)", "circle(125%)"]
  },
  {
    duration: 1,
    fill: "both",
    timeline: new ScrollTimeline({
      scrollSource: document.scrollingElement,
      timeRange: 1,
      fill: "both",
      scrollOffsets: [
        { target: popUp, edge: "end", threshold: 0.5 },
        { target: popUp, edge: "end", threshold: 1 }
      ]
    })
  }
)
