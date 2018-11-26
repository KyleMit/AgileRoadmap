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

      <v-toolbar-title v-text='title'></v-toolbar-title>

    </v-toolbar>


    <v-content>
      <roadmap :options="options"></roadmap> 

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
  data () {
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
      }
    }
  },
  name: 'App'
}
</script>
