<template>
  <div>
    <h2>Create New Course</h2>
    <form @submit.prevent="submitCourse">
      <div>
        <label for="title">Course Title:</label>
        <input id="title" v-model="course.title" required>
      </div>
      <div>
        <label for="subtitle">Course Subtitle:</label>
        <input id="subtitle" v-model="course.subtitle" required>
      </div>
      <button type="submit">Create Course</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      course: {
        title: '',
        subtitle: ''
      }
    };
  },
  methods: {
    submitCourse() {
      axios.post('http://localhost:3000/courses', this.course)
        .then(() => {
          alert('Course created!');
          this.course = { title: '', subtitle: '' }; // Reset form
          // Redirect or update UI
        })
        .catch(error => {
          console.error('Error creating course:', error);
          alert('Failed to create course');
        });
    }
  }
};
</script>

<style>
/* Add styles for your form here */
</style>
