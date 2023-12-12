<template>
  <div>
    <header>
      <h2>Courses Being Offered</h2>
    </header>
    <div class="padding">
      <!-- Button to add a new course -->
      <!--Displays the courses-->
      <v-card class="mx-auto" >
        <v-list v-for="(item, index) in items" :key="index">
              <v-list-item-content>
                <v-list-item-title class="list">{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  <div class="list"><strong>Subject:</strong> {{ item.subject }} </div>
                  <div class="list"><strong>Credit Hours:</strong> {{ item.creditHours }}</div>
                  <div class="list"><strong>Description:</strong> {{ item.description }}</div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list>
        <!--<v-list :items="items" item-props lines="three">
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>-->
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// Import the router if you need to navigate


export default {


  data() {
    return {
      items: [
      ], // This will hold the courses fetched from the backend
    };
  },
  created() {
    this.fetchCourses(); // Fetch courses when the component is created
  },
  methods: {
    fetchCourses() {
    axios.get('http://localhost:3000/courses')
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the courses:", error);
        });
    }
  }
}
</script>


<style>
.list {
  
  margin: 0.25rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.padding {
  padding: 5rem;
  padding-top: 0rem;
  padding-bottom: 2rem;
}

.v-card {

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* Adding a subtle shadow to the card */
  transition: 0.3s;
  /* Smooth transition for hover effect */
  margin-bottom: 20px;
  /* Spacing between cards */
}

.v-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  /* Shadow effect on hover */
}

.v-list-item {
  border-bottom: 1px solid #ddd;
  /* Border for each list item */
}

.v-list-item:last-child {
  border-bottom: none;
  /* No border for the last item */

}

.v-btn {}
</style>