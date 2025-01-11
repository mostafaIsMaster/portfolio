<template>
  <section id="projects" class="projects-area">
    <div class="container">
      <h2>My <span>Projects</span></h2>

      <!-- Filter Buttons -->
      <div class="filter-buttons">
        <button @click="filterProjects('all')" :class="{ active: activeFilter === 'all' }">All</button>
        <button @click="filterProjects('wordpress')" :class="{ active: activeFilter === 'wordpress' }">Wordpress</button>
        <button @click="filterProjects('elementor')" :class="{ active: activeFilter === 'elementor' }">Elementor</button>
        <button @click="filterProjects('php')" :class="{ active: activeFilter === 'php' }">PHP</button>
        <button @click="filterProjects('laravel')" :class="{ active: activeFilter === 'laravel' }">Laravel</button>
        <button @click="filterProjects('vue')" :class="{ active: activeFilter === 'vue' }">Vue</button>
        <button @click="filterProjects('react')" :class="{ active: activeFilter === 'react' }">React</button>

      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div v-for="project in filteredProjects" :key="project.id" class="project-card">
          <!-- Project Image -->
          <div class="project-image">
            <img :src="project.ImagesURL || '/default-react-image.jpg'" alt="project showcase image">
          </div>

          <!-- Project Details -->
          <div class="project-details">
            <h3>{{ project.name }}</h3>
            <ul>
              <li v-for="icon in project.madeWith" :key="icon">{{ icon }}</li>
            </ul>
            <p>{{ project.description }}</p>

            <!-- Project Links -->
            <div class="project-links">
  <a :href="project.url" target="_blank" :class="{ disabled: project.url === '' }">
    <span v-if="project.url === ''">Not Live yet</span>
    <span v-else>Live</span>
  </a>
  <a :href="project.related_fiverr_gig" class="mycolor" target="_blank">Fiverr Gig</a>
          </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { ref, computed } from 'vue';
import aiurrimontessori from '@/assets/img/projects/aiurrimontessori.com_.jpg'
import disraptors from '@/assets/img/projects/disraptors.com_.jpg'
import comx from '@/assets/img/projects/comx.uogs_.co_.u.jpg'
import messs from '@/assets/img/projects/messs.com_.br_.jpg'
import eatyjet from '@/assets/img/projects/eatyjet.com_.jpg'
import grupocriativo from '@/assets/img/projects/grupocriativo.com_.jpg'
import offsitesystems from '@/assets/img/projects/offsitesystems.co_.uk_.jpg'
import school from '@/assets/img/projects/school-portal.png'

export default {
  setup() {
    const projectsList = ref([
            {
                name: "Aiurri Montessori.",
                id: "aiurrimontessori",
                madeWith: ["wordpress", "elementor", "jetengine"],
                description: "At Spain’s Aiurri Montessori they have created spaces that children can feel are their own. Spaces that take into account their needs in order to build themselves and where they can be free to follow their natural tendencies and thus develop all their potential by following their inner teacher.",
                ImagesURL: aiurrimontessori,
                url: "https://aiurrimontessori.com/",
                related_fiverr_gig: "https://www.fiverr.com/s/BR0zap1"
            },
            {
                name: "Disraptors.",
                id: "disraptors",
                madeWith: ["wordpress", "elementor", "Premium Addons", "ACF"],
                description: "Disraptors is a group of people from various backgrounds — VCs, Investor banks, startups, NGOs, and space agencies. Together they stand, divided they sometimes work on other stuff. They produce a diverse fleet of content, the Disraptors Summit with the European Startup Championship Finale is our flagship.",
                ImagesURL: disraptors,
                url: "https://disraptors.com/",
                related_fiverr_gig: "https://www.fiverr.com/s/BR0zap1"
            },            
            {
                name: "School Portal.",
                id: "school-portal",
                madeWith: ["wordpress", "ELementor", "Jetengine", "Rest API", "Woocommerce", "PHP", "js"],
                description: "A school portal is an online platform that connects students, parents, and teachers, providing easy access to grades, assignments, and communication tools. It streamlines administrative tasks and supports academic collaboration. ",
                ImagesURL: school,
                url: "https://offsitesystems.co.uk/",
                related_fiverr_gig: "https://www.fiverr.com/s/rEABlWD"
            },
            {
                name: "COMX.",
                id: "comx",
                madeWith: ["wordpress", "Premium Addons", "LoftLoader", "Custom Post Type UI", "Dynamic Conditions", "ACF Frontend"],
                description: "COMX is an incredible exhibition of digital projects spanning videogames, interactive technologies, animation, and art, all created by the talented students of the University of Gloucestershire’s School of Game Technologies. ",
                ImagesURL: comx,
                url: "https://comx.uogs.co.uk/22/",
                related_fiverr_gig: "https://www.fiverr.com/s/BR0zap1"
            },
            {
                name: "MESSS.",
                id: "messs",
                madeWith: ["react", "js", "css", "html"],
                description: "MESSS is a Brazilian creative agency and studio made up of a team of restless professionals ready to rethink their clients’ brand communication in the most original way possible. From strategy to execution, on, off, and even beyond the atmosphere: they promise total dedication to make their clients’ voices echo far and wide. ",
                ImagesURL: messs,
                url: "https://messs.com.br/",
                related_fiverr_gig: "https://www.fiverr.com/s/998DoAY"
            },
            {
                name: "Eatyjet.",
                id: "eatyjet",
                madeWith: ["vuetify", "vue", "js", "css", "html"],
                description: "Eatyjet was born out of a series of catastrophic misfortunes: A pandemic, curfews, hotel closures, and a long desire to catch the first plane to Greenland and hike through the fjords. Thus began the idea to start creating trips through a box.",
                ImagesURL: eatyjet,
                url: "https://messs.com.br/",
                related_fiverr_gig: "https://www.fiverr.com/s/998DoAY"
            },
            {
                name: "Grupocriativo.",
                id: "grupocriativo",
                madeWith: ["Laravel","PHP", "vue", "js", "css", "html"],
                description: "Grupo Criativo is a design and branding agency that believes there is no design without a complete view of the value cycle of the product. They view designers as the catalysts for changes, both for stakeholders and shareholders and any changes must encompass people, processes, and consistent deliverables.",
                ImagesURL: grupocriativo,
                url: "https://grupocriativo.com/",
                related_fiverr_gig: "https://www.fiverr.com/s/pdAm4vY"
            },
            {
                name: "Off-Site Systems.",
                id: "offsitesystems",
                madeWith: ["wordpress", "ELementor", "PHP", "js", "css", "html"],
                description: "Off-Site Systems offers innovative alternatives to traditional construction techniques. With years of combined experience in the construction, technology, design, and fire protection industries, it directly addresses the growing need for energy-efficient construction systems. ",
                ImagesURL: offsitesystems,
                url: "https://offsitesystems.co.uk/",
                related_fiverr_gig: "https://www.fiverr.com/s/998DoAY"
            },            
        ])

const activeFilter = ref('all');

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projectsList.value;
  } else {
    const filterValue = activeFilter.value.toLowerCase();
    return projectsList.value.filter(project => {
  return project.madeWith.some(tech => tech.toLowerCase().includes(filterValue));
});

  }
});

const filterProjects = (category) => {
  // console.log(category)
  activeFilter.value = category;
};

return {
  projectsList,
  activeFilter,
  filteredProjects,
  filterProjects
};
  }
};
</script>


<style scoped>
/* Container Styles */
#projects {
  padding: 4rem 0;
  background-color: #f9fafb;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.project-links a{
  color: white !important;
}
.project-links a:hover {
  transform: translateY(-3px); /* Slight upward movement */
  background-color: #2563eb; /* Hover background color */
  color: white; /* Text color on hover */
}
.mycolor{
  background-color: #2563eb; /* Hover background color */}
/* Heading Styles */
h2 {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 3rem;
}

h2 span {
  color: #3b82f6;
}

/* Filter Buttons */
.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-buttons button {
  padding: 1rem 2rem;
  background-color: #f3f4f6;
  color: #1f2937;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
}

.filter-buttons button:hover {
  background-color: #e5e7eb;
}

.filter-buttons button.active {
  background-color: #3b82f6;
  color: white;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.project-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  overflow: hidden;
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

/* Project Image */
.project-image {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 200px; /* Fixed height to prevent uneven layouts */
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image img:hover {
  transform: scale(1.1);
}

/* Project Details */
.project-details h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.project-details ul {
  display: flex;
  flex-wrap: wrap; /* Prevent overlapping tags */
  gap: 0.5rem;
  margin-bottom: 1rem;
  list-style-type: none;
  text-align: left !important;
}

.project-details li {
  font-size: 0.875rem;
  color: #4b5563;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 0.25rem;
  white-space: nowrap; /* Prevent text wrapping */
  border: 1px solid #3b82f6;
  padding: 3px 8px;
}
.project-details li:hover {
  cursor: pointer; /* Change cursor to pointer on hover */
  background: #3b82f6; /* Optional: Change text color on hover */
  columns: white !important;
  border: none;
}

.project-details p {
  color: #4b5563;
  margin-bottom: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Project Links */
.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.project-links a:first-child {
  background-color: #3b82f6;
  color: white;
}

.project-links a:first-child:hover {
  background-color: #2563eb;
}

.project-links a.disabled {
  background-color: #d1d5db;
  color: #9ca3af;
  pointer-events: none;
}

.project-links a:last-child {
  border: 2px solid #3b82f6;
  color: #3b82f6;
}

.project-links a:last-child:hover {
  background-color: #3b82f6;
  color: white;
}
</style>
