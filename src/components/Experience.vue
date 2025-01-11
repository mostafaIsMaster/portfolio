<template>
    <section class="faq-section py-5" id="experience">
      <div class="container single-col-max">
        <div class="row text-center">
          <div class="col-12">
            <div class="about-title">
              <h3 class="text-uppercase title-text" style="font-size: 35px;">Experience</h3>
            </div>
          </div>
        </div>
        <div id="exp-accordion" class="faq-accordion mx-auto">
          <!-- Fiverr -->
          <div class="card border-0 mb-4 shadow-sm">
            <div class="card-header border-0 p-4 theme-bg-light">
              <h4 class="card-title mb-0 exp">
                <i class="fas fa-briefcase mr-2"></i>
                <a
                  data-parent="#exp-accordion"
                  data-toggle="collapse"
                  class="card-toggle collapsed"
                  href="#experience1"
                  aria-expanded="false"
                >
                  <i class="fas fa-chevron-down"></i>
                  Fiverr (<i>WordPress Developer</i>)
                </a>
                <span>Freelancing – Present</span>
              </h4>
            </div>
            <div class="card-collapse collapse" id="experience1">
              <div class="card-body p-4 bg-white">
                <ul>
                  <li>Developed and customized WordPress themes and plugins for clients worldwide.</li>
                  <li>Created fully responsive websites tailored to client requirements.</li>
                  <li>Optimized site performance, ensuring fast load times and enhanced user experience.</li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- CircleFindTech -->
          <div class="card border-0 mb-4 shadow-sm">
            <div class="card-header border-0 p-4 theme-bg-light">
              <h4 class="card-title mb-0 exp">
                <i class="fas fa-building mr-2"></i>
                <a
                  data-parent="#exp-accordion"
                  data-toggle="collapse"
                  class="card-toggle collapsed"
                  href="#experience2"
                  aria-expanded="false"
                >
                  <i class="fas fa-chevron-down"></i>
                  CircleFindTech (<i>Software Engineer</i>)
                </a>
                <span>January 2022 – December 2023</span>
              </h4>
            </div>
            <div class="card-collapse collapse" id="experience2">
              <div class="card-body p-4 bg-white">
                <ul>
                  <li>Developed and maintained software solutions for various clients, ensuring high-quality code.</li>
                  <li>Collaborated with cross-functional teams to deliver innovative and scalable solutions.</li>
                  <li>Led efforts in software debugging and performance optimization, reducing downtime by 30%.</li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- ToggyWorld -->
          <div class="card border-0 mb-4 shadow-sm">
            <div class="card-header border-0 p-4 theme-bg-light">
              <h4 class="card-title mb-0 exp">
                <i class="fas fa-building mr-2"></i>
                <a
                  data-parent="#exp-accordion"
                  data-toggle="collapse"
                  class="card-toggle collapsed"
                  href="#experience3"
                  aria-expanded="false"
                >
                  <i class="fas fa-chevron-down"></i>
                  ToggyWorld (<i>IT Associate Software Engineer</i>)
                </a>
                <span>July 2019 – December 2021</span>
              </h4>
            </div>
            <div class="card-collapse collapse" id="experience3">
              <div class="card-body p-4 bg-white">
                <ul>
                  <li>Designed and implemented features for web applications and internal tools.</li>
                  <li>Provided IT support and maintenance for software systems, improving team efficiency.</li>
                  <li>Documented development processes and best practices for future reference.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "MyExperience",
  };
  </script>
  