<template>
    <div>
        <div class="bg-gray-900">
          <div class="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="text-center">
                <p class="mt-1 text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                    Consultez nos bilans
                </p>
            </div>
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 lg:py-20 overflow-hidden space-y-24">

        <bet-filters />

        <div>
            <template v-if="bets.data">
                <div class="space-y-24">
                   <client-only>
                    <div>
                        <apexchart :options="options" :series="series"></apexchart>
                    </div>
                </client-only>

                <div class="space-y-24">
                    <div>
                        <h3 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Statistiques
                        </h3>
                        <div class="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Nb de paris
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.data.length }}
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Benef
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.benefices }}€
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            ROI
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold" :class=" formatToNumber(bets.stats.roi) > 0 ? 'text-green-400' : 'text-red-500' ">
                                            {{ bets.stats.roi }}%
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Progression
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold" :class=" formatToNumber(bets.stats.progression) > 0 ? 'text-green-400' : 'text-red-500' ">
                                            {{ bets.stats.progression }}%
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Réussite
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.reussite }}%
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Capital de départ
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.capital | 10 000 }}€
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Capital de actuel
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.capital_actuel }}€
                                        </dd>
                                    </dl>
                                </div>
                            </div>


                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Paris gagnants
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.paris_gagnants }}
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Paris perdants
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.paris_perdants }}
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Paris remboursés
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            0
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Mises jouées
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.mise_jouees }}€
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Mises moyennes
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.mise_moy }}
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <dl>
                                        <dt class="uppercase text-sm leading-5 font-medium text-gray-500 truncate">
                                            Côte moyenne
                                        </dt>
                                        <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                            {{ bets.stats.cote_moy }}€
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Bets Listing -->
                    <div class="space-y-12">
                        <div class="mt-3 py-3 px-6 border border-indigo-600 rounded flex items-center justify-between">
                            <span class="uppercase text-indigo-700 font-medium text-xl">Septembre 2020</span>
                            <span class="px-4 py-1.5 rounded-md text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
                                {{ bets.data.length }} paris
                            </span>
                        </div>

                        <div class="space-y-8">
                         <bet-card v-for="bet in bets.data" :key="bet.id" :bet="bet"></bet-card>
                     </div>
                 </div>
             </div>
         </div>
     </template>

     <template v-else>
        <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            0 bet(s) found
        </h3>
    </template>
</div>
<div>
  
</div>
</div>
</div>
</template>

<script>
    import betCard from '@/components/bet/betCard'
    import betFilters from '@/components/bet/betFilters'
    export default {
        head () {
            return {
                title : 'Demo'
            }
        },
        components : { betCard, betFilters},
        data () {
            return {
                bets : [],
                options: {
                    chart: {
                        type: 'area',
                        height: 300,
                        stacked: true,
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        dates: []
                    }
                },
                series: [{
                    name: 'Capital',
                    data: []
                }],
                datasets : [{ data: [], smooth: true, showPoints: true, fill: true}],
                labels : { xLabels: []},
            }
        },
        watch : {
            '$route.query' : {
                handler (query) {
                    this.getBets(query)
                },
                deep : true
            }
        },
        methods : {
            fillDatasets() {
                if (this.bets.data) {
                    return this.bets.data.map((b) => {
                        return Number(b.benefice) + 10000
                    })
                } else {
                    this.series[0].data = [10000,10000,10000,10000]
                }

            },
            fillLabels() {
                if (this.bets.data) {
                    return this.bets.data.map((b) => {
                        return b.benefice
                    })
                } else {
                    this.options.xaxis.dates = ['10000','10000','10000','1000']
                }
            },
            formatToNumber(value) {
                return parseInt(value, 10)
            },
            updateChart() {
                const newData = this.fillDatasets()
                this.series = [{
                    data : newData
                }]
            },
            updateOptions() {
                const newData = this.fillLabels()
                this.options = {
                    xaxis : {
                        data : newData
                    }
                }
            },
            async getBets (query = '') {
                await this.$axios.$get('bets', {
                    params : {
                        ...query
                    }
                }).then((res) => {
                    this.bets = res
                    this.updateChart()
                    this.updateOptions
                })
            }

        },


    // async asyncData ({$axios}) {
    //     let bets = await $axios.$get('bets')
    //     return { bets : bets.data }
    // }
    mounted () {
        this.getBets()
        this.fillDatasets()
        this.fillLabels()
        console.log(this.$VueApexCharts)
    }
}
</script>