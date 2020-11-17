<template>
	<div>
		<import-modal @BetWasImported="fetchBets" />
		<div class="space-y-4">
			<div class=" md:flex md:items-center md:justify-between">
				<div class="flex-1 flex">
					<div class="w-full lg:w-1/3">
						<label for="search" class="sr-only">Rechercer un pari</label>
						<div class="relative text-indigo-300 focus-within:text-gray-400">
							<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
								</svg>
							</div>
							<input id="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-300 placeholder-indigo-300 focus:outline-none focus:bg-white focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Rechercher un pari" type="search">
						</div>
					</div>
				</div>
				<div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
					<span class="shadow-sm rounded-md">
						<button type="button" @click.prevent="openModal" class="inline-flex items-center space-x-2 px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-cool-gray-800 active:bg-cool-gray-50 transition duration-150 ease-in-out">
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
							<span>Importer</span>
						</button>
					</span>
				</div>
			</div>

			<div class="flex flex-col" v-if="bets.length">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="py-2 align-middle inline-block min-w-full sm:px-6">
						<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table class="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<!-- <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Intitulé
										</th> -->
										<th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
										<th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Sport
										</th>
										<th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Etat
										</th>
										<th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Type
										</th>
										<th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Cote
										</th>
										<th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Mise
										</th>
										<th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Gain
										</th>
										<th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Bénéfice
										</th>
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200">
									<tr v-for="bet in bets">
										<!-- <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 truncate">
											{{ bet.title }}
										</td> -->
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 truncate">
											{{ bet.date }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											{{ bet.sport }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
												Gagné
											</span>
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											{{ bet.type || 'NC' }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											5.6
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											200
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											408
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											208
										</td>
									</tr>
								</tbody>
							</table>
							<nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
								<div class="hidden sm:block">
									<p class="text-sm leading-5 text-gray-700">
										<span class="font-medium">1</span>
										à
										<span class="font-medium"> {{ meta.per_page }} </span>
										/
										<span class="font-medium"> {{ meta.total }} </span>
										Paris
									</p>
								</div>
								<div class="flex-1 flex justify-between sm:justify-end">
									<a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
										Previous
									</a>
									<a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
										Suivant
									</a>
								</div>
							</nav>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import importModal from './components/importModal'
export default {
	layout : 'admin',
	components : {
		importModal
	},
	data () {
		return {
			bets : null,
			meta : null,
			links : null
		}
	},
	methods : {
		async fetchBets() {
			let bets = await this.$axios.$get('admin/bets')
			this.bets = bets.data
		},
		openModal() {
			this.$modal.show('importModal')
		}
	},

	async asyncData( { app } ) {
		let bets = await app.$axios.$get('admin/bets')
		return {
			bets : bets.data,
			meta : bets.meta,
			links : bets.links
		}
	}
}
</script>