<template>
  <nav class="navbar-container">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to ="/courses">Courses</router-link></li>
      <li><router-link to="/log-in">Log In</router-link></li>
      <li><router-link to="/admin">Admin</router-link></li>
      <!-- Add more links as needed -->
    </ul>
  </nav>
</template>

<style>
  /* Styles specific to the navbar container */
  .navbar-container {
    background-color: #333; /* Dark gray background */
    color: white;
    text-align: center; /* Center the navigation links */
    position: fixed;
    width: 100%;
  }

  /* List styling */
  .navbar-container ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  /* Link styling */
  .navbar-container ul li {
    display: inline;
    margin-right: 20px;
  }

  .navbar-container ul li a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }

  /* Hover effect */
  .navbar-container ul li a:hover {
    background-color: #555; /* Slightly lighter gray for hover */
  }

  /* Active link styling 
  .navbar-container .router-link-active {
    border-bottom: 2px solid white;
  }*/
</style>

