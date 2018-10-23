<template>

<div id="inputForm">
  <p class="thick">Xbox Live Gamertag</p>
    <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your Xbox Gamertag">
    </b-form-input>
    <b-button class="mt-2">Add</b-button>
</div>



<!-- test stuff -->

<!--   <div>
    <div class="input-group">
      <input type="text" class="form-control">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
    </div>
  </div> -->



<!--   <div class="home" style="background-color: black;">
    <div class="home" style="background-color: black;">
      <b-container>
        <b-jumbotron header="Old Man Clan">
          <b-img :src="require('../assets/blackopslogo.png')" fluid alt="Responsive image" />
        </b-jumbotron>
      </b-container>
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },

    data () {
    return {
      text1: ''
    }
  }
}
</script>

<style>
#inputForm {
  margin: auto;
  width: 25%;
}

p.thick {
    font-weight: bold;
}
</style>
