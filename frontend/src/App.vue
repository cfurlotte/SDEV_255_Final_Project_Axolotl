
<template>
  <div id=app>
    <NavBar />
    <main>
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar // Added a comma before this line
  }
}
</script>

<style>
/*body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 100%;
}*/

h2 {
  padding-top: 2rem;
  color: #333;
  /* Dark grey color for the header */
  text-align: center;
  /* Center-align the header text */
  padding-bottom: 2rem;
}

h2 {
  padding-top: 2rem;
  color: #333;
  /* Dark grey color for the header */
  text-align: center;
  /* Center-align the header text */
}

p {
  padding: 5rem;
  padding-top: 0rem;
  padding-bottom: 2rem;
  font-size: 1.2rem;
}

.v-form {
  margin: auto;
  padding-bottom: 0rem;
  width: 550px;
}

@media only screen and (max-width: 600px) {
  .v-form {
    width: 350px;
  }
}
</style>

