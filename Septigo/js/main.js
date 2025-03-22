// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Loader
  setTimeout(() => {
    const loader = document.querySelector(".loader")
    if (loader) {
      loader.classList.add("hidden")
      // Remove loader from DOM after animation completes
      setTimeout(() => {
        loader.style.display = "none"
      }, 500)
    }
  }, 1000)

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  }

  // Back to Top Button
  const backToTopButton = document.querySelector(".back-to-top")

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("visible")
      } else {
        backToTopButton.classList.remove("visible")
      }
    })

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }

  // Animate on Scroll
  const animatedElements = document.querySelectorAll("[data-aos]")

  if (animatedElements.length > 0) {
    const animateOnScroll = () => {
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight * 0.85) {
          element.classList.add("aos-animate")
        }
      })
    }

    // Initial check
    animateOnScroll()

    // Check on scroll
    window.addEventListener("scroll", animateOnScroll)
  }
})

