<template>
	<div role="presentation" class="max-h-screen fixed bottom-0 inset-x-0 z-50 inset-x-0 px-4 py-4 sm:inset-0 sm:flex sm:items-start sm:justify-center overflow-y-auto" v-if="visible" >
		<div class="fixed inset-0 transition-opacity">
			<div class="absolute inset-0 bg-gray-500 opacity-50"></div>
		</div>

		<div class="relative bg-white rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all sm:w-full sm:p-6 overflow-y-auto max-w-2xl" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
			<div class="hidden sm:block absolute top-0 right-0 pt-6 pr-4">
				<button @click.prevent="$modal.hide(name)" type="button" class="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150" aria-label="Close">
					<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>
			</div>
			<slot name="header"/>
			<slot name="body" :params="params" />
			<slot name="footer" />
		</div>
	</div>
</template>
<script>
	export default {
		props : {
			name : {
				required : true,
				type : String
			},
			width : {
				required : false,
				type : String,
				default : 'max-w-4xl'
			}
		},
		data () {
			return {
				visible : false,
				params : {}
			}
		},
		beforeMount () {
			this.$modal.$event.$on('show', (modal, params) => {
				if (this.name === modal) {
					this.params = params
					this.visible = true
				}
			})
			this.$modal.$event.$on('hide', (modal) => {
				if (this.name === modal) {
					this.visible = false
				}
			})
		},
		mounted () {
			document.addEventListener('keydown', (e) => {
				if (this.visible && e.keyCode === 27) {
					this.visible = false
				}
			})
		}
	}
</script>