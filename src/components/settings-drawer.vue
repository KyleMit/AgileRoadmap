<template>
<v-navigation-drawer
      v-model='state.drawerOpen'
      mobile-break-point="900"
      fixed
      app
      touchless
    >

    <v-toolbar color="green darken-2" dark>
          <v-toolbar-side-icon
          @click.stop='state.drawerOpen = !state.drawerOpen'
          ></v-toolbar-side-icon>

          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>

      <v-list >

          <v-subheader>Options</v-subheader>

          <v-list-group
            v-model="state.velocityOpen"
            color="green darken-4"

          >
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-icon color="green darken-3">fas fa-tachometer-alt</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title> Velocity</v-list-tile-title>
                <v-list-tile-sub-title>Map shirt size to sprints</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-subheader>Sprint Length (# Wks)</v-subheader>

            <v-list-tile>

              <v-list-tile-avatar>
                <v-icon large color="green darken-2">fas fa-calendar-week</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content >

                <v-layout
                  row
                >

                   <v-flex
                    shrink
                    style="width: 70px"
                  >
                    <v-text-field
                      v-model="options.sprintLength"
                      class="mr-1 ml-0 mt-0 text--center-input"
                      hide-details
                      single-line
                      min="0"
                      max="5"
                      step=".5"
                      type="number"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-slider
                      v-model="options.sprintLength"
                      :min="0"
                      :max="5"
                      step=".5"
                      thumb-label
                      thumb-size="28"
                      ticks
                      color="green darken-3"
                    ></v-slider>
                  </v-flex>


                </v-layout>

              </v-list-tile-content>

            </v-list-tile>

            <v-subheader>Shirt Size (# Sprints)</v-subheader>

            <v-list-tile
              v-for="vel in options.velocities"
              v-bind:key="vel.size" >

              <v-list-tile-avatar>
                <v-icon large color="green darken-2">fas fa-tshirt</v-icon>
                <span class="icon-text">{{vel.shirt}}</span>
              </v-list-tile-avatar>


              <v-list-tile-content >

                <v-layout
                  row
                >

                   <v-flex
                    shrink
                    style="width: 70px"
                  >
                    <v-text-field
                      v-model="vel.sprints"
                      class="mr-1 ml-0 mt-0 text--center-input"
                      hide-details
                      single-line
                      min="0"
                      max="5"
                      step=".5"
                      type="number"
                    ></v-text-field>
                  </v-flex>

                  <v-flex>
                    <v-slider
                      v-model="vel.sprints"
                      :min="0"
                      :max="5"
                      step=".5"
                      thumb-label
                      thumb-size="28"
                      ticks
                      color="green darken-3"
                    ></v-slider>
                  </v-flex>


                </v-layout>

              </v-list-tile-content>

            </v-list-tile>

          </v-list-group>


          <v-list-tile >
            <v-list-tile-action>
              <v-checkbox color="green darken-3"
                v-model='options.sizeCardWidth'
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click.prevent='options.sizeCardWidth = !options.sizeCardWidth'>
              <v-list-tile-title>Card Width</v-list-tile-title>
              <v-list-tile-sub-title>Size according to shirt size</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-subheader>Export / Import</v-subheader>


          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="green darken-3">fas fa-share-alt</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>


              <v-tooltip
                        nudge-bottom="33px"
                        nudge-right="105px"
                         v-model="urlTooltipVisible"
                         :color="urlTooltipColor"
                         attach="#copy-url-btn">
                  <span>{{urlTooltipText}}</span>
              </v-tooltip>

              <v-btn
                id="copy-url-btn"
                block
                outline
                color="green darken-4" dark
                class="white--text mx-0"
                @click="share"
              >
                Share Via URL
                <!-- <v-icon right dark>fas fa-copy</v-icon> -->
              </v-btn>

            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="green darken-3">fas fa-file-export</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>

              <v-btn
                block
                outline
                color="green darken-4" dark
                class="white--text mx-0"
                @click="exportFile"
              >
                Export File
                <!-- <v-icon right dark>fas fa-file-export</v-icon> -->
              </v-btn>

            </v-list-tile-content>
          </v-list-tile>


          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="green darken-3">fas fa-file-import</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>

              <v-btn
                block
                outline
                color="green darken-4" dark
                class="white--text mx-0"

              >
                <label class="custom-file-upload">
                    <input type="file" ref="fileUpload"
                    @change="importFile($event)"
                    style="display:none;"
                     id="file-upload"/>
                    Import File
                                <!-- <v-icon right dark>fas fa-cloud-upload</v-icon>  -->
                </label>
              </v-btn>

            </v-list-tile-content>
          </v-list-tile>


      </v-list>

        <v-footer color="light-green lighten-4"
                  class="justify-center pl-0"
                  inset app >
          <span>
            <a href="https://github.com/KyleMit/AgileRoadmap">
            <i class="fab fa-github"></i>
              KyleMit
            </a>
            &copy; 2018</span>
        </v-footer>

    </v-navigation-drawer>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-list__tile__content {
  /* otherwise sliders are cropped */
  overflow: visible;
}
.icon-text {
  position: absolute;
  color:white;
}
.v-list__group__items .v-subheader {
  display: flex;
}
/deep/ .text--center-input input {
  text-align: center;
}
</style>

<script>
// Vue.component('settings-drawer', {
//   props: ['options', 'state']
// })
export default {
  name: 'settings-drawer',
  props: ['options', 'state', 'roadmap'],
  data: function () {
    return {
      urlTooltipText: "URL Copied!",
      urlTooltipVisible: false,
      urlTooltipColor: "green"
    }
  },
  methods: {
    share: function () {
      var state = localStorage.getItem("roadmap")
      var hash = "#" + encodeURIComponent(state)

      if (history.pushState) {
        history.pushState(null, null, hash)
      } else {
        window.location.hash = hash
      }

      copyToClipboard(window.location.href)

      // check for max length
      if (window.location.href.length > 2000) {
        this.urlTooltipText = "URL length too long"
        this.urlTooltipColor = "red"
      } else {
        this.urlTooltipText = "URL Copied!"
        this.urlTooltipColor = "green"
      }

      // show tooltip
      var self = this
      self.urlTooltipVisible = true
      // close on delay
      setTimeout(function () {
        self.urlTooltipVisible = false
      }, 2000)
    },

    exportFile: function () {
      var jsonString = JSON.stringify(this.roadmap, undefined, 2)

      var link = document.createElement('a')
      link.download = 'data.json'
      var blob = new Blob([jsonString], {type: 'text/plain'})
      link.href = window.URL.createObjectURL(blob)
      link.click()
    },

    importFile: function (e) {
      var self = this
      parseFile(e, function (obj) {
        self.$emit('update:roadmap', obj)
        // self.mutableRoadmap = obj
      })
    }

  }
}

function copyToClipboard (str) {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

function parseFile (event, callback) {
  var reader = new FileReader()
  var input = event.target

  // add handler
  reader.onload = function (event) {
    var obj = JSON.parse(event.target.result)
    console.log(obj)
    // clear input
    input.value = ""
    callback(obj)
  }

  reader.readAsText(input.files[0])
}
</script>
