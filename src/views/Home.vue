<template>
<div>
<div id="inputForm">
  <p class="thick">Xbox Live Gamertag</p>
    <b-form-input v-model="inputText"
                  type="text"
                  placeholder="Enter your Xbox Gamertag">
    </b-form-input>
    <b-button class="mt-2" @click="addTag">Add</b-button>    
</div>

    <div class="mt-2">
        <div class="flex-container">
                <div class="card mr-1" v-for="gamerTag in gamerTags" :key="gamerTag">                
                    <div class="p-2">
                        <b-card :title="gamerTag"
                                :img-src="require('../assets/blackopslogo.png')" fluid alt="Responsive image"
                                :img-alt="gamerTag"
                                img-top               
                                tag="article"
                                style="max-width: 20rem"
                                class="mb-1">
                            <p class="card-text">
                            <b-table striped hover :items="gamerTag"></b-table>
                            </p>
                            <b-button :href="gamerTag" variant="secondary">Open Profile</b-button>
                        </b-card>
                  </div>
              </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import GamerServices from "@/services/gamer";

export default {
  name: "home",
  components: {},

  data() {
    return {
      inputText: "",
      gamerTags: ["beardedM0nk3y", "s3llison", "Markhuf", "UrgedOpossum27"],
      gamerData: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.loadGamers();
    });
  },
  methods: {
    addTag() {
      this.gamerTags.push(this.inputText);
    },
    loadGamers() {
      this.gamerTags.forEach(gamerTag => {
        GamerServices.getGamerData(gamerTag).then(response => {
          this.buildGamerData(response.data);
        });
      });
    },
    buildGamerData(data) {
      debugger;
      let stats = data.stats;
      let blackoutStats = stats.blackoutExtra;
      let gamerTag = data.user.username;

      this.gamerData.push({
          gamerTag
      });
    }
  },
  watch: {
    gamerTags: function() {
      debugger;
    }
  }
};
</script>

<style>
#inputForm {
  margin: auto;
  width: 25%;
}

p.thick {
  font-weight: bold;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
}
</style>
