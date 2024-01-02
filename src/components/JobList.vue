<template>
  <div>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
      <v-card-text>
        <v-text-field
          v-model="searchQuery"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search Job"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @onClick="filterItems"
        ></v-text-field>
      </v-card-text>
    </v-card>

    <v-container>
      <v-row>
        <v-col
          v-for="job in jobs.slice(0, loadedItems)"
          :key="job._id"
          cols="4"
          sm="2"
          md="4"
          lg="4"
        >
          <v-card class="mx-auto" max-width="600">
            <v-card-text>
              <p class="text-h5 text--primary font-weight-black">
                {{ job.title }}
              </p>
              <p class="text-h6 text--primary">{{ job.company }}</p>
              <br />
              <p>{{ job.location }}</p>
              <br />
              <p>Created at: {{ this.formatCreatedAt(job.createdAt) }}</p>
            </v-card-text>
            <v-card-actions>
              <v-row align="center" justify="center">
                <v-btn
                  variant="text"
                  append-icon="mdi-open-in-new"
                  color="deep-purple-accent-4 center"
                  :href="job.link"
                  target="_blank"
                >
                  Learn More
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import _ from "lodash";
export default {
  data() {
    return {
      jobs: [],
      searchQuery: "",
      jobsFiltered: [],
      loadedItems: 10,
    };
  },
  mounted() {
    axios
      .get("https://web-scraping-jobs-production.up.railway.app/")
      .then((response) => {
        this.jobs = response.data;
        this.jobsFiltered = response.data;
      })
      .catch((error) => {
        console.error("Erro ao buscar serviços:", error.message);
      });
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    searchQuery: function (newQuery) {
      this.filterItems(newQuery);
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    filterItems(query) {
      if (query) {
        this.jobs = this.jobs.filter((job) =>
          job.title.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.jobs = this.jobsFiltered;
      }
    },
    handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        this.loadMore();
      }
    },
    loadMore() {
      if (this.loadedItems < this.jobs.length) {
        this.loadedItems += 10;
      }
    },
    formatCreatedAt(createdAt) {
      const date = new Date(createdAt);
      const dia = String(date.getDate()).padStart(2, "0");
      const mes = String(date.getMonth() + 1).padStart(2, "0");
      const ano = date.getFullYear();
      return `${dia}/${mes}/${ano}`;
    },
  },
};
</script>
