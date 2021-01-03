<template>
    <v-card>
        <v-dialog ref="dialog2" v-model="modal2" :return-value.sync="time" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="quiz.start_time" label="Start time" prepend-icon="mdi-clock-time-four-outline"
            readonly v-bind="attrs" v-on="on" outlined></v-text-field>
            </template>
        <v-time-picker v-model="asd" scrollable name="Start time">
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog2.save(time1)" >OK</v-btn>
        </v-time-picker>
        </v-dialog>
    </v-card>
</template>
<script>
export default {
    data: ()=>({
        modal2: false,
    })
}
</script>