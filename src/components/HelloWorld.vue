<template>
  <div class="hello">
    <LineChart :data="filtered_line_data" :height="180"></LineChart>
  </div>
</template>

<script>
import LineChart from './LineChart.vue'
export default {
  name: 'HelloWorld',
  components: {
    LineChart
  },
  props: {
    msg: String
  },
  data () {
    return {
      filtered_line_data : {"labels":["Jun 30","Jul 01"],"full_date_labels":["2019-06-30","2019-07-01"],"datasets":[{"label":"High","data":[0,0]},{"label":"Medium","data":[0,0]},{"label":"Low","data":[0,0]}]}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mybtn {
  background:  #29363D;
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
  font-size: 14px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
  color: #ffffff; background-color: #29363d;
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
.no-record {text-align: center; color:#999999;}
h2 {font-family: 'Signika', sans-serif; font-size: 1.5em; color: #28A3B3; padding-top:2em; }
.btn { border: 1px solid #28A3B3; color: #28A3B3;  padding: .2em 2em; position: absolute; right: 2em; top: 50%; transform: translateY(-50%); }
.btn:hover { background-color: #28A3B3; color: #000000; }
.search {background-color: #232e34; padding-top: 1em; padding-bottom: 1em; color: #999999; }
.search h4 { color: #FFFFFF; font-family: 'Signika', Helvetica, Arial, sans-serif; width: 50%;}
.search-criteria { font-size: 1em; }

.submit { position: fixed; border-radius: 50%; background: #28A3B3;; box-shadow: 5px 5px 1em rgba(0,0,0,0.5); width: 60px; height: 60px; bottom: 5%; right: 5%; text-align: center; line-height: 60px; font-size: 3em; cursor:pointer; color: #FFFFFF;z-index: 999;}
.submit:hover {background-color: #f0b257;}
.no_padding{
    padding: 0px !important;
}

.chart-box{
    .chart-head{ 
        border-bottom: 1px solid #47545c;
        margin: 15px 0px;
        border: none;
        &:before,
        &:after{
            content: "";
            display: table;
            clear:both;
        }
        .title{
            float: left;
            font-size: 16px;
            font-weight: 600;
            line-height: 32px;
        }
        .actions{
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
</style>
