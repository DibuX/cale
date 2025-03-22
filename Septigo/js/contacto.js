document.addEventListener("DOMContentLoaded", () => {
  // Contact Form Validation and Submission
  const contactForm = document.getElementById("contactForm")
  const formSuccess = document.getElementById("formSuccess")

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Basic validation
      if (!name || !email || !subject || !message) {
        alert("Por favor, completa todos los campos del formulario.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.")
        return
      }

      // Simulate form submission (in a real project, you would send data to a server)
      setTimeout(() => {
        // Show success message
        formSuccess.classList.add("active")

        // Reset form
        contactForm.reset()

        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.classList.remove("active")
        }, 5000)
      }, 1000)
    })
  }
})

