<template>
	<div class="py-16">
		<import-modal @BetWasImported="fetchBets" />
		<div class="space-y-4">
			<div class=" md:flex md:items-center md:justify-between">
				<div class="flex-1 flex" v-if="bets.length">
					<button type="button" @click.prevent="deleteAll" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" :class=" deleting ? 'cursor-not-allowed' : '' ">
						Tout supprimer
					</button>
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
											{{ formatDate(bet.date) }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											{{ bet.sport }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" :class="  bet.status === 'Gagné' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' ">
												{{ bet.status }}
											</span>
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											{{ bet.type || 'NC' }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											{{ bet.cote }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											{{ bet.mise }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											{{ bet.gain }}
										</td>
										<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											{{ bet.benefice }}
										</td>
									</tr>
								</tbody>
							</table>
							<nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
								<div class="hidden sm:block">
									<p class="text-sm leading-5 text-gray-700">
										<span class="font-medium">1</span>
										à
										<span class="font-medium"> {{ meta.to }} </span>
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
import moment from 'moment'
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
			links : null,
			deleting : false
		}
	},
	methods : {
		async fetchBets() {
			let bets = await this.$axios.$get('admin/bets')
			this.bets = bets.data
			this.meta = bets.meta
			this.links = bets.links
		},
		openModal() {
			this.$modal.show('importModal')
		},
		formatDate(date) {
			return moment(date).format('Y-M-D HH:mm:ss')
		},
		async deleteAll() {
			if(!window.confirm('Voulez-vous vraiment tout supprimer ?')) {
				return
			}
			this.deleting = true
			await this.$axios.$delete('admin/bets')

			setTimeout(() => {
				this.deleting = false
				this.fetchBets()
			},1000)
		}
	},

	async asyncData( { app } ) {
		try {
			let bets = await app.$axios.$get('admin/bets')
			return {
				bets : bets.data,
				meta : bets.meta,
				links : bets.links
			}
		} catch(e) {
			console.log(e)
		}
	},
	created() {
		moment.locale('fr');
	}
}
</script>