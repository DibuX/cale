document.addEventListener("DOMContentLoaded", () => {
  // Portfolio Filtering
  const filterButtons = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => {
          btn.classList.remove("active")
        })

        // Add active class to clicked button
        this.classList.add("active")

        // Get filter value
        const filterValue = this.getAttribute("data-filter")

        // Filter items
        portfolioItems.forEach((item) => {
          if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
            item.style.display = "block"

            // Add animation
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "scale(1)"
            }, 100)
          } else {
            item.style.opacity = "0"
            item.style.transform = "scale(0.8)"

            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }

  // Portfolio Modal
  const modal = document.getElementById("projectModal")
  const modalBody = document.querySelector(".modal-body")
  const closeModal = document.querySelector(".close-modal")
  const viewButtons = document.querySelectorAll(".portfolio-view")

  if (modal && modalBody && closeModal && viewButtons.length > 0) {
    // Open modal with project details
    viewButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()

        // Get project ID
        const projectId = this.getAttribute("data-project")

        // Get project content
        const projectContent = document.getElementById(projectId)

        if (projectContent) {
          // Clone the content and append to modal
          modalBody.innerHTML = ""
          modalBody.appendChild(projectContent.cloneNode(true))

          // Show modal
          modal.style.display = "block"

          // Prevent body scrolling
          document.body.style.overflow = "hidden"
        }
      })
    })

    // Close modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    })

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none"
        document.body.style.overflow = "auto"
      }
    })
  }
})

