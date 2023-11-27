<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <!-- Add more links as needed -->
    </ul>
  </nav>
</template>
 
<style>
  /* Background and text color */
  nav {
    background-color: #333; /* Dark gray background */
    color: white;
  }

  /* List styling */
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center; /* Center the navigation links */
  }

  /* Link styling */
  nav ul li {
    display: inline;
    margin-right: 20px;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }

  /* Hover effect */
  nav ul li a:hover {
    background-color: #555; /* Slightly lighter gray for hover */
  }

  /* Active link styling */
  .router-link-active {
    border-bottom: 2px solid white;
  }


</style>
