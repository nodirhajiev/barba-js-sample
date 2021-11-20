function leaveAnim() {
  gsap.to('.loading_page', 2, {
    opacity: 1,
    width: '100%',
  })

  gsap.to('.loading_page h1', 2, {
    delay: 0.5,
    opacity: 1,
    visibility: 'visible',
  })

  gsap.to('.loading_page, .loading_page h1', 3, {
    delay: 3,
    opacity: 0,
    width: '0%',
  })
}

function delay(n) {
  n = n || 2000
  return new Promise((done) => {
    setTimeout(() => {
      done()
    }, n)
  })
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave() {
        const done = this.async()
        leaveAnim()
        await delay(2000)
        done()
      },
      async enter() {},
    },
  ],
})
