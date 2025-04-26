export const slideUp = {
   initial: {
      y: "100%",
      x: "100%",
      opacity: 0,
      scale: 0,
   },
   open: (custom)=>({
      y: 0,
      x: 0,
      transition: { duration: custom.duration ? custom.duration : 0.3, delay: 0.05 * custom.index },
      opacity: 1,
      scale: 1,
   }),
   closed: {
      y: "100%",
      x: "100%",
      opacity: 0,
      scale: 0,
   }
}