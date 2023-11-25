<template>
    <div>
        <!--Put Nav Element Here-->
        <h4>Courses Being Offered</h4>
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
    data: () => {
        return {

            items: [
                { type: 'divider', inset: true },

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
                    value: 4
                },
            ],
        }
    }
}
</script>
