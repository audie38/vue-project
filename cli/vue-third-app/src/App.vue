<template>
  <div>
    <NavigationBar />
    <div class="container my-3">
      <ToggleResource :isStored="isDefault" @toggle-store="StoreClick" @toggle-add="AddClick" />
      <div v-if="isDefault">
        <LearningResource v-for="resource in storedResources" :key="resource.id" :resource="resource" @delete-resource="deleteResources(resource.id)" />
      </div>
      <div v-else>
        <NewResource @push-resource="AddNewResource" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import ToggleResource from "./components/learning-resources/ToggleResource.vue";
import LearningResource from "./components/learning-resources/LearningResource.vue";
import NewResource from "./components/learning-resources/NewResource.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    ToggleResource,
    LearningResource,
    NewResource,
  },
  data() {
    return {
      isDefault: true,
      storedResources: [
        {
          id: 1,
          slug: "official-guide",
          title: "Official Guide",
          desc: "The Official Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: 2,
          slug: "google",
          title: "Google",
          desc: "Learn how to google",
          link: "https://google.com",
        },
      ],
    };
  },
  methods: {
    deleteResources(id) {
      if (confirm("Delete Resource ?")) {
        this.storedResources = this.storedResources.filter((x) => x.id !== id);
      }
    },
    StoreClick() {
      this.isDefault = true;
    },
    AddClick() {
      this.isDefault = false;
    },
    AddNewResource(resource) {
      const newResource = {
        id: +new Date(),
        slug: resource.slug,
        title: resource.title,
        desc: resource.desc,
        link: resource.link,
      };

      this.storedResources.push(newResource);
    },
  },
};
</script>

<style></style>
