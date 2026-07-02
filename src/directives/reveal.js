// v-reveal: adds the "reveal" class immediately and toggles "show"
// once the element scrolls into view, powering the fade/slide-up effect.
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        io.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

export const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    io.observe(el)
  },
}
