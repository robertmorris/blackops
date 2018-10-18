<template>
  <div class="home" style="background-color: black;">
    <div class="home" style="background-color: black;">
      <b-container>
        <b-jumbotron header="Old Man Clan">
          <b-img :src="require('../assets/blackopslogo.png')" fluid alt="Responsive image" />
        </b-jumbotron>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
