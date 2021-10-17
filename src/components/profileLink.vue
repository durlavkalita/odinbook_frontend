<template>
  <div>
    <router-link :to="{name: 'User', params: {userid: user}}">
        <div class="flex items-center py-1 px-1">
            <div>
                <img class="h-12 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
            </div>
            <div class="ml-2">
                <p class="font-semibold">{{userName}}</p>
            </div>
        </div>
      </router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['user'],
  data() {
    return {
      userName: ""
    }
  },
  computed: {
  },
  methods: {
    async fetchUserName() {
        const token = localStorage.getItem('odinbook_token')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.get(`http://localhost:3000/api/user/${this.user}/name`, {headers: headers});
        // console.log(res.data);
        this.userName = res.data;
    },
  },
  created() {
    this.fetchUserName();
  }
}
</script>

<style>

</style>