
<template>  
  <div id = app>
    <NavBar />
    <IndexPage />
  </div>
</template>

<script>
import IndexPage from './components/IndexPage.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    IndexPage,
    NavBar // Added a comma before this line
  }
}
</script>

<style>

  
</style>

