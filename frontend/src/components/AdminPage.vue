<template>
    <div>
        <h2>
            Add a course
        </h2>
        <!--Gets the input for creating a new course-->
        <v-form>
            <v-text-field
                v-model="courseName"
                label="Course Name"
                placeholder="Enter the Course Name"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="courseDescription"
                label="Course Description"
                placeholder="Enter a description of the course here"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="courseSubject"
                label="Course Subject"
                placeholder="Enter the subject of the course here"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="courseCreditHours"
                label="Course Credit Hours"
                placeholder="Enter the number of credit hours the course is worth here"
                required
                >
            </v-text-field>
            <v-btn 
                @click="submitCourse"
                >
                Submit
            </v-btn>
        </v-form>>
        
        <!--I cant think what is needed for the front end of deleting a course-->

    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      courseName: '',
      courseDescription: '',
      courseSubject: '',
      courseCreditHours: ''
    };
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
    clearForm() {
      this.courseName = '';
      this.courseDescription = '';
      this.courseSubject = '';
      this.courseCreditHours = '';
    }
  }
};
</script>

<!-- Add styles if needed -->
<style>
/* ... */
</style>