<template>
  <div class="">

    <div class="flex border px-2 py-1">
        <div>
          <img class="h-8 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
        </div>
        <form @submit.prevent='createComment({postid, data})' class="w-full">
          <div class="flex items-start">
              <input v-model="data.content" class="w-full px-2 outline-none bg-white" placeholder="Add comment"/>
          </div>
          <div class="flex justify-end text-right">
              <button type="submit" class="bg-blue-500 text-white px-1 text-sm">Post</button>
          </div>
        </form>
    </div>
    
    <div v-for="comment in comments" :key="comment._id" class="bg-gray-50 my-2">
      <ProfileLink :user='comment.author'/>
      <div class="flex justify-between mx-12">
          <p class="">{{comment.content}}</p>
          <p>{{new Date(comment.created_at).getDate()}}-{{new Date(comment.created_at).getMonth()}}-{{new Date(comment.created_at).getFullYear()}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProfileLink from '@/components/profileLink.vue'
export default {
  components: {ProfileLink},
  props: ['postid'],
  data() {
    return {
      data: {
        content: ''
      }
    }
  },
  computed: {
      ...mapGetters(['comments'])
  },
  methods: {
    ...mapActions(['createComment'])
  }
}
</script>

<style>

</style>