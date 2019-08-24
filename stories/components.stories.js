/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './components.stories.css'

import HorizontalBarChart from '../src/components/HorizontalBarChart.vue'
import LineChart from '../src/components/LineChart.vue'

export const bar_chart_data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],	
  datasets: [
    {
      data: [1, 3, 5, 7, 9, 11, 12, 10, 8, 6, 4, 3, 2],
    },
  ],
}

export const line_chart_data = {
  labels: ['Jul 08', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14'],
  full_date_labels: ['2019-07-08', '2019-07-09', '2019-07-10', '2019-07-11', '2019-07-12', '2019-07-13', '2019-07-14'],
  datasets: [
    { label: 'Danger', data: [0, 0, 6, 0, 0, 0, 0] },
    { label: 'Warn', data: [0, 0, 30, 0, 0, 0, 0] },
    { label: 'Normal', data: [0, 0, 6, 0, 0, 0, 0] },
  ],
}

storiesOf('HorizontalBarChart', module)
  .add('Horizontal bar chart story', () => ({
    components: { HorizontalBarChart },
    template: `<HorizontalBarChart :data="bar_chart_data" :height="100" />`,
    data: () => ({
      bar_chart_data: bar_chart_data,
    }),
  }))
  .add('Line chart story', () => ({
    components: { LineChart },
    template: `<div id="app">
    <div class="legend-icon" v-html="message"></div>
    <LineChart :data="line_chart_data" :height="80" @generated="setLegend"></LineChart>
  </div>`,
    data: () => ({
      message: '',
      line_chart_data: line_chart_data,
    }),
    methods: {
      setLegend(html) {
        this.message = html
      },
    },
  }))
