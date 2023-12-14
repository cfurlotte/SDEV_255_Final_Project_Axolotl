<template>
  <div v-if="!isLoggedIn">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
  <div v-else-if="isLoggedIn && isAdmin">
    <h2>
      Add a course
    </h2>
    <!--Gets the input for creating a new course-->
    <v-form>
      <v-text-field v-model="courseName" label="Course Name" placeholder="Enter the Course Name" required>
      </v-text-field>
      <v-text-field v-model="courseDescription" label="Course Description"
        placeholder="Enter a description of the course here" required>
      </v-text-field>
      <v-text-field v-model="courseSubject" label="Course Subject" placeholder="Enter the subject of the course here"
        required>
      </v-text-field>
      <v-text-field v-model="courseCreditHours" label="Course Credit Hours"
        placeholder="Enter the number of credit hours the course is worth here" required>
      </v-text-field>
      <v-btn @click="submitCourse">
        Submit
      </v-btn>
    </v-form>>

    <v-list v-for="(item, index) in items" :key="index" class="list">
      <v-list-item-title class="list">{{ item.name }}</v-list-item-title>
      <v-btn @click="deleteCourse(item.name)">Delete</v-btn>
      <v-btn @click="openEditForm(item)">Edit</v-btn>
    </v-list>
    <!--Html for updating classes, only shows when classes are meant to be updated-->
    <div v-if="showEditForm" class="modal">
      <h3>Edit Course</h3>
      <form @submit.prevent="updateCourse">
        <div>
          <label>Name:</label>
          <input v-model="editCourse.name" required />
        </div>
        <div>
          <label>Subject:</label>
          <input v-model="editCourse.subject" required />
        </div>
        <div>
          <label>Credit Hours:</label>
          <input v-model="editCourse.creditHours" required />
        </div>
        <div>
          <label>Description:</label>
          <textarea v-model="editCourse.description" required></textarea>
        </div>
        <button type="submit" @click="updateCourse">Save Changes</button>
        <br>
        <button @click="showEditForm = false">Cancel</button>
        <br>
        
      </form>
    </div>
  </div>
  <label style="margin: 1rem;"></label>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      courseName: '',
      courseDescription: '',
      courseSubject: '',
      courseCreditHours: '',
      items: [
      ],
      editCourse: {},
      showEditForm: false,
      username: '',
      password: '',
      isLoggedIn: false,
      isAdmin: false,
      adminCredentials: {
        username: 'admin', 
        password: '12345' 
      }
    };


  },
  created() {
    this.fetchCourses(); // Fetch courses when the component is created
  },
  methods: {
    submitCourse() {
      const courseData = {
        name: this.courseName,
        description: this.courseDescription,
        subject: this.courseSubject,
        creditHours: this.courseCreditHours
      };
      axios.post('http://localhost:3000/courses', courseData)
        .then(() => {
          // Success feedback, e.g. clear form, show message, etc.
          this.clearForm();
          alert('Course successfully added!');
          // Optionally, redirect or update the view
        })
        .catch(error => {
          // Error feedback
          console.error('Failed to add course:', error);
          alert('Failed to add course.');
        });
    },
    //gets the courses to display the name of the course for editing or deleting
    fetchCourses() {
      axios.get('http://localhost:3000/courses')
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the courses:", error);
        });
    },
    //code for delete the course
    deleteCourse(courseName) {
      axios.delete(`http://localhost:3000/courses/${courseName}`)
        .then(() => {
          this.fetchCourses(); // Refresh the list after deletion
        })
        .catch(error => {
          console.error("There was an error deleting the course:", error);
        });
    },
    
    clearForm() {
      this.courseName = '';
      this.courseDescription = '';
      this.courseSubject = '';
      this.courseCreditHours = '';
    },

    //code for editing courses
    openEditForm(course) {
      this.editCourse = { ...course }; // Make a copy of the course for editing
      this.showEditForm = true; // Show the edit form/modal
    },

    updateCourse() {
      axios.put(`http://localhost:3000/courses/${this.editCourse.id}`, this.editCourse)
        .then(() => {
          this.fetchCourses(); // Refresh the list after updating
          this.showEditForm = false; // Hide the edit form/modal
        })
        .catch(error => {
          console.error("There was an error updating the course:", error);
        });
    },
    login() {
      if (this.username === this.adminCredentials.username && this.password === this.adminCredentials.password) {
        this.isLoggedIn = true;
        this.isAdmin = true;
        // Clear form fields
        this.username = '';
        this.password = '';
      } else {
        alert('Invalid credentials');
        // Optionally, clear password field
        this.password = '';
      }
    }
  },
};
</script>

<!-- Add styles if needed -->
<style>
/* ... */
</style>