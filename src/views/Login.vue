<template>
    <div class="px-2 py-2 lg:pl-24 grid grid-cols-1 lg:grid-cols-12 bg-gray-100 gap-2 min-h-screen items-center">
        <div class="col-span-6">
            <h1 class="font-bold text-5xl text-blue-500 my-4">odinbook</h1>
            <p>odinbook helps you connect and share with people in your life.</p>
        </div>
        <div class="col-span-5">
            <div class="bg-white p-4 shadow-lg">
                <form @submit.prevent='loginUser'>
                    <div>
                        <input v-model="email" type="text" placeholder="Email" class="border p-2 w-full outline-none my-2 rounded-md">
                    </div>
                    <div>
                        <input v-model="password" type="text" placeholder="Password" class="border p-2 w-full outline-none my-2 rounded-md">
                    </div>
                    <div>
                        <button type="submit" class="w-full p-2 bg-blue-500 text-white font-semibold rounded-md my-2">Log in</button>
                    </div>
                    <div>
                        <a><button class="w-full p-2 border text-blue-500 font-semibold rounded-md my-2">Forgot account</button></a>
                    </div>
                </form>
                <div class="text-center my-3">
                    <a><button class="p-3 border bg-green-500 text-white font-semibold rounded-md my-2 mx-auto">Create new account</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
      return {
        email: '',
        password: ''
      }
  },
  methods: {
      async loginUser() {
          try {
              if(localStorage.getItem('token') != null){
                localStorage.removeItem('odinbook_token');
                localStorage.removeItem('odinbook_user');
              }
              let response = await axios.post('http://localhost:3000/login', {email: this.email, password: this.password});
              let token = response.data.token;
              let user = response.data.body._id;
              localStorage.setItem('odinbook_token', token);
              localStorage.setItem('odinbook_user', user);
              this.$router.push('/home');
          } catch (error) {
              console.log(error.response);
          }
      } 
  }
}
</script>

<style>

</style>