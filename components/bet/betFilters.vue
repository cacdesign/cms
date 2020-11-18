<template>
	<div>
		<h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Sélectionner les paris à afficher</h2>
		<div class="mt-3 p-8 bg-gray-200 rounded shadow-inner mb-8 relative h-full">
			<div class="grid lg:grid-cols-12 gap-x-6 gap-y-8">
				<div class="space-y-1 relative z-50 inline-block text-left col-span-4" v-for="map, key in filters.data">
					<div>
						<span class="rounded-md shadow-sm">
							<button type="button" @click.prevent="toogle(key)" class="inline-flex items-center capitalize justify-between w-full rounded-md border border-gray-300 px-4 py-3 bg-white text-lg leading-6 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
								<span>{{ key }}</span>
								<!-- Heroicon name: chevron-down -->
								<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
								</svg>
							</button>
						</span>
					</div>
					<div class="origin-top-right relative z-50 rounded-md shadow-lg" v-if="isOpened(key)">
						<div class="rounded-md bg-white shadow-xs">
							<div class="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
								<a v-for="value,filter in map" @click.prevent="activateFilter(key, value)" href="#" class="block px-4 py-2 text-base leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" :class=" selectedFilters[key] === value ? 'bg-gray-100' : '' " role="menuitem">
									{{ filter }} 
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import lodash from 'lodash'
export default {
	data () {
		return {
			filters : [],
			selectedFilters : this.$route.query,
			openedFilters : []
		}
	},
	methods: {
		activateFilter (key, value) {
			this.selectedFilters = Object.assign({}, this.selectedFilters, { [key] : value})

			this.$router.replace({
				query : {
					...this.selectedFilters
				}
			})
		},
		toogle (key) {
			if (this.isOpened(key)) {
				this.openedFilters = _.without(this.openedFilters, key)
			} else {
				this.openedFilters.push(key)
			}
			console.log(this.openedFilters)
		},
		isOpened(key) {
			return _.includes(this.openedFilters, key)
		}
	},
	async mounted () {
		this.filters = await this.$axios.$get('bets/filters')
	}
}
</script>