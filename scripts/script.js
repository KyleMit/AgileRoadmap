Vue.config.devtools = true;

var data = {
  roadmap: [
    {
      groupName: "R1",
      features: [
        { name: "Infastructure", size: "SM", completed: false },
        { name: "User Accounts", size: "SM", completed: false },
        { name: "Permissions", size: "SM", completed: false },
        { name: "User Profile", size: "SM", completed: false },
        { name: "Agency Profile", size: "SM", completed: false }
      ]
    },
    {
      groupName: "Process",
      features: [
        { name: "Referral", size: "SM", completed: false },
        { name: "Intake", size: "SM", completed: false }
      ]
    },
    {
      groupName: "Client",
      features: [
        { name: "Client Profile", size: "SM", completed: false },
        { name: "Consents", size: "SM", completed: false },
        { name: "Resources", size: "SM", completed: false },
        { name: "Health & Well Being", size: "SM", completed: false },
        { name: "Screenings", size: "SM", completed: false },
        { name: "Post Partum", size: "SM", completed: false },
        { name: "Financials", size: "SM", completed: false },
        { name: "Education", size: "SM", completed: false },
        { name: "Insurance", size: "SM", completed: false }
      ]
    }
  ],
  options: {
    shirtSizes: ["XS", "SM", "MD", "LG", "XL"],
    velocities: [
      { size: "XS", sprints: 0.5, width: "10rem" },
      { size: "SM", sprints: 1, width: "13rem" },
      { size: "MD", sprints: 2, width: "16rem" },
      { size: "LG", sprints: 3, width: "19rem" },
      { size: "XL", sprints: 4, width: "21rem" }
    ],
    sizeCardWidth: true
  }
};

var app = new Vue({
  el: "#app",
  data: data,
  computed: {},
  watch: {
    $data: {
      handler: function() {
        localStorage.setItem("roadmap", JSON.stringify(this.roadmap));
        localStorage.setItem("options", JSON.stringify(this.options));
      },
      deep: true
    }
  },
  methods: {
    getVelocity: function(shirtSize) {
      var v = this.options.velocities.find(function(v) {
        return v.size == shirtSize;
      });
      return v;
    },

    cardWidth: function(shirtSize) {
      if (!this.options.sizeCardWidth) return "10rem";
      return this.getVelocity(shirtSize).width;
    },

    groupSprints: function(group) {
      var self = this;
      var points = group.features.map(function(ft) {
        return +self.getVelocity(ft.size).sprints;
      });
      var sum = points.reduce(function(acc, val) {
        return acc + val;
      }, 0);

      return sum;
    },

    groupSprintsRemaining: function(group) {
      var self = this;
      var remainingPoints = group.features.map(function(ft) {
        return ft.completed ? 0 : +self.getVelocity(ft.size).sprints;
      });
      var sum = remainingPoints.reduce(function(acc, val) {
        return acc + val;
      }, 0);

      return sum;
    },

    sprintTime: function(sprints) {
      return Math.round(sprints * 3) + " wks";
    },

    fillShirt(curSize, compSize) {
      var curIndex = this.options.shirtSizes.indexOf(curSize)
      var compIndex = this.options.shirtSizes.indexOf(compSize)
      return curIndex >= compIndex;
    },

    setSize(feature, size) {
      feature.size = size;
    },

    togglecompleted(feature) {
      //feature.completed = !feature.completed;
      // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
      Vue.set(feature, "completed", !feature.completed);
    },

    updateFeatureName: function(ft, $event) {
      ft.name = event.target.innerHTML.trim();
    },

    addFeature: function(grp) {
      grp.features.push({ name: "New Feature", size: "SM", completed: false });
    },

    removeFeature: function(grp, index) {
      this.$delete(grp.features, index);
    },

    share: function() {
      var state = localStorage.getItem("roadmap")
      var hash =  "#" + encodeURIComponent(state);
      if (history.pushState) { history.pushState(null, null, hash)
      } else { window.location.hash = hash; }
      
    }
  },
  mounted: function() {
    // restore value if we got from url
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        var value = decodeURIComponent(hash)
        localStorage.setItem("roadmap", value);

        // wipe hash so it's prettier
        if (history.pushState) { history.pushState(null, null, "#")
        } else { window.location.hash = "#"; }
    }
    // fetch from local storage
    var localRoadmap = localStorage.getItem("roadmap");
    if (localRoadmap) this.roadmap = JSON.parse(localRoadmap);

    var localOptions = localStorage.getItem("options");
    if (localOptions) this.options = JSON.parse(localOptions);

    console.log("App mounted!");
  }
});
