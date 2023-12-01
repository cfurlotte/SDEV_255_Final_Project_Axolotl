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
        </v-form>>
        
        <!--I cant think what is needed for the front end of deleting a course-->

    </div>
</template>

<script>

</script>
<style>

</style>