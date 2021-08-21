<template>
  <div class="bg-white px-2 py-1 mb-6">
    <form @submit.prevent='createPost(data.content)' class="">
      <div class="flex items-start">
        <div>
          <img class="h-12 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
        </div>
        <textarea v-model="data.content" rows=3 class="w-full px-2 resize-none outline-none" placeholder="What's on your mind..."></textarea>
      </div>
      <div class="flex justify-between">
        <button class="rounded-md bg-gray-200 px-1 text-sm">Photo/Video</button>
        <button type="submit" class="rounded-md bg-blue-500 text-white px-1 text-sm">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      data: {
        content: ''
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['createPost'])
  }
}
</script>

<style>

</style>