<template>
  <div>
    <DataTable :data="paginationData" :page="tableStartIndex" />
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-end">
        <li class="page-item"><button @click="prevNavIndex" :disabled="navStartIndex == 0" class="page-link">Previous</button></li>
        <li v-for="navi in navigationData" :key="navi" class="page-item">
          <button @click="showDataOfIndex(navi)" class="page-link">{{ navi + 1 }}</button>
        </li>
        <li class="page-item"><button @click="nextNavIndex" :disabled="isDisabled" class="page-link">Next</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import DataTable from "./DataTable.vue";

export default {
  name: "PageNavigation",
  components: {
    DataTable,
  },
  props: {
    perPage: {
      type: Number,
      required: false,
      default: 5,
    },
    navLimit: {
      type: Number,
      required: false,
      default: 5,
    },
    tableData: {
      type: Array,
      required: false,
    },
    naviData: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      tableStartIndex: 0,
      navStartIndex: 0,
      activeNav: 0,
    };
  },
  methods: {
    showDataOfIndex(idx) {
      this.tableStartIndex = idx * this.perPage;
    },
    nextNavIndex() {
      this.activeNav += 1;
      if (this.activeNav * this.navLimit != this.navigationData[this.navigationData.length - 1]) {
        this.navStartIndex = this.activeNav * this.navLimit;
      }
    },
    prevNavIndex() {
      this.activeNav -= 1;
      this.navStartIndex = this.activeNav * this.navLimit;

      if (this.activeNav * this.navLimit <= 0) {
        this.navStartIndex = 0;
      }
    },
  },
  computed: {
    paginationData() {
      return this.tableData.slice(this.tableStartIndex, this.tableStartIndex + this.perPage);
    },
    navigationData() {
      console.log(this.navStartIndex, this.navStartIndex + this.navLimit);
      return this.naviData.slice(this.navStartIndex, this.navStartIndex + this.navLimit);
    },
    isDisabled() {
      return this.navStartIndex + this.navLimit >= this.naviData.length;
    },
  },
};
</script>

<style></style>
