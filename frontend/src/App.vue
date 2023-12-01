
<template>
  <div id=app>
    <!--Displays the Nav, then the main webpage that is switched out, then the footer at the bottom of the page.-->
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
/*code that effects most of the website, changing this will have big changes*/
/*body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
*/
/*code to set the website to dark mode*/
html {
  background-color: #444;
}
main {
  color: white;
}

h2 {
  padding-top: 2rem;
  color: white;
  /* Dark grey color for the header */
  text-align: center;
  /* Center-align the header text */
  padding-bottom: 2rem;
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
/*simple code to make the inputs display rite while on a mobile application*/
@media only screen and (max-width: 600px) {
  .v-form {
    width: 350px;
  }
}
</style>

