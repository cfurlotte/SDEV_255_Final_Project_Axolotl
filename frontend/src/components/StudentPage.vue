<template>
    <div v-if="!isLoggedIn">
        <h2>Student Login</h2>
        <v-form @submit.prevent="login">
            <v-text-field v-model="username" label="Name" placeholder="Username" required>
            </v-text-field>
            <v-text-field type="password" v-model="password" label="Password" placeholder="Password" required>
            </v-text-field>
            <v-btn type="submit" color="#555">
                Login
            </v-btn>
        </v-form>
    </div>
    <div v-else-if="isLoggedIn && isStudent">
        <h2>Available Courses</h2>
        <v-list v-for="(course, index) in items" :key="index" class="list shrink" style="margin: auto;">
            <v-list-item-title class="list">{{ course.name }}</v-list-item-title>
            <v-btn @click="enrollCourse(course)" color="#333">Enroll</v-btn>
        </v-list>

        <h2>My Courses</h2>
        <v-list v-for="(course, index) in studentCourses" :key="index" class="list shrink" style="margin: auto;">
            <v-list-item-title class="list">{{ course.name }}</v-list-item-title>
            <v-btn @click="dropCourse(course.name)" color="#333">Drop</v-btn>
        </v-list>
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
            studentCourses: [],
            editCourse: {},
            showEditForm: false,
            username: '',
            password: '',
            isLoggedIn: false,
            isStudent: false,
            studentCredentials: {
                username: 'student',
                password: '12345'
            }
        };


    },
    created() {
        this.fetchCourses(); // Fetch courses when the component is created
        this.fetchStudentCourses()
    },
    methods: {
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

        login() {
            if (this.username === this.studentCredentials.username && this.password === this.studentCredentials.password) {
                this.isLoggedIn = true;
                this.isAdmin = true;
                this.isLoggedIn = true;
                this.isStudent = true;
            } else {
                alert('Invalid credentials');
                this.password = '';
            }
        },

        fetchStudentCourses() {
            axios.get('http://localhost:3000/student/courses')
                .then(response => {
                    this.studentCourses = response.data;
                })
                .catch(error => {
                    console.error("There was an error fetching the student's courses:", error);
                });
        },

        enrollCourse(course) {
            if (!this.studentCourses.some(c => c.name === course.name)) {
                this.studentCourses.push(course);
                this.updateStudentCourses();
                alert('Enrolled in course successfully');
            } else {
                alert('Already enrolled in this course');
            }
        },

        dropCourse(courseName) {
            const index = this.studentCourses.findIndex(c => c.name === courseName);
            if (index > -1) {
                this.studentCourses.splice(index, 1);
                this.updateStudentCourses();
                alert('Dropped course successfully');
            }
        },

        updateStudentCourses() {
            axios.post('http://localhost:3000/student/courses', this.studentCourses)
                .catch(error => {
                    console.error("There was an error updating student courses:", error);
                });
        },


    },
};
</script>

<!-- Add styles if needed -->
<style>
/* ... */
</style>