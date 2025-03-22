document.addEventListener("DOMContentLoaded", () => {
  // Hero Slider
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  const prevButton = document.querySelector(".prev-slide")
  const nextButton = document.querySelector(".next-slide")

  if (slides.length > 0) {
    let currentSlide = 0
    let slideInterval

    // Function to show a specific slide
    const showSlide = (index) => {
      // Hide all slides
      slides.forEach((slide) => {
        slide.classList.remove("active")
      })

      // Remove active class from all dots
      dots.forEach((dot) => {
        dot.classList.remove("active")
      })

      // Show the selected slide
      slides[index].classList.add("active")

      // Add active class to the corresponding dot
      dots[index].classList.add("active")

      // Update current slide index
      currentSlide = index
    }

    // Function to show the next slide
    const nextSlide = () => {
      let next = currentSlide + 1
      if (next >= slides.length) {
        next = 0
      }
      showSlide(next)
    }

    // Function to show the previous slide
    const prevSlide = () => {
      let prev = currentSlide - 1
      if (prev < 0) {
        prev = slides.length - 1
      }
      showSlide(prev)
    }

    // Start automatic slideshow
    const startSlideshow = () => {
      slideInterval = setInterval(nextSlide, 5000)
    }

    // Stop automatic slideshow
    const stopSlideshow = () => {
      clearInterval(slideInterval)
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
        stopSlideshow()
        startSlideshow()
      })
    })

    // Event listeners for prev/next buttons
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        prevSlide()
        stopSlideshow()
        startSlideshow()
      })

      nextButton.addEventListener("click", () => {
        nextSlide()
        stopSlideshow()
        startSlideshow()
      })
    }

    // Start the slideshow
    startSlideshow()
  }
})

