<template>
    <div>
        <h2>Login</h2>
        <v-form @submit.prevent="loginUser">
            <v-text-field
                v-model="loginForm.userName"
                label="User Name"
                placeholder="Enter your user name"
                required
            ></v-text-field>
            <v-text-field
                v-model="loginForm.password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                required
            ></v-text-field>
            <v-btn type="submit" color="primary">Login</v-btn>
        </v-form>
        <h2 style="padding-top: 0rem;">Sign Up</h2>
        <v-form @submit.prevent="signUpUser">
            <v-text-field
                v-model="signUpForm.firstName"
                label="First Name"
                placeholder="Enter your first name"
                required
            ></v-text-field>
            <v-text-field
                v-model="signUpForm.lastName"
                label="Last Name"
                placeholder="Enter your last name"
                required
            ></v-text-field>
            <v-text-field
                v-model="signUpForm.userName"
                label="User Name"
                placeholder="Enter your user name"
                required
            ></v-text-field>
            <v-text-field
                v-model="signUpForm.email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                required
            ></v-text-field>
            <v-text-field
                v-model="signUpForm.password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                required
            ></v-text-field>
            <v-text-field
                v-model="signUpForm.reenterPassword"
                label="Reenter Password"
                placeholder="Reenter your password"
                type="password"
                required
            ></v-text-field>
            <v-btn type="submit" color="primary">Sign Up</v-btn>
        </v-form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            loginForm: {
                userName: '',
                password: '',
            },
            signUpForm: {
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
                reenterPassword: ''
            }
        };
    },
    methods: {
        loginUser() {
            axios.post('http://localhost:3000/api/login', this.loginForm)
                .then(response => {
                    console.log(response.data);
                    // Redirect or change state
                })
                .catch(error => {
                    console.error('Login failed:', error.response.data);
                });
        },
        signUpUser() {
            if (this.signUpForm.password !== this.signUpForm.reenterPassword) {
                alert('Passwords do not match!');
                return;
            }
            axios.post('http://localhost:3000/api/signup', this.signUpForm)
                .then(response => {
                    console.log(response.data);
                    // Redirect or clear form
                })
                .catch(error => {
                    console.error('Sign-up failed:', error.response.data);
                });
        }
    }
};
</script>

<style>
/* Your styles here */
</style>
