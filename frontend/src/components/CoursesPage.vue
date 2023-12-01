<template>
    <div>
        <header>
            <h2>Courses Being Offered</h2>
        </header>
        <div class="padding">
            <!--Displays the courses-->
        <v-card class="mx-auto" >
            <v-list :items="items" item-props lines="three">
                <template v-slot:subtitle="{ subtitle }">
                    <div v-html="subtitle" ></div>
                </template>
            </v-list>
        </v-card>
        </div>
    </div>
</template>
  
<script>
//needs to be pulling the courses from the back end.
export default {
    data: () => ({
        items: [
            // Removed the divider item, as it may be causing layout issues.
            {
                title: 'Swimming 101',
                subtitle: 'How to swim',
                value: 1,
            },
            {
                title: 'Swimming 201',
                subtitle: 'A second swim class',
                value: 2,
            },
            {
                title: 'Social Media 101',
                subtitle: 'A class that will help you become famous',
                value: 3,
            },
            {
                title: 'Social Media 201',
                subtitle: 'A second class that will help you become famous',
                value: 4,
            },
        ],
    }),
}
</script>

<style>

.padding {
    padding: 5rem;
    padding-top: 0rem;
    padding-bottom: 2rem;
}

.v-card {
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    /* Adding a subtle shadow to the card */
    transition: 0.3s;
    /* Smooth transition for hover effect */
    margin-bottom: 20px;
    /* Spacing between cards */
}

.v-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    /* Shadow effect on hover */
}

.v-list-item {
    border-bottom: 1px solid #ddd;
    /* Border for each list item */
}

.v-list-item:last-child {
    border-bottom: none;
    /* No border for the last item */
}</style>