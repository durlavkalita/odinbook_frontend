<template>
    <div class="bg-white my-2 px-2">
        <hr class="my-2"/>
        <div class="flex items-start py-2">
            <div>
                <img class="h-12 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
            </div>
            <div class="ml-2">
                <p class="font-semibold text-blue-800">{{postAuthor}}</p>
                <p>{{new Date(post.created_at).getDate()}}-{{new Date(post.created_at).getMonth()}}-{{new Date(post.created_at).getFullYear()}}</p>
            </div>
        </div>
        <div>
            <p class="py-1">{{post.content}}</p>
            <div v-if="post.image" class="flex justify-center">
                <img :src="post.image" alt="post image">
            </div>
        </div>
        <div class="grid grid-cols-3 py-1">
            <form @submit.prevent="likePost(post._id)">
            <div class="text-center">
                <i class="far fa-thumbs-up" :class="likedPost ? 'text-blue-800': '' "></i>
                <button type="submit" class="text-small pl-2"  :class="likedPost ? 'text-blue-800': '' ">Like</button>
            </div>
            </form>

            <form @submit.prevent="displayComments(post._id)">
            <div class="text-center">
                <i class="far fa-comment"></i>
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
import axios from 'axios'
import { mapActions} from 'vuex'
import commentSection from '../comment/commentSection.vue';
export default {
  components: { commentSection },
    props: ['post'],
    data() {
        return {
            showComments: false,
            likedPost: false,
            postAuthor: ""
        }
    },
    methods: {
        ...mapActions(['fetchComments', 'createLike']),
        displayComments(id) {
            if (this.showComments == true) {
                this.showComments = false;
            } else {
                this.showComments = true;
                this.fetchComments(id);
            }
        },
        async likePost(id) {
            const likeStatus = await this.createLike(id);
            if (likeStatus == 204) {
                this.likedPost = false;
            }else if(likeStatus == 200) {
                this.likedPost = true;
            }
        },
        async fetchAuthor(id) {
            const token = localStorage.getItem('odinbook_token')
            const headers = {
                'Authorization': 'Bearer ' + token
            }
            const res = await axios.get(`http://localhost:3000/api/user/${id}/name`, {headers: headers});
            // console.log(res.data);
            this.postAuthor = res.data;
        },
        checkLiked() {
            const user = localStorage.getItem('odinbook_user');
            if(this.post.likes.includes(user)) {
                this.likedPost = true;
            }
        }
    },
    created() {
        this.fetchAuthor(this.post.author)
        this.checkLiked()
    }
}
</script>

<style>

</style>