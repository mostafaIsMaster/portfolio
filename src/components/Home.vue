<template>
<About></About>
<Experience></Experience>
<Education></Education>
<Skills></Skills>
<Projects></Projects>
</template>

<script>
import About from './About.vue'
import Experience from './Experience.vue'
import Education from './Education.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'

export default {
  name: 'HomeIndex',
 components: {
    About,
    Experience,
    Education,
    Skills,
    Projects,
  },
}
</script>
