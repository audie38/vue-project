<template>
  <NavigationBar />
  <div class="container my-5">
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/ui/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
  data() {
    return {
      teams: [
        {
          id: "t1",
          name: "Frontend Engineers",
          members: ["u1", "u2"],
        },
        {
          id: "t2",
          name: "Backend Engineers",
          members: ["u1", "u2", "u3"],
        },
        {
          id: "t3",
          name: "Client Consulting",
          members: ["u4", "u5"],
        },
      ],
      users: [
        {
          id: "u1",
          fullName: "Audie Milson",
          role: "Engineer",
        },
        {
          id: "u2",
          fullName: "Max Schwarz",
          role: "Engineer",
        },
        {
          id: "u3",
          fullName: "Julie Jones",
          role: "Engineer",
        },
        {
          id: "u4",
          fullName: "Alex Blackfield",
          role: "Consultant",
        },
        {
          id: "u5",
          fullName: "Marie Smith",
          role: "Consultant",
        },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.card {
  cursor: pointer;
  transition: transform 0.32s ease-in;
}

.biggerOnHover:hover {
  transform: scale(1.05);
}

.bigOnHover:hover {
  transform: scale(1.02);
}

.animate:hover {
  animation: bouncing 2s ease-out;
  animation-iteration-count: infinite;
}

@keyframes bouncing {
  0% {
    transform: translateY(0) scale(1.05);
  }

  25% {
    transform: translateY(-5px) scale(1.05);
  }

  75% {
    transform: translateY(10px) scale(1.05);
  }

  100% {
    transform: translateY(0) scale(1.05);
  }
}
</style>
