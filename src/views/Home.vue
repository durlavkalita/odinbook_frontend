<template>
  <div class="px-2 py-2 lg:pl-24 grid grid-cols-1 lg:grid-cols-12 bg-gray-100 gap-2">
    <div class="hidden lg:block col-span-2">
      <div class="flex items-center py-2 px-1">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2">
              <p class="font-semiboldbold">John Doe</p>
          </div>
      </div>
      <div class="pt-2">
        <div class="flex items-center justify-between p-1 border bg-gray-50 rounded-sm">
          <div>
            <i class="far fa-newspaper text-blue-500"></i>
            <span class="ml-2 font-semibold text-sm">News Feed</span>
          </div>
          <i class="fas fa-ellipsis-h text-right"></i>
        </div>
        <div class="flex items-center p-1">
          <i class="fas fa-comment text-blue-500"></i>
          <span class="ml-2 font-semibold text-sm">Messenger</span>
        </div>
        <div class="flex items-center p-1">
          <i class="fas fa-tv text-blue-500"></i>
          <span class="ml-2 font-semibold text-sm">Watch</span>
        </div>
        <div class="flex items-center p-1">
          <i class="fas fa-laptop-house text-blue-500"></i>
          <span class="ml-2 font-semibold text-sm">Marketplace</span>
        </div>
      </div>
      <div class="pt-2">
        <p class="text-sm font-semibold">Shortcuts</p>
        <div class="flex items-center">
          <i class="fas fa-landmark"></i>
          <span class="ml-2 text-sm">Dunder Mifflin</span>
        </div>
        <div class="flex items-center jusity-center">
          <i class="fas fa-microphone"></i>
          <span class="ml-4 text-sm">Michael's roast</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-fire"></i>
          <span class="ml-4 text-sm">Fire drill</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-laptop-house"></i>
          <span class="ml-2 text-sm">Creed's birthday</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-music"></i>
          <span class="ml-3 text-sm">Kevin's band</span>
        </div>
        <div class="flex items-start">
          <i class="fas fa-sort-down"></i>
          <span class="ml-2 text-sm text-blue-500">See More...</span>
        </div>
      </div>
      <div class="pt-2">
        <p class="text-sm font-semibold">Explore</p>
        <div class="flex items-center">
          <i class="fas fa-calendar-alt"></i>
          <span class="ml-2 text-sm">Events</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-users"></i>
          <span class="ml-2 text-sm">Groups</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-video"></i>
          <span class="ml-2 text-sm">Live Video</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-memory"></i>
          <span class="ml-2 text-sm">Memories</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-image"></i>
          <span class="ml-2 text-sm">Photos</span>
        </div>
        <div class="flex items-start">
          <i class="fas fa-sort-down"></i>
          <span class="ml-2 text-sm text-blue-500">See More...</span>
        </div>
      </div>
    </div>

    <div class="col-span-5">
      <CreatePost/>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
    </div>

    <div class="hidden lg:block col-span-3 mr-8">
      <div class="bg-white px-1">
        <div class="flex justify-between items-center">
          <p class="font-semibold">Stories</p>
          <div>
            <i class="fas fa-plus text-blue-500"></i>
            <i class="fas fa-cog text-blue-500 pl-2"></i>
          </div>
        </div>
        <div class="flex items-center py-1">
          <div class="rounded-full bg-gray-100">
            <i class="fas fa-plus text-blue-500 fa-2x p-2"></i>
          </div>
          <div class="ml-2">
            <p class="text-blue-500 font-semibold text-sm">Add to Your Story</p>
            <p class="text-gray-500 text-sm">Share a photo or video</p>
          </div>
        </div>
        <div class="flex items-center py-1">
          <div class="rounded-full bg-gray-100">
              <img class="h-10 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2">
            <p class="text-blue-500 font-semibold text-sm">John Doe</p>
            <p class="text-gray-500 text-sm">2 hrs ago</p>
          </div>
        </div>
        <div class="flex items-center py-1">
          <div class="rounded-full bg-gray-100">
            <img class="h-10 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2">
            <p class="text-blue-500 font-semibold text-sm">Jason Doe</p>
            <p class="text-gray-500 text-sm">16 hrs ago</p>
          </div>
        </div>
        <div class="flex items-start px-4 py-2">
          <i class="fas fa-sort-down"></i>
          <span class="ml-2 text-sm text-blue-500">See More...</span>
        </div>
      </div>
      <div class="bg-white my-2 py-1 px-2">
        <div class="flex items-center">
          <i class="fas fa-calendar fa-sm text-red-500 mr-2"></i>
          <span class="font-semibold text-sm">John Doe camping trip</span>
          <span class="text-sm ml-1">on Friday</span>
        </div>
        <div class="flex items-center">
          <i class="fas fa-birthday-cake fa-sm text-green-500 mr-2"></i>
          <span class="font-semibold text-sm">Jason Doe birthday</span>
          <span class="text-sm ml-1">on Saturday</span>
        </div>
      </div>
      <div class="bg-white my-2 py-1 px-2">
        <div class="flex justify-between">
          <p class="text-sm font-semibold">Sponsored</p>
          <p class="text-sm text-blue-500">Create Ad</p>
        </div>
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="pizza">
        <p class="text-blue-500 text-sm">Dominos Pizza - Greed Island</p>
        <p class="text-blue-500 text-xs">greedisland.com</p>
        <p class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, illum?</p>
      </div>
    </div>
    
    <div class="hidden lg:block col-span-2 lg:border-l px-1">
      <p class="text-md text-indigo-700 font-semibold">Contact</p>
      <div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
        <div class="flex items-center py-2">
          <div>
              <img class="h-6 rounded-full" src="https://i.pravatar.cc/300" alt="avatar">
          </div>
          <div class="ml-2 flex justify-between items-center">
              <p class="font-semiboldbold text-sm">John Doe</p>
              <i class="fas fa-circle text-green-500 fa-xs ml-8"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreatePost from '@/components/createPost.vue'
import SinglePost from '@/components/singlePost.vue'
export default {
  name: 'Home',
  components: {CreatePost, SinglePost}
}
</script>

    Singlepost