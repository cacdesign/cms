<template>
	<div>
		<header class="bg-white shadow">
			<div class="max-w-7xl mx-auto px-4 lg:divide-y lg:divide-gray-200 lg:px-6">
				<div class="relative h-16 flex justify-between">
					<div class="relative z-10 px-2 flex lg:px-0">
						<div class="flex-shrink-0 flex items-center">
							<nuxt-link :to=" { name : 'index' } ">
								<img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-orange-500.svg" alt="Workflow logo">
							</nuxt-link>
						</div>
					</div>
					<div class="relative z-10 flex items-center lg:hidden">
						<!-- Mobile menu button -->
						<button @click.prevent="mobileMenu = !mobileMenu" class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-expanded="false">
							<span class="sr-only">Open menu</span>
							<!-- Icon when menu is closed. -->

							<svg :class="mobileMenu ? 'hidden' : 'block' " class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>

							<svg :class="!mobileMenu ? 'hidden' : 'block' " class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
						<!-- Profile dropdown -->
						<div class="flex-shrink-0 relative ml-4">
							<div>
								<button @click.prevent="profileDropdownPanel = !profileDropdownPanel" class="border-2 border-transparent rounded-full flex focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" id="user-menu" aria-haspopup="true">
									<span class="sr-only">Open user menu</span>
									<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="">
								</button>
							</div>

							<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" v-show="profileDropdownPanel">
								<div class="bg-white rounded-md shadow-xs py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
									<a href="#" class="block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Paramètres</a>

									<a href="#" class="block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Déconnexion</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
					<a href="#" class="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 bg-gray-100 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
						Dashboard
					</a>

				<!-- 	<a href="#" class="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
						Jobs
					</a> -->

				</nav>
			</div>

			<nav aria-label="Global" :class=" mobileMenu ? 'block' : 'hidden' ">
				<div class="pt-2 pb-3 px-2 space-y-1">
					<a href="#" class="block rounded-md py-2 px-3 text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">Dashboard</a>

					<a href="#" class="block rounded-md py-2 px-3 text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">Jobs</a>

					<a href="#" class="block rounded-md py-2 px-3 text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">Applicants</a>

					<a href="#" class="block rounded-md py-2 px-3 text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">Company</a>
				</div>
				<div class="border-t border-gray-200 pt-4 pb-3">
					<div class="px-4 flex items-center">
						<div class="flex-shrink-0">
							<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="">
						</div>
						<div class="ml-3">
							<div class="text-base font-medium leading-6 text-gray-800">Lisa Marie</div>
							<div class="text-sm font-medium leading-5 text-gray-500">lisamarie@example.com</div>
						</div>
						<button class="ml-auto flex-shrink-0 border-2 border-transparent rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out">
							<span class="sr-only">Notifications</span>
							<!-- Heroicon name: bell -->
							<svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
							</svg>
						</button>
					</div>
					<div class="mt-3 px-2 space-y-1">
						<a href="#" class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">Your Profile</a>

						<a href="#" class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">Settings</a>

						<a href="#" class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">Sign out</a>
					</div>
				</div>
			</nav>
		</header>

		<main class="px-4 max-w-7xl mx-auto pb-10 lg:py-12 lg:px-6">
			<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
				<!-- <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
					<nav class="space-y-1">
						<a href="#" class="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">

							<svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span class="truncate">
								Profile
							</span>
						</a>

						<a href="#" class="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
							<svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<span class="truncate">
								Account
							</span>
						</a>

						<a href="#" class="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
							<svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
							</svg>
							<span class="truncate">
								Password
							</span>
						</a>

						<a href="#" class="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
							<svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
							</svg>
							<span class="truncate">
								Notifications
							</span>
						</a>

						<a href="#" class="group bg-gray-50 rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-orange-600 hover:bg-white focus:outline-none focus:bg-white transition ease-in-out duration-150" aria-current="page">
							<svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-orange-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
							</svg>
							<span class="truncate">
								Plan &amp; Billing
							</span>
						</a>

						<a href="#" class="group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150">
							<svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
							</svg>
							<span class="truncate">
								Integrations
							</span>
						</a>
					</nav>
				</aside> -->
			</div>
			<nuxt />
		</main>
	</div>
</template>

<script>
export default {
	data () {
		return {
			mobileMenu : false,
			profileDropdownPanel : false
		}
	}
}
</script>