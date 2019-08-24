<script>
import { HorizontalBar } from 'vue-chartjs'
import Chart from 'chart.js'

export default {
  extends: HorizontalBar,
  props: {
    data: null,
    height: null,
    backgroundColor: {
      default() {
        return [
          '#BC3E3E',
          '#EB8154',
          '#E0A348',
          '#8FA654',
          '#508358',
          '#8057A3',
          '#575AA3',
          '#BC3E3E',
          '#57A39E',
          '#C4C4C4',
          '#BC3E3E',
          '#3EBCBC',
        ]
      },
    },
    layout: {
      default() {
        return {
          padding: {
            left: 0,
            right: 100,
            top: 0,
            bottom: 0,
          },
        }
      },
    },
  },
  mounted() {
    this.init()
  },
  watch: {
    data() {
      this.init()
    },
  },
  methods: {
    init() {
      self = this
      var data = { datasets: [] }
      var data = {}
      data.labels = this.data.labels || []

      var datasets = this.data.datasets || []

      for (var i = 0; i < datasets.length; i++) {
        datasets[i].backgroundColor = this.backgroundColor
        datasets[i].borderWidth = 0
      }

      data.datasets = datasets
      if (data.datasets.length === 0) return

      this.addPlugin({
        id: 'labels-plugin',
        beforeDraw: function(chart) {
          const ctx = chart.ctx
          const meta = chart.controller.getDatasetMeta(0)
          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontSize,
            Chart.defaults.global.defaultFontStyle,
            Chart.defaults.global.defaultFontFamily,
          )
          Chart.helpers.each(
            meta.data.forEach((bar, index) => {
              // left alignment of labels
              const label = chart.data.labels[index]
              const labelPositionX = 0
              const labelWidth = ctx.measureText(label).width + labelPositionX

              ctx.textBaseline = 'middle'
              ctx.textAlign = 'left'
              ctx.fillStyle = '#999999'
              ctx.fillText(label, labelPositionX, bar._model.y)

              var data = chart.data.datasets[0].data[index]
              ctx.textAlign = 'center'
              ctx.textBaseline = 'bottom'
              ctx.fillStyle = bar._model.backgroundColor
              ctx.font = 'bold'
              ctx.fillText(data, chart.width - 20, bar._model.y + bar._model.height / 2)
            }),
          )
        },
      })
      this.renderChart(data, {
        responsive: true,
        maintainAspectRatio: true,
        legend: { display: false, position: 'left' },
        scales: {
          xAxes: [
            {
              ticks: { display: false, beginAtZero: true },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                mirror: false,
                labelOffset: 0,
                position: 'left',
                textAlign: 'left',
                fontColor: 'rgba(0, 0, 0, 0)',
              },
              barThickness: 11,
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
            },
          ],
        },
        layout: self.layout,
      })
    },
  },
}
</script>
