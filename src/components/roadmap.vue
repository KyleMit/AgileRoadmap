<template>
  <!-- contents may extend past page - allow scroll on desktop 
       and prevent swipe with nav drawer open on moible 
      by adding horizontal scrollbar to app -->
  <v-container fluid style="overflow-x:auto;">
    <v-slide-y-transition mode="out-in">
      <!-- Columns, move left to right -->
      <v-layout align-start justify-start row grid-list-4
        >
        

        <!-- Group Column -->
        <v-flex v-for="grp in roadmap" 
                v-bind:key="grp.groupName"
                shrink >



          <!-- all the child items -->
          <v-layout align-start justify-start column fill-height>

            <!-- title card -->
            <v-card width="200" class="ma-1" flat color="amber lighten-4">

              <v-card-title primary-title class="pa-2 d-flex justify-center align-center ">
                <div>
                  <div class="display-1 ma-0 pa-1 reveal-input-hover" 
                        contenteditable="true" 
                        placeholder="Group"
                        v-focus="mounted"
                        v-on:blur="updateGroupName(grp, $event)"
                        v-html="grp.groupName">
                  </div>
                  <div class="subheading pa-1 grey--text text--darken-2 ">
                      {{getSprints(grp.features, options.velocities)}} sprints
                      ({{getSprintTime(getSprints(grp.features, options.velocities))}})
                      <!-- {{sprintTime(groupSprintsRemaining(grp))}} remaining -->
                  </div>
                </div>
              </v-card-title>

            </v-card>

            <!-- child cards -->
            <v-hover v-for="(ft, ft_i) in grp.features" v-bind:key="ft.name">

              
              <v-card 
                slot-scope="{ hover }"
                      width="200"
                      class="ma-1"
                      hover
                
                      
                      >

                <v-card-title primary-title class="pa-2 d-flex justify-center align-center text--center" >
                  <div class="headline ma-0 pa-1 reveal-input-hover" 
                        contenteditable="true" 
                        placeholder="New Feature"
                        v-focus="mounted"
                        v-on:blur="updateFeatureName(ft, $event)"
                        v-html="ft.name">
                  </div>
                </v-card-title>

                <v-tooltip  
                    right 
                    color="deep-orange darken-4" 
                    style="position: absolute;top: -6px;left: -8px;"
                    nudge-bottom="1px"
                    nudge-left="6px">
                  <v-btn  v-if="hover"
                      color="deep-orange darken-3"
                      slot="activator"
                      flat
                      icon
                      small
                      @click="removeFeature(grp, ft_i)"
                      >
                      <v-icon style="font-size:1.3rem;">fas fa-trash-alt</v-icon>
                  </v-btn>
                  <span>Remove Feature</span>
                </v-tooltip>

                <v-tooltip  
                  left 
                  color="green darken-2" 
                  style="position: absolute;top: -20px;right: -9px;"
                  nudge-top="6px"
                  nudge-right="6Spx">
                    <v-checkbox
                      v-if="hover || ft.completed"
                      slot="activator"
                      color="green darken-3"
                      v-model="ft.completed"
                    ></v-checkbox>
                  <span>Mark Complete</span>
                </v-tooltip>


              <v-card-actions class="pt-0">
                  <v-rating
                      v-model="ft.size"
                      :empty-icon="'far fa-tshirt'"
                      :full-icon="'fas fa-tshirt'"
                      hover
                      dense
                      color="green darken-2"
                      background-color="grey lighten-1"
                    ></v-rating>
              </v-card-actions>

            </v-card>

          </v-hover>

          <v-tooltip right color="green darken-2" >
            <v-btn 
              color="green"
              slot="activator"
              fab
              dark
              small
              @click="addFeature(grp)"
              >
              <v-icon>fa fa-plus</v-icon>
            </v-btn>
            <span>Add Feature</span>
          </v-tooltip>
        

          </v-layout>
           
        
          
        </v-flex>

        <v-tooltip right color="green darken-2">
          <v-btn  
            color="green "
            slot="activator"
            fab
            dark
            small
            @click="addGroup()"
            >
            <v-icon>fa fa-plus</v-icon>
          </v-btn>
          <span>Add Group</span>
        </v-tooltip>

          
      </v-layout>

      
    </v-slide-y-transition>
  </v-container>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
[contenteditable][placeholder]:empty::before {
    content: attr(placeholder);
    color: #555; 
}
.reveal-input-hover {
  border: 1px solid transparent;
}
.reveal-input-hover:hover {
  border: 1px solid #d0d0d0;
  box-shadow: 1px 1px 1px #d0d0d0b8;
}
.text--center {
  text-align: center;
}
/* [contenteditable][placeholder]:empty:focus::before {
    content: "";
} */
</style>

<script>
export default {
  name: "roadmap",
  props: ["options", "roadmap"],
  data: function () {
    return {
      mounted: false
    }
  },
  methods: {
    updateFeatureName: function (ft, $event) {
      ft.name = event.target.innerHTML.trim()
    },
    updateGroupName: function (grp, $event) {
      grp.groupName = event.target.innerHTML.trim()
    },

    addFeature: function (grp) {
      grp.features.push({ name: "", size: 2, completed: false })
    },
    removeFeature: function (grp, index) {
      this.$delete(grp.features, index)
    },

    addGroup: function () {
      this.roadmap.push({ groupName: "", features: [] })
    }

  },

  mounted: function () {
    this.mounted = true
  }
}
</script>