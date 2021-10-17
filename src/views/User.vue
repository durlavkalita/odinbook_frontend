<template>
  <div class="max-w-3xl mx-auto">
    <div class="relative">
      <img class="w-full" src="https://images.unsplash.com/photo-1608408843596-b3119736057c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1495&q=80" alt="bg pic">
      <div class="absolute -bottom-16 mx-auto">      
        <img class="inline object-cover w-32 h-32 mx-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
      </div>
      <div class="absolute bottom-0 left-40 text-white">
        <p class="font-semibold text-xl">{{user.firstName}} {{user.lastName}}</p>
      </div>
    </div>
    <div class="mt-24">
      <p class="font-bold text-xl py-4">About</p>
      <p>
        <span class="font-semibold text-lg mr-4">Joined</span> 
        <span class="text-indigo-900 font-md">  
          {{new Date(user.created_at).getDate()}}-{{new Date(user.created_at).getMonth()}}-{{new Date(user.created_at).getFullYear()}}
        </span>
      </p>
      <p><span class="font-semibold text-lg mr-2">Friends</span> <span class="text-indigo-900 font-md">{{user.friends.length}}</span></p>
      <p><span class="font-semibold text-lg mr-6">Posts</span> <span class="text-indigo-900 font-md">{{userPosts.length}}</span></p>
    </div>
    <div class="my-8">
      <p class="font-bold text-xl py-4">{{user.firstName}}'s Posts</p>
      <div v-for="post in userPosts" :key="post._id" class="max-w-3xl mx-auto">
        <SinglePost :post='post'/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SinglePost from '@/components/post/singlePost.vue'
export default {
  components: {SinglePost},
  computed: {
    ...mapGetters(['user', 'userPosts'])
  },
  methods: {
    ...mapActions(['fetchUser', 'fetchUserPosts'])
  },
  created() {
    this.fetchUser(this.$route.params.userid);
    this.fetchUserPosts(this.$route.params.userid);
  }
}
</script>

<style>

</style>