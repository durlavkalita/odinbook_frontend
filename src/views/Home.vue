<template>
  <div class="px-2 py-2 lg:pl-24 grid grid-cols-1 lg:grid-cols-12 bg-gray-100 gap-2">

    <first-column/>

    <div class="col-span-5">
      <CreatePost/>
      <div v-for="post in posts.posts" :key=post._id>
        <SinglePost :post='post'/>
      </div>
    </div>

    <third-column/>
    
    <fourth-column/>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CreatePost from '@/components/createPost.vue'
import SinglePost from '@/components/singlePost.vue'
import FirstColumn from '../components/firstColumn.vue'
import ThirdColumn from '../components/thirdColumn.vue'
import FourthColumn from '../components/fourthColumn.vue'
export default {
  name: 'Home',
  components: {CreatePost, SinglePost, FirstColumn, ThirdColumn, FourthColumn},
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
    ...mapActions(['fetchUser', 'fetchToken', 'fetchPosts']),
    logUserOut() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    }
  },
  created() {
    this.fetchToken();
    this.fetchUser();
    this.fetchPosts();
  }
}
</script>