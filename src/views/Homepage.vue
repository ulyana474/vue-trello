<template>
    <v-container class="bg-grey-darken-4" fluid>
        <v-row>
            <v-col 
                md="3" 
                align-self="center" 
                justify="center">
                <v-text class="text-h4">Welcome</v-text>
            </v-col>
            <v-col 
                align="right" 
                justify="center">
                <v-btn color="yellow mr-6"><router-link style="text-decoration: none; color: inherit;" to="/login">Login</router-link></v-btn>
                <v-btn icon="mdi-account"></v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="bg-grey" fluid>
      <v-row
        align="center"
        style="min-height: 32em;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-sheet class="pa-2 ma-2" color="#171717">
            <v-card
            class="mx-auto"
            color="grey-lighten-3"
            max-width="200"
            >
            <v-text-field
                density="compact"
                variant="solo"
                label="Change title"
                single-line
                hide-details
            ></v-text-field>
        </v-card>
            <v-col 
                v-for="n in 3"
                :key="n"
            >
            <v-card
            class="mx-auto"
            color="grey-lighten-3"
            max-width="400"
            v-model="task"
            @keyup.enter="saveTask($event.target.value)"
            >
            <v-card-text>
            <v-text-field
                density="compact"
                variant="solo"
                label="Add task"
                append-inner-icon="mdi-plus"
                single-line
                hide-details
            ></v-text-field>
            </v-card-text>
        </v-card>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    saveTask: (task) => {
      alert(task)
    }
  }
}
</script>