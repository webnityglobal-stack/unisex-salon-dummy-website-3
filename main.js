
document.addEventListener("DOMContentLoaded", () => {

  // Gallery filter
  const filterButtons = document.querySelectorAll("[data-filter]");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      galleryItems.forEach(item => {
        item.style.display =
          filter === "all" || item.dataset.category === filter
            ? "block"
            : "none";
      });
    });
  });

  // Booking form
  const bookingForm = document.getElementById("booking-form");

  if (bookingForm) {
    const dateInput = bookingForm.querySelector('[name="date"]');

    if (dateInput) {
      const today = new Date();
      dateInput.min = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
      ).toISOString().split("T")[0];
    }

    bookingForm.addEventListener("submit", event => {
      event.preventDefault();

      const data = new FormData(bookingForm);

      const message = `
Hello Lumière Salon!

Name: ${data.get("name")}
Phone: ${data.get("phone")}
Service: ${data.get("service")}
Date: ${data.get("date")}
Time: ${data.get("time")}
Message: ${data.get("message")}
      `;

      const whatsappNumber = "919876543210";

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      const notice = document.getElementById("form-notice");
      if (notice) {
        notice.textContent = "Your request is ready in WhatsApp. Press Send to contact the salon.";
        notice.classList.add("show");
      }
    });
  }
});
