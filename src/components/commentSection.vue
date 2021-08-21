<template>
  <div class="px-2 py-1">

    <div class="flex">
        <div>
          <img class="h-12" src="https://i.pravatar.cc/300" alt="avatar">
        </div>
        <form @submit.prevent='createComment(postid, "hello")' class="w-full">
          <div class="flex items-start">
              <input v-model="data.content" class="w-full px-2 outline-none bg-white" placeholder="Add comment"/>
          </div>
          <div class="flex justify-end text-right bg-gray-50">
              <button type="submit" class="bg-blue-500 text-white px-1 text-sm">Post</button>
          </div>
        </form>
    </div>
    
    <div v-for="comment in postComments" :key="comment._id">
        {{comment.content}}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['postid'],
  data() {
    return {
      data: {
        content: ''
      }
    }
  },
  computed: {
      ...mapGetters(['postComments'])
  },
  methods: {
    ...mapActions(['createComment'])
  }
}
</script>

<style>

</style>