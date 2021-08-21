<template>
    <div class="bg-white my-2 px-2">
        <hr class="my-2"/>
        <div class="flex items-start py-2">
            <div>
                <img class="h-12 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
            </div>
            <div class="ml-2">
                <p class="font-semibold text-blue-800">John Doe</p>
                <p>{{new Date(post.created_at).toString()}}</p>
            </div>
        </div>
        <div>
            <p class="py-1">{{post.content}}</p>
            <div v-if="post.image" class="flex justify-center">
                <img :src="post.image" alt="post image">
            </div>
        </div>
        <div class="grid grid-cols-3 py-1">
            <div class="text-center">
                <i class="far fa-thumbs-up"></i>
                <span class="text-small pl-2">Like</span>
            </div>
            <form @submit.prevent="displayComments(post._id)">
            <div class="text-center">
                <i class="far fa-comment"></i>
                <!-- <span class="text-small pl-2">Comment</span> -->
                <button type="submit" class="text-small pl-2">Comment</button>
            </div>
            </form>
            <div class="text-center">
                <i class="fas fa-share"></i>
                <span class="text-small pl-2">Share</span>
            </div>
        </div>
        <div v-if="showComments == true">
            <comment-section :postid='post._id'/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import commentSection from './commentSection.vue';
export default {
  components: { commentSection },
    props: ['post'],
    data() {
        return {
            showComments: false
        }
    },
    computed: {
        ...mapGetters(['postComments'])
    },
    methods: {
        ...mapActions(['fetchComments']),
        displayComments(id) {
            this.showComments = true;
            this.fetchComments(id);
        } 
    },
    // created() {
    //     this.fetchComments(this.post._id);
    // }
}
</script>

<style>

</style>