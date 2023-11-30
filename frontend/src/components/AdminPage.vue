<template>
    <div>
        <h2>
            Add a course
        </h2>
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
        </v-form>>
        

    </div>
</template>

<script>

</script>
<style>

</style>