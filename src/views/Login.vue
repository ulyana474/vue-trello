<template>
   <v-container class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="login">
                <v-text-field v-model="username" label="User Name" :rules="usernameRules"></v-text-field>

                <v-text-field v-model="password" label="password" :rules="passwordRules"></v-text-field>
                <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

                <v-btn type="submit" color="yellow mr-6" block class="mt-2">Sign in</v-btn>

            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
   </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      usernameRules: [
        value => {
          if (value?.length > 3) return true

          return 'First name must be at least 3 characters.'
        },
      ],
      passwordRules: [
        value => {
          if (/^.*(?=.*[a-z])(?=.*\d).*$/.test(value)) return true

          return 'Password must contain at least 8 characters of letters, numbers and special symbols'
        }
      ]
    } 
  },
}
</script>
