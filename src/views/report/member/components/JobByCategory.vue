<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  created() {
    this.$nextTick(() => {
      console.log('created: ', this.chartData)
      this.initChart()
    })
  },
  mounted() {
    this.$nextTick(() => {
      console.log('mounted: ', this.chartData)
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    // this.chart.dispose()
    // this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ category, userData } = {}) {
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          // data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
          data: category
        },
        series: [
          {
            name: 'JOB POST BY CATEGORY',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            // data: [
            //   { value: 320, name: 'Others' },
            //   { value: 240, name: 'Technology' },
            //   { value: 149, name: 'Forex' },
            //   { value: 100, name: 'Gold' },
            //   { value: 59, name: 'Forecasts' }
            // ],
            data: userData,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
