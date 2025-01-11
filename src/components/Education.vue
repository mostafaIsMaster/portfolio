<template>
    <section class="faq-section py-5" id="education">
      <div class="container single-col-max">
        <div class="row text-center">
          <div class="col-12">
            <div class="about-title">
              <h3 class="text-uppercase title-text" style="font-size: 35px;">Education</h3>
            </div>
          </div>
        </div>
        <div id="faq-accordion" class="faq-accordion mx-auto">
          <!-- Bachelor's Degree -->
          <div class="card border-0 mb-4 shadow-sm">
            <div class="card-header border-0 p-4 theme-bg-light">
              <h4 class="card-title mb-0 exp">
                <i class="fas fa-school mr-2"></i>
                <a
                  data-parent="#faq-accordion"
                  data-toggle="collapse"
                  class="card-toggle collapsed"
                  href="#education1"
                  aria-expanded="false"
                >
                  Bachelor of Science in Computer Science and Engineering (American International University-Bangladesh)
                </a>
                <span>2016</span>
              </h4>
            </div>
          </div>
  
          <!-- Master's Degree -->
          <div class="card border-0 mb-4 shadow-sm">
            <div class="card-header border-0 p-4 theme-bg-light">
              <h4 class="card-title mb-0 exp">
                <i class="fas fa-school mr-2"></i>
                <a
                  data-parent="#faq-accordion"
                  data-toggle="collapse"
                  class="card-toggle collapsed"
                  href="#education2"
                  aria-expanded="false"
                >
                  Master of Science in Computer Science and Engineering (North South University)
                </a>
                <span>2020</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .mr-auto {
    margin-right: auto !important;
  }
  </style>
  
  <script>
  export default {
    name: "MyEducation",
  };
  </script>
  