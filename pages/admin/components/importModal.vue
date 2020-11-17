<template>
	<app-modal name="importModal">
		<template slot="header">
			<h3 class="text-lg leading-6 font-medium text-gray-900">
				Importer des paris
			</h3>
		</template>

		<template slot="body" slot-scope=" { params } ">
			<div>
				<template v-if="fileWasUploaded">
					<div class="mt-6 sm:mt-5 sm:gap-4 sm:py-5">
						<div class="mt-2 sm:mt-0">
							<div class="flex items-center justify-center py-2">
								<p class="text-3xl">
									<span class="font-extrabold">{{ importCount }}</span> paris à importer
								</p>
							</div>
						</div>
					</div>
				</template>
				<template v-else>
					<div class="mt-6 sm:mt-5 sm:gap-4 sm:py-5">
						<div class="mt-2 sm:mt-0">
							<div class="flex items-center justify-center">
								<div class="mt-2 flex items-center">
									<div class="flex items-center space-x-2 MR-4">
										<span class="h-8 w-8">
											<svg class="h-full w-full text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
											</svg>
										</span>
										<span>
											Ficher CSV
										</span>
									</div>
									<span class="ml-5 py-3 shadow-md px-3 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
										<form enctype="multipart/form-data" name="file">
											<input type="file" @change="updload" id="file" class="sr-only">
											<label for="file" class="cursor-pointer">
												Ajouter un ficher
											</label>
										</form>
									</span>
								</div>
							</div>
						</div>
					</div>
				</template>
			</div>

			<div class="mt-8 border-t border-gray-200 pt-5">
				<div class="flex justify-end">
					<span class="inline-flex rounded-md shadow-sm">
						<button @click.prevent="closeModal" type="button" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
							Annuler
						</button>
					</span>
					<span class="ml-3 inline-flex rounded-md shadow-sm">
						<button type="button" @click.prevent="importBets" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
							Importer
						</button>
					</span>
				</div>
			</div>
		</template>
	</app-modal>
</template>

<script>
import appModal from '@/components/appModal'
export default {
	components : { appModal },
	data () {
		return {
			file : '',
			columns : [],
			rows : [],
			importCount : 0,
			fileWasUploaded : false
		}
	},

	methods : {
		makeFormData (e) {
			const form = new FormData()
			form.append('file', e.target.files[0])	
			return form	
		},

		async updload (e) {
			try {
				await this.$axios.post('admin/bets/import', this.makeFormData(e)).then((res) => {
					this.fileWasUploaded = true
					
					this.columns = res.data.columns
					this.importCount = res.data.importCount
					this.rows = res.data.rows

					console.log(res.data)
				})
			} catch (e) {
				console.log(e)
			}
		},

		importBets() {
			this.$emit('BetWasImported')
			this.closeModal()
		},

		closeModal () {
			this.$modal.hide('importModal')
			this.reset() 
		},

		reset () {
			this.fileWasUploaded = false,
			this.file = ''
			this.columns = []
			this.importCount = 0
			this.rows = []
		}
	},
	
}
</script>
