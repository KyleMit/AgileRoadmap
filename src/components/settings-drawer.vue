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
        <!--
          <v-subheader>Options</v-subheader>
        -->

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

          <!-- <v-divider></v-divider> -->


          <v-list-group
            v-model="state.velocityOpen"
            color="green darken-4"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-icon color="green darken-3">fas fa-tachometer-alt-fast</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title> Velocity</v-list-tile-title>
                <v-list-tile-sub-title>Map shirt size to sprints</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile 
              v-for="vel in options.velocities" 
              v-bind:key="vel.size" >

              <v-list-tile-avatar>
                <v-icon large color="green darken-2">fas fa-tshirt</v-icon>
                <span class="icon-text">{{vel.shirt}}</span>
              </v-list-tile-avatar>


              <v-list-tile-content >

                <v-slider 
                    v-model="vel.sprints" 
                    :max="5"
                    thumb-label
                    thumb-size="28"
                    step=".5"
                    ticks
                    color="green darken-3"
                  ></v-slider>


              </v-list-tile-content>

            </v-list-tile>

          </v-list-group> 

      </v-list>

        <!-- <v-footer color="indigo" class="justify-center" app dark>
          <span>KyleMit &copy; 2017</span>
        </v-footer> -->

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
</style>

<script>
// Vue.component('settings-drawer', {
//   props: ['options', 'state']
// })
export default {
  name: 'settings-drawer',
  props: ['options', 'state'],
  data: function () {
    return {
    }
  }
}
</script>