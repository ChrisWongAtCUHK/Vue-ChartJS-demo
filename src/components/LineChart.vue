<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: [ 'data', 'height' ],
  mounted () {
    var backgroundColor = ['#BC3E3E', '#EB8154', '#8FA654', '#E0A348', '#57A39E',];
    var data = {};
    data.labels = this.data.labels || [];

    var datasets = this.data.datasets || [];

    for (var i = 0; i < datasets.length; i++) {
        datasets[i].backgroundColor = backgroundColor[i];
        datasets[i].borderColor = backgroundColor[i];
        datasets[i].fill = false;
        datasets[i].lineTension = 0;
        datasets[i].borderWidth = 0;
    }
    data.datasets = datasets;
    this.renderChart(data, {
      responsive: true,
      maintainAspectRatio: true,
      legend: 
      {
          display: false
      },
      legendCallback: (chart) => {
        var legendHtml = []
        var labels = chart.data.datasets.map(dataset => dataset.label)

        for (var i=0; i < labels.length; i++) {
            legendHtml.push('<div>');
            legendHtml.push('<span><i class="fa fa-bell" style="color: '+ chart.data.datasets[i].borderColor +';"></i>' + labels[i] + '</span>')
            legendHtml.push('</div>');
        }

        return legendHtml.join("")
      },
      scales:
      {
          xAxes: [{
              ticks : { display: true, "beginAtZero": true, fontColor: '#FFFFFF'},
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }
          }],
          yAxes: [{
              ticks : { display: false, "beginAtZero": true, mirror: false, labelOffset: 0,position: "left", textAlign: "left", fontColor: '#FFFFFF'},
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              },
          }]
      }
    })
    
    const HTML = this.$data._chart.generateLegend()
    this.$emit('generated', HTML)
  }
}
</script>
<style scoped>
</style>
