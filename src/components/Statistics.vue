<template>
    <div class="statistics-dashboard">
      <h1>Website Statistics</h1>
      <div class="stats-container">
        <!-- Display Total Visitors -->
        <div class="stat-item">
          <h2>Total Visitors</h2>
          <p>{{ totalVisitors }}</p>
        </div>
  
        <!-- Display Visitors by Location -->
        <div class="stat-item">
          <h2>Visitors by Location</h2>
          <ul>
            <li 
              v-for="(count, location) in visitorsByLocation" 
              :key="location"
              @click="selectVisitor(location)"
            >
              {{ location }}: {{ count }}
            </li>
          </ul>
        </div>
  
        <!-- Display Visitor Information -->
        <div v-if="selectedVisitor">
          <h2>Visitor Information</h2>
          <ul>
            <li>IP: {{ selectedVisitor.ip }}</li>
            <li>Hostname: {{ selectedVisitor.hostname }}</li>
            <li>City: {{ selectedVisitor.city }}</li>
            <li>Region: {{ selectedVisitor.region }}</li>
            <li>Country: {{ selectedVisitor.country }}</li>
            <li>Location: {{ selectedVisitor.loc }}</li>
            <li>Organization: {{ selectedVisitor.org }}</li>
            <li>Postal Code: {{ selectedVisitor.postal }}</li>
            <li>Timezone: {{ selectedVisitor.timezone }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  const token = import.meta.env.VITE_IPINFO_TOKEN;
  
  export default {
    name: "Statistics",
    data() {
      return {
        totalVisitors: 0,
        visitorsByLocation: {},
        visitorData: {
          ip: '',
          hostname: '',
          city: '',
          region: '',
          country: '',
          loc: '',
          org: '',
          postal: '',
          timezone: '',
        },
        
        selectedVisitor: null, // Store selected visitor's details
      };
    },
    methods: {
      async trackVisitor() {
        const token = import.meta.env.VITE_IPINFO_TOKEN; // Ensure the token is securely fetched
        try {
          const response = await fetch(`https://ipinfo.io/json?token=${token}`);
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          const location = data.country || "Unknown";
  
          // Update visitor data
          this.visitorData = {
            ip: data.ip || 'Unknown',
            hostname: data.hostname || 'Unknown',
            city: data.city || 'Unknown',
            region: data.region || 'Unknown',
            country: data.country || 'Unknown',
            loc: data.loc || 'Unknown',
            org: data.org || 'Unknown',
            postal: data.postal || 'Unknown',
            timezone: data.timezone || 'Unknown',
          };
  
          // Update visitors statistics
          this.totalVisitors += 1;
          if (this.visitorsByLocation[location]) {
            this.visitorsByLocation[location] += 1;
          } else {
            this.visitorsByLocation[location] = 1;
          }
  
          console.log("Updated visitor statistics:", {
            totalVisitors: this.totalVisitors,
            visitorsByLocation: this.visitorsByLocation,
          });
        } catch (error) {
          console.error("Error fetching visitor location:", error);
        }
      },
  
      // Method to handle selecting a visitor and displaying their details
      selectVisitor(location) {
        // In this case, we assume each location will have a visitor record stored in visitorData.
        // You can modify this as per your actual data structure for storing visitors.
        
        // Example logic (you may adjust based on your needs):
        if (this.visitorsByLocation[location]) {
          this.selectedVisitor = this.visitorData; // This should be updated according to the data structure
        }
      }
    },
    mounted() {
      this.trackVisitor();
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  



  <style scoped>
  .statistics-dashboard {
    font-family: Arial, sans-serif;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .stats-container {
    display: flex;
    gap: 20px;
  }
  
  .stat-item {
    flex: 1;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    text-align: center;
  }
  
  .stat-item h2 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  
  .stat-item p {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .stat-item ul {
    list-style: none;
    padding: 0;
  }
  
  .stat-item ul li {
    font-size: 1rem;
    margin: 5px 0;
  }
  </style>
  