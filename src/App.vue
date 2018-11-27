<template>
  <v-app>

    <settings-drawer :options="options" :state="state" ></settings-drawer>

    <v-toolbar
      app
      fixed

    >

      <v-toolbar-side-icon 
        @click.stop='state.drawerOpen = !state.drawerOpen'
        v-if="!state.drawerOpen"
        ></v-toolbar-side-icon>

      <img src="./assets/logo.png" alt="Agile Roadmap" height="40">
      <!-- <v-img
        src="./assets/logo.png" alt="Agile Roadmap"
      ></v-img> -->

      <v-toolbar-title v-text='title' class="ma-0"></v-toolbar-title>

      <v-progress-circular
          :value="progress"
      ></v-progress-circular>

    </v-toolbar>


    <v-content>
      <roadmap 
      :options="options"
      :roadmap="roadmap"
      ></roadmap> 

<!--
      <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
    >
      
      <v-card-title>
        <div v-if="hover">
          <span class="headline">Cafe Badilico</span>
          
        </div>
     
      </v-card-title>
    </v-card>
  </v-hover>
-->

    </v-content>
    
    <v-footer color="green darken-2" class="justify-center" app dark inset>
      <span>KyleMit &copy; 2018</span>
    </v-footer>

  
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      title: 'Agile Roadmap',
      state: {
        drawerOpen: false,
        velocityOpen: true
      },
      options: {
        shirtSizes: ['XS', 'SM', 'MD', 'LG', 'XL'],
        velocities: [
          { value: 1, shirt: 'XS', sprints: 0.5, width: '10rem' },
          { value: 2, shirt: 'SM', sprints: 1, width: '13rem' },
          { value: 3, shirt: 'MD', sprints: 2, width: '16rem' },
          { value: 4, shirt: 'LG', sprints: 3, width: '19rem' },
          { value: 5, shirt: 'XL', sprints: 4, width: '21rem' }
        ],
        sizeCardWidth: true
      },
      roadmap: [
        {
          groupName: "R1",
          features: [
            { name: "Infrastructure", size: 2, completed: false },
            { name: "User Accounts", size: 2, completed: false },
            { name: "Permissions", size: 2, completed: false },
            { name: "User Profile", size: 2, completed: false },
            { name: "Agency Profile", size: 2, completed: false }
          ]
        },
        {
          groupName: "Process",
          features: [
            { name: "Referral", size: 2, completed: false },
            { name: "Intake", size: 2, completed: false }
          ]
        },
        {
          groupName: "Client",
          features: [
            { name: "Client Profile", size: 2, completed: false },
            { name: "Consents", size: 2, completed: false },
            { name: "Resources", size: 2, completed: false },
            { name: "Health & Well Being", size: 2, completed: false },
            { name: "Screenings", size: 2, completed: false },
            { name: "Post Partum", size: 2, completed: false },
            { name: "Financials", size: 2, completed: false },
            { name: "Education", size: 2, completed: false },
            { name: "Insurance", size: 2, completed: false }
          ]
        }
      ]
    }
  },
  computed: {
    allFeatures: function () {
      var arrays = this.roadmap.map(grp => grp.features)
      arrays = arrays.reduce(function (a, b) {
        return a.concat(b)
      }, [])
      return arrays
    },
    progress: function () {
      return 50 // "this.completedTasks / this.tasks.length * 100"
    },
    remainingTasks: function () {
      return "this.tasks.length - this.completedTasks"
    }
  },
  methods: {

  }
}
</script>
