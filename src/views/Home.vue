<template>

<div id="inputForm">
  <p class="thick">Xbox Live Gamertag</p>
    <b-form-input v-model="gamerTag.tag"
                  type="text"
                  placeholder="Enter your Xbox Gamertag">
    </b-form-input>
    <b-button class="mt-2" @click="addTag">Add</b-button>

    <div class="mt-2">
        <div class="d-flex flex-row">
                <div class="card mr-1" v-for="gamerTag in gamerTags" v-bind:key="gamerTag.tag">                
                    <div class="p-2">
                        <b-card :title="gamerTag.tag"
                                :img-src="require('../assets/blackopslogo.png')" fluid alt="Responsive image"
                                :img-alt="gamerTag.tag"
                                img-top               
                                tag="article"
                                style="max-width: 20rem"
                                class="mb-1">
                            <p class="card-text">
                            <b-table striped hover :items="gamerTag.tag"></b-table>
                            </p>
                            <b-button :href="gamerTag.tag" variant="secondary">Open Profile</b-button>
                        </b-card>
                  </div>
              </div>
        </div>
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
  },

    data () {
    return {
      gamerTag: {
        tag: ''
      },
      gamerTags: []
    }
  },
  methods: {
    addTag(){
      this.gamerTags.push(this.gamerTag)
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
