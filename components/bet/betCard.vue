<template>
	<div class="bg-white rounded divide-y-2 divide-blue-50 block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
		<div class="px-4 py-6 sm:px-6">
			<div class="flex items-baseline justify-between">
				<div class="text-2xl leading-8 font-extrabold sm:leading-9">
					{{ bet.sport }} | {{ bet.title || 'NC' }}
				</div>
				<div class="ml-2 flex-shrink-0 flex">
					<span class="py-3 px-5 inline-flex text-base leading-5 font-semibold rounded" :class=" bet.status === 'Gagné' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' " >
						{{ bet.status }}
					</span>
				</div>
			</div>
			<div class="mt-3 sm:flex sm:justify-between">
				<div class="sm:flex">
					<dl class="-mx-8 flex flex-wrap">
						<div class="flex flex-col px-8">
							<dt class="order-2 text-base leading-6 font-medium text-gray-500">
								Cote
							</dt>
							<dd class="order-1 text-center text-2xl leading-8 font-extrabold text-indigo-600 sm:leading-9">
								{{ bet.cote }}
							</dd>
						</div>
						<div class="flex flex-col px-8">
							<dt class="order-2 text-base leading-6 font-medium text-gray-500">
								Mise
							</dt>
							<dd class="order-1 text-center text-2xl leading-8 font-extrabold text-indigo-600 sm:leading-9">
								{{ bet.mise }}€
							</dd>
						</div>
						<div class="flex flex-col px-8">
							<dt class="order-2 text-base leading-6 font-medium text-gray-500">
								Gain
							</dt>
							<dd class="order-1 text-center text-2xl leading-8 font-extrabold text-indigo-600 sm:leading-9">
								{{ bet.gain }}€
							</dd>
						</div>
						<div class="flex flex-col px-8">
							<dt class="order-2 text-base leading-6 font-medium text-gray-500">
								{{ formatBenef }}
							</dt>
							<dd class="order-1 text-center text-2xl leading-8 font-extrabold sm:leading-9" :class=" bet.benefice > 0 ? 'text-green-500' : 'text-red-500' ">
								{{ bet.benefice }}€
							</dd>
						</div>
					</dl>
				</div>
				<div class="mt-3 flex items-center text-base leading-5 text-gray-500 sm:mt-1">
					<!-- Heroicon name: calendar -->
					<svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
					</svg>
					<span>
						<time :datetime="bet.date"> {{ bet.date }} </time>
					</span>
				</div>
			</div>
		</div>
		<div class="px-4 py-3 sm:px-6 space-x-2">
			<span class="inline-flex items-center px-5 py-3 rounded text-sm font-medium leading-4 bg-gray-100 text-gray-800">
				{{ bet.simple }}
			</span>
			<span class="inline-flex items-center px-5 py-3 rounded text-sm font-medium leading-4 bg-gray-100 text-gray-800">
				{{ bet.live }}
			</span>
			<span class="inline-flex items-center px-5 py-3 rounded text-sm font-medium leading-4 bg-gray-100 text-gray-800">
				{{ bet.source }}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props : {
			bet : {
				required : true,
				type : Object
			}
		},
		computed : {
			formatBenef() {
				return this.bet.benefice > 0 ? 'Benef' : 'Perte'
			}
		}
	}
</script>