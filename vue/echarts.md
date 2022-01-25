## 问题描述
#### 问题:
* 父组件数据改变，子组件ECharts数据重新渲染(默认父组件直接修改数据无法使得子组件重新渲染)

## 解决思路
```
子组件添加watch监控数据变化,实时渲染数据

父组件代码：
<div>
    <employee-e-charts v-if="degreeData" :id="'degree'" :chart-data="degreeData" :width="'600px'" />
</div>

子组件代码：
<template>
  <div>
    <div :id="id" :style="{width: width, height: height}" />
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'EmployeeECharts',
  props: {
    width: {
      type: String,
      default: '400px'
    },
    height: {
      type: String,
      default: '300px'
    },
    chartData: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chart: ''
    }
  },
  watch: {   // *  重点代码 *
    chartData(val) {
      this.setOptions(val)
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    async init() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.setOptions(this.chartData)
    },
    setOptions({ reportName, employeeX, employeeY } = {}) {
      this.chart.setOption({
        title: {
          text: reportName
        },
        tooltip: {},
        legend: {
          data: employeeX
        },
        xAxis: {
          data: employeeX
        },
        yAxis: {},
        series: [{
          type: 'bar',
          data: employeeY,
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          }
        }]
      })
    }
  }
}
</script>

<style scoped>

</style>

```

### 重点是子组件里面的watch代码，父组件只需要修改degreeData的值就能使得子组件也会渲染