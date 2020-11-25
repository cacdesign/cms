<template>
  <div>
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
      Sélectionner les paris à afficher
    </h2>
    <div
      class="mt-3 p-8 bg-gray-200 rounded shadow-inner relative h-full space-y-8"
    >
      <div class="flex justify-center">
        <template v-if="filtersInUse">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              @click.prevent="clearFilters"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-base leading-6 font-medium rounded-md text-gray-700 hover:text-gray-500 space-x-2 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
            >
              <span>Réinitialiser</span>
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
            </button>
          </span>
        </template>
      </div>
      <div class="grid lg:grid-cols-12 gap-x-6 gap-y-8">
        <div class="lg:col-span-6">
          <label
            for="from"
            class="block text-lg leading-6 font-medium text-gray-700"
            >De</label
          >
          <input
            type="date"
            v-model="dates.from"
            @change="activateFilter('from', formatDate(dates.from))"
            class="mt-1 form-input block w-full sm:leading-6 px-3 py-3 text-lg"
          />
        </div>
        <div class="lg:col-span-6">
          <label
            for="to"
            class="block text-lg leading-6 font-medium text-gray-700"
            >A</label
          >
          <input
            type="date"
            v-model="dates.to"
            @change="activateFilter('to', formatDate(dates.to))"
            class="mt-1 form-input block w-full sm:leading-6 px-3 py-3 text-lg"
          />
        </div>

        <div class="lg:col-span-3" v-for="(map, key) in filters.data">
          <label
            :for="key"
            class="block text-lg capitalize font-medium text-gray-700"
            ><span>{{ key }}</span></label
          >
          <select
            v-model="multipleSelections"
            @change="fillFilter($event, key)"
            :id="key"
            class="mt-1 block w-full bg-white pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
          >
            <option selected value="null">Choisissez une valeur</option>
            <option v-for="(value, filter) in map" :value="value">
              {{ filter }}
            </option>
          </select>
        </div>

        <div class="lg:col-span-3">
          <label
            for="coteMin"
            class="block text-lg leading-6 font-medium text-gray-700"
            >Côte Min</label
          >
          <input
            v-model="cote.min"
            type="number"
            @change="activateFilterCote('coteMin', cote.min)"
            class="mt-1 form-input block w-full sm:leading-6 px-3 py-3 text-lg"
          />
        </div>

        <div class="lg:col-span-3">
          <label
            for="coteMax"
            class="block text-lg leading-6 font-medium text-gray-700"
            >Côte Max</label
          >
          <input
            v-model="cote.max"
            type="number"
            @change="activateFilterCote('coteMax', cote.max)"
            class="mt-1 form-input block w-full sm:leading-6 px-3 py-3 text-lg"
          />
        </div>

        <!-- <div class="space-y-1 relative z-50 inline-block text-left lg:col-span-4" v-for="map, key in filters.data">
					<div>
						<span class="rounded-md shadow-sm">
							<button type="button" @click.prevent="toogle(key)" class="inline-flex items-center capitalize justify-between w-full rounded-md border border-gray-300 px-4 py-3 bg-white text-lg leading-6 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
								<span>{{ key }}</span>
								<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
								</svg>
							</button>
						</span>
					</div>
					<div class="origin-top-right relative z-50 rounded-md shadow-lg" v-if="isOpened(key)">
						<div class="rounded-md bg-white shadow-xs">
							<div class="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
								<a v-for="value,filter in map" @click.prevent="activateFilter(key, value)" href="#" class="block px-4 py-2 text-base leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:text-gray-900" :class=" selectedFilters[key] === value ? 'bg-blue-200' : '' " role="menuitem">
									{{ filter }} 
								</a>
							</div>
						</div>
					</div>
				</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
export default {
  data() {
    return {
      filters: [],
      selectedFilters: this.$route.query,
      openedFilters: [],
      multipleSelections: [],
      dates: {
        from: "",
        to: ""
      },
      cote: {
        min: 1,
        max: 10
      }
    };
  },
  computed: {
    filtersInUse() {
      return !_.isEmpty(this.selectedFilters);
    }
  },
  methods: {
    activateFilter(key, value) {
      if (_.includes(this.selectedFilters, value)) {
        this.selectedFilters = _.omit(this.selectedFilters, key);
      } else {
        this.selectedFilters = Object.assign({}, this.selectedFilters, {
          [key]: value
        });
      }

      this.$router.replace({
        query: {
          ...this.selectedFilters
        }
      });
    },

    activateFilterCote(key, value) {
      this.selectedFilters = Object.assign({}, this.selectedFilters, {
        [key]: value
      });

      this.$router.replace({
        query: {
          ...this.selectedFilters
        }
      });
    },

    fillFilter(event, key) {
      var el = document.getElementById(key);
      this.activateFilter(key, el.value);
      console.log("fillfilter", this.multipleSelections);
      console.log("$route.query");
    },

    toogle(key) {
      if (this.isOpened(key)) {
        this.openedFilters = _.without(this.openedFilters, key);
      } else {
        this.openedFilters.push(key);
      }
    },

    isOpened(key) {
      return _.includes(this.openedFilters, key);
    },

    formatDate(date) {
      return moment(date).format("Y-M-D HH:mm:ss");
    },

    clearFilters() {
      if (this.filtersInUse) {
        this.selectedFilters = {};
        this.dates.from = "";
        this.dates.to = "";

        this.$router.replace({
          query: {}
        });
      } else {
        return;
      }
    }
  },

  async mounted() {
    this.filters = await this.$axios.$get("bets/filters");
    moment.locale("fr");
  }
};
</script>
