<template>
  <div class="bg-white px-2 py-2 mb-6 rounded-md">
    <form @submit.prevent='createPost(data.content)' class="py-2">
      <div class="flex items-start">
        <div>
          <img class="h-12 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
        </div>
        <textarea v-model="data.content" rows=3 class="w-full px-2 resize-none outline-none" placeholder="What's on your mind..."></textarea>
      </div>
      <div class="flex justify-between pt-4">
        <button class="rounded-sm bg-gray-200 px-1 text-md">Add Photo</button>
        <button type="submit" class="rounded-sm bg-blue-500 text-white px-2 text-sm text-lg">Create Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      data: {
        content: ''
      }
    }
  },
  methods: {
    ...mapActions(['createPost'])
  }
}
</script>

<style>

</style>