<template>
    <div class="email-check">
      <h1>Access Statistics</h1>
      <p>Please enter your email to view the statistics.</p>
      <input v-model="email" type="email" placeholder="Enter your email" />
      <button @click="checkEmail">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        validEmail: 'mostafakamal9300@gmail.com',
      };
    },
    methods: {
      checkEmail() {
        if (this.email === this.validEmail) {
          this.$router.push({ name: 'Statistics' });  // Navigate to the statistics page
        } else {
          this.$router.push('/');  // Redirect to homepage if email doesn't match
        }
      }
    }
  };
  </script>
  