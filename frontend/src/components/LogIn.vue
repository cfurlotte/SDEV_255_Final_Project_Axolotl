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
                required
                >

            </v-text-field>
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
        </v-form>>
        

    </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      reenterPassword: ''
    };
  },
  // methods, etc.
};
</script>
<style>

</style>