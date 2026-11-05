
const header = `
<div class="topbar">
  <div class="container">
    <span>✦ PREMIUM UNISEX SALON</span>
    <span>Open Daily: 10 AM - 8 PM</span>
  </div>
</div>

<header class="site-header">
  <div class="container nav-wrap">
    <a href="index.html" class="brand">
      <span class="brand-mark">L</span>
      <span class="brand-name">LUMIÈRE
        <small>UNISEX SALON & SPA</small>
      </span>
    </a>

    <button class="menu-toggle" aria-label="Toggle menu">☰</button>

    <nav class="nav-links">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="service.html">Services</a>
      <a href="men-services.html">Men</a>
      <a href="women-services.html">Women</a>
      <a href="bridal.html">Bridal</a>
      <a href="gallery.html">Gallery</a>
      <a href="contact.html">Contact</a>
      <a href="booking.html" class="btn nav-cta">Book Now</a>
    </nav>
  </div>
</header>
`;

const footer = `
<footer class="footer">
  <div class="container footer-grid">
    <div>
      <h2>LUMIÈRE</h2>
      <p>Premium Unisex Salon & Spa.</p>
      <p>Beauty, grooming and self-care for everyone.</p>
    </div>

    <div>
      <h3>Quick Links</h3>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="gallery.html">Gallery</a>
    </div>

    <div>
      <h3>Our Services</h3>
      <a href="men-services.html">Men's Salon</a>
      <a href="women-services.html">Women's Salon</a>
      <a href="bridal.html">Bridal Makeup</a>
      <a href="booking.html">Appointment</a>
    </div>

    <div>
      <h3>Contact Us</h3>
      <p>12, The Avenue, Your City</p>
      <p>+91 98765 43210</p>
      <p>hello@lumieresalon.in</p>
    </div>
  </div>

  <div class="copyright">
    © <span id="year"></span> Lumière Salon. All Rights Reserved.
  </div>
</footer>

<a class="whatsapp"
 href="https://wa.me/919876543210"
 target="_blank" rel="noopener">✆</a>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-header").innerHTML = header;
  document.getElementById("site-footer").innerHTML = footer;

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.textContent =
      nav.classList.contains("open") ? "✕" : "☰";
  });

  const currentPage = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  document.getElementById("year").textContent =
    new Date().getFullYear();
});
