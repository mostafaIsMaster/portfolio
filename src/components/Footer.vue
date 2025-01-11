<template>
  <footer class="footer-area">
    <div class="container">
      <div class="">
        <!-- Site Logo Section -->
        <div class="site-logo text-center py-4">
          <img src="@/assets/img/logo/logo.png" style="width: 44px; object-fit: cover; border-radius: 50%;" alt="logo">
        </div>

        <!-- New Content Section -->
        <div class="text-center">
          <hr />
          <div class="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.fiverr.com/kamalmdmostafa/"
              class="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" fill="currentColor">
                <path
                  d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kamalmdmostafa/"
              class="social-link"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/mostafakamal25/"
              class="social-link"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a href="mailto: mostafakamal9300@gmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <!-- Copyright Section -->
        <!-- Copyright Section with Link to Fiverr Profile -->
        <div class="copyrights text-center">
          <p class="para">
            Copyright &copy; 2025 by <a href="https://www.fiverr.com/kamalmdmostafa" target="_blank">Mostaaka Kamal</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-area {
  background-color: #f8f9fa;
  padding: 2rem 0;
}
.social {
  margin: 1rem 0;
}
.social-link {
  margin: 0 10px;
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
}
.social-link:hover {
  color: #007bff;
}
.site-buttons .button a {
  text-decoration: none;
  color: white;
}
.primary-button {
  background-color: #007bff;
  border: none;
}
.secondary-button {
  background-color: #6c757d;
  border: none;
}
</style>

<script>
export default {
  name: "FooTer",
};
</script>
