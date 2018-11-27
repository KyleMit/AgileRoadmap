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

      <v-toolbar-title class="headline ml-1">
         <span class="hidden-sm-and-down">Agile</span> Roadmap
      </v-toolbar-title>

      <!-- small display -->
      <div class="subheading pa-1 ml-2 hidden-md-and-up" style="line-height: 1.2;">
        <div class="green--text text--darken-2">
            {{getSprints(completedFeatures, options.velocities) * 3 | shortTimespan}} done
        </div>
        <div class="grey--text text--darken-2">
            {{getSprints(remainingFeatures, options.velocities) * 3 | shortTimespan}} left
        </div>
      </div>

      <!-- big display -->
      <div class="subheading pa-o ml-2 hidden-sm-and-down" style="line-height: 1.2;">
        <div class="green--text text--darken-2">
            {{getSprints(completedFeatures, options.velocities) * 3 | timespan}} completed
        </div>
        <div class="grey--text text--darken-2">
            {{getSprints(remainingFeatures, options.velocities) * 3 | timespan}} remaining
        </div>
      </div>

      <v-progress-circular
          class="ml-3"
          :value="progress"
          size="38"
          :width="8"
          :rotate="180"
          color="green darken-1"
      ></v-progress-circular>

    </v-toolbar>


    <v-content>

      <roadmap 
      :options="options"
      :roadmap="roadmap"
      ></roadmap> 

    </v-content>
    
  
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
            { name: "Infrastructure", size: 2, completed: true },
            { name: "User Accounts", size: 2, completed: true },
            { name: "Permissions", size: 2, completed: true },
            { name: "User Profile", size: 2, completed: true },
            { name: "Agency Profile", size: 2, completed: true }
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
    completedFeatures: function () {
      return this.allFeatures.filter(function (ft) {
        return ft.completed
      })
    },
    remainingFeatures: function () {
      return this.allFeatures.filter(function (ft) {
        return !ft.completed
      })
    },
    progress: function () {
      var allPoints = this.getSprints(this.allFeatures, this.options.velocities)
      var comPoints = this.getSprints(this.completedFeatures, this.options.velocities)
      return comPoints / allPoints * 100
    },
    remainingTasks: function () {
      return "this.tasks.length - this.completedTasks"
    }
  },
  watch: {
    $data: {
      handler: function () {
        localStorage.setItem("roadmap", JSON.stringify(this.roadmap))
        localStorage.setItem("options", JSON.stringify(this.options))
      },
      deep: true
    }
  },

  filters: {
    timespan: function (value) {
      var output = []
      var valueInt = Math.round(+value)
      // get years
      if (valueInt > 52) {
        var years = Math.round(valueInt / 52)
        valueInt = valueInt % 52 // only store remainder
        output.push(pluralize(years, "year"))
      }
      // get months
      if (valueInt > 4) {
        var months = Math.round(valueInt / 4)
        valueInt = valueInt % 4 // only store remainder
        output.push(pluralize(months, "month"))
      }
      if (valueInt > 0) {
        output.push(pluralize(valueInt, "week"))
      }

      return output.join(", ")
    },

    shortTimespan: function (value) {
      return pluralize(Math.round(+value), "wk")
    }
  },
  methods: {

  },
  mounted: function () {
    // restore value if we got from url
    if (window.location.hash) {
      var hash = window.location.hash.substring(1)
      var value = decodeURIComponent(hash)
      localStorage.setItem("roadmap", value)

      // wipe hash so it's prettier
      if (history.pushState) {
        history.pushState(null, null, "#")
      } else {
        window.location.hash = "#"
      }
    }
    // fetch from local storage
    var localRoadmap = localStorage.getItem("roadmap")
    if (localRoadmap) this.roadmap = JSON.parse(localRoadmap)

    var localOptions = localStorage.getItem("options")
    if (localOptions) this.options = JSON.parse(localOptions)

    console.log("App mounted!")
  }
}

function pluralize (value, unit) {
  if (value === 1) {
    return value + " " + unit
  } else {
    return value + " " + unit + "s"
  }
}
</script>
