<template>
  <div class="">
    <Navbar />
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {Navbar},
}
</script>

<style>
</style>
