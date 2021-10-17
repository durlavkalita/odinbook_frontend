<template>
  <div class="px-2 py-2 lg:pl-24 grid grid-cols-1 lg:grid-cols-12 bg-gray-100 gap-2">
    
    <div class="hidden lg:block col-span-2">
      <router-link :to="{name: 'User', params: {userid: userId}}">
        <div class="flex items-center py-2 px-1">
            <div>
                <img class="h-12 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
            </div>
            <div class="ml-2">
                <p class="font-semibold">{{user.firstName}} {{user.lastName}}</p>
            </div>
        </div>
      </router-link>
      <div class="mt-4">
        <p class="text-xl text-indigo-700 font-semibold">Friends</p>
        <div class="flex items-center py-2 px-1" v-for="friend in user.friends" :key="friend">
          <ProfileLink :user='friend'/>
        </div>
      </div>

    </div>

    <div class="col-span-6">
      <CreatePost/>
      <div v-for="post in posts" :key="post._id">
        <SinglePost :post='post'/>
      </div>
    </div>
    
    <div class="col-span-1"></div>
    
    <div class="hidden lg:block col-span-3 px-1">
      <div>
        <p class="text-xl text-indigo-700 font-semibold text-center">Friend Requests</p>
        <div class="border mt-4">
          <div class="flex items-center py-2 px-1 justify-between" v-for="request in friendRequestList" :key="request">
            <ProfileLink :user='request.sender'/>
            <div class="flex">
              <form @submit.prevent="handleFriendRequestAccepted(request._id)">
                <button type="submit">
                  <i class="fas fa-check text-green-500 mx-4 fa-lg"></i>
                </button>
              </form>
              <form @submit.prevent="handleFriendRequestRejected(request._id)">
                <button type="submit">
                  <i class="fas fa-times text-red-500 mx-4 fa-lg"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-xl text-indigo-700 font-semibold text-center">Discover People</p>
        <div class="border mt-4">
          <div class="flex items-center py-2 px-1" v-for="user in usersList" :key="user">
            <ProfileLink :user='user._id'/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import axios from 'axios'
import CreatePost from '@/components/post/createPost.vue'
import SinglePost from '@/components/post/singlePost.vue'
import ProfileLink from '@/components/profileLink.vue'
export default {
  name: 'Home',
  components: {CreatePost, SinglePost, ProfileLink},
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['user','posts', 'usersList', 'friendRequestList']),
    userId: function() {
      return localStorage.getItem("odinbook_user");
    },
  },
  methods: {
    ...mapActions(['fetchUser', 'fetchToken', 'fetchPosts', 'fetchUsersList', 'fetchFriendRequestList']),
    async handleFriendRequestAccepted(id) {
      const token = localStorage.getItem('odinbook_token')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.post(`http://localhost:3000/api/friends/${id}/response`, {response: true}, {headers: headers});
        console.log(res.data);
        this.userName = res.data;
    },
    async handleFriendRequestRejected(id) {
      const token = localStorage.getItem('odinbook_token')
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        const res = await axios.post(`http://localhost:3000/api/friends/${id}/response`, {response: false}, {headers: headers});
        console.log(res.data);
        this.userName = res.data;
    },
    logUserOut() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    }
  },
  created() {
    this.fetchUser(this.userId);
    this.fetchPosts();
    this.fetchUsersList();
    this.fetchFriendRequestList();
  }
}
</script>