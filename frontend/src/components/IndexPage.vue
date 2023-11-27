<template>
  <div>
    <header>
      <h4>Courses Being Offered</h4>
    </header>
    <v-card class="mx-auto">
      <v-list :items="items" item-props lines="three">
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      // Removed the divider item, as it may be causing layout issues.
      {
        title: 'Math 101',
        subtitle: 'A math class',
        value: 1,
      },
      {
        title: 'Math 201',
        subtitle: 'A second math class',
        value: 2,
      },
      {
        title: 'SDEV 101',
        subtitle: 'A SDEV class',
        value: 3,
      },
      {
        title: 'SDEV 201',
        subtitle: 'A second SDEV class',
        value: 4,
      },
    ],
  }),
}
</script>

<style>
  div {
    background-color: #f0f0f0; /* Light grey background */
    padding: 20px; /* Padding around the content */
  }

  header h4 {
    color: #333; /* Dark grey color for the header */
    text-align: center; /* Center-align the header text */
    margin-bottom: 20px; /* Margin below the header */
  }

  .v-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* Adding a subtle shadow to the card */
    transition: 0.3s; /* Smooth transition for hover effect */
    margin-bottom: 20px; /* Spacing between cards */
  }

  .v-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3); /* Shadow effect on hover */
  }

  .v-list-item {
    border-bottom: 1px solid #ddd; /* Border for each list item */
  }

  .v-list-item:last-child {
    border-bottom: none; /* No border for the last item */
  }
</style>
