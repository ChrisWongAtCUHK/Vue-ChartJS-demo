<template>
  <div id="app">
    <div class="legend-icon" v-html="message"></div>
    <LineChart :data="filtered_line_data" :height="80" @generated="setLegend"></LineChart>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue'

export default {
  name: 'app',
  components: {
    LineChart,
  },
  data() {
    return {
      message: '',
      filtered_line_data: {
        labels: ['Jul 08', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14'],
        full_date_labels: [
          '2019-07-08',
          '2019-07-09',
          '2019-07-10',
          '2019-07-11',
          '2019-07-12',
          '2019-07-13',
          '2019-07-14',
        ],
        datasets: [
          { label: 'High', data: [0, 0, 6, 0, 0, 0, 0] },
          { label: 'Medium', data: [0, 0, 30, 0, 0, 0, 0] },
          { label: 'Low', data: [0, 0, 6, 0, 0, 0, 0] },
        ],
      },
    }
  },
  methods: {
    setLegend(html) {
      this.message = html
    },
  },
}
</script>

<style lang="less" scoped>
.mybtn {
  background: #29363d;
  color: #cccccc;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  border: none;
  border-radius: 5px;
  button {
    &:hover {
      color: white;
    }
  }
}
.flex-items {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-item {
  cursor: pointer;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff;
  background-color: #29363d;
  flex: 1;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px 0;
  margin: 5px 15px;
}
.flex-item h5 {
  font-size: 10px;
  font-weight: 600;
  text-align: left;
  margin: 0 10px;
}
.flex-item p {
  font-size: 22px;
  font-weight: 500;
  text-align: right;
  margin: 0 10px;
}
.no-record {
  text-align: center;
  color: #999999;
}
h2 {
  font-family: 'Signika', sans-serif;
  font-size: 1.5em;
  color: #28a3b3;
  padding-top: 2em;
}
.btn {
  border: 1px solid #28a3b3;
  color: #28a3b3;
  padding: 0.2em 2em;
  position: absolute;
  right: 2em;
  top: 50%;
  transform: translateY(-50%);
}
.btn:hover {
  background-color: #28a3b3;
  color: #000000;
}
.search {
  background-color: #232e34;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #999999;
}
.search h4 {
  color: #ffffff;
  font-family: 'Signika', Helvetica, Arial, sans-serif;
  width: 50%;
}
.search-criteria {
  font-size: 1em;
}

.submit {
  position: fixed;
  border-radius: 50%;
  background: #28a3b3;
  box-shadow: 5px 5px 1em rgba(0, 0, 0, 0.5);
  width: 60px;
  height: 60px;
  bottom: 5%;
  right: 5%;
  text-align: center;
  line-height: 60px;
  font-size: 3em;
  cursor: pointer;
  color: #ffffff;
  z-index: 999;
}
.submit:hover {
  background-color: #f0b257;
}
.no_padding {
  padding: 0px !important;
}

.chart-box {
  .chart-head {
    border-bottom: 1px solid #47545c;
    margin: 15px 0px;
    border: none;
    &:before,
    &:after {
      content: '';
      display: table;
      clear: both;
    }
    .title {
      float: left;
      font-size: 16px;
      font-weight: 600;
      line-height: 32px;
    }
    .actions {
      float: right;
    }
  }

  .text-left {
    padding-left: 0px;
  }

  .text-right {
    padding-right: 4px;
  }
}

.row + .row {
  margin-top: 5px;
}

div.col-4 {
  line-height: 1.5rem;
}

.legend-icon {
  position: relative;
  float: right;
  right: 10%;
}
</style>
