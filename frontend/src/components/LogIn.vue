<template>
    <div>
        <h2>
            Login
        </h2>
        <v-form>
            <!--Login in for old users, does not currently do anything.-->
            <v-text-field
                v-model="userName"
                label="User Name"
                placeholder="Enter your user name"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                required>
                

            </v-text-field>
            <v-btn type="submit" color="primary">login</v-btn>
        </v-form>>
        <h2 style="padding-top: 0rem;">
            Sign Up
        </h2>
        <!--Sign up for new users, does not currently do anything-->
        <v-form>
            <v-text-field
                v-model="firstName"
                label="First Name"
                placeholder="Enter your user name"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="lastName"
                label="Last Name"
                placeholder="Enter your user name"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="userName"
                label="User Name"
                placeholder="Enter your user name"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                required
                >
            </v-text-field>
            <v-text-field
                v-model="reenterPassword"
                label="Reenter Password"
                placeholder="Reenter your password"
                type="password"
                required
                >
            </v-text-field>
            <v-btn type="submit" color="primary">Sign Up</v-btn>
        </v-form>>
        

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
      // Implement login logic here
      axios.post('/api/login', this.loginForm)
        .then(response => {
          // Handle successful login
          console.log(response.data);
          // You would typically store the token in local storage and redirect the user
        })
        .catch(error => {
          console.error('Login failed:', error.response.data);
        });
    },
    signUpUser() {
      // Implement sign-up logic here
      if (this.signUpForm.password !== this.signUpForm.reenterPassword) {
        alert('Passwords do not match!');
        return;
      }
      axios.post('/api/signup', this.signUpForm)
        .then(response => {
          // Handle successful sign-up
          console.log(response.data);
          // Redirect user or clear form
        })
        .catch(error => {
          console.error('Sign-up failed:', error.response.data);
        });
    }
  }
};
</script>
<style>

</style>