注意：此组件为开源组件修订版本，源项目地址 https://github.com/small-stone/vCrontab

## 引入方式

```javascript
import vcrontab from "vcrontab";
export default {
  components: { vcrontab },
};
```

## 代码示例

```javascript
<template>
    <div id="app">
        <div class="box">
            <el-input v-model="input" placeholder class="inp"></el-input>
            <el-button type="primary" @click="showDialog">生成 cron</el-button>
        </div>
        <el-dialog title="生成 cron" :visible.sync="showCron">
            <vcrontab @hide="showCron=false" @fill="crontabFill" :expression="expression"></vcrontab>
        </el-dialog>
    </div>
</template>

<script>
import vcrontab from 'vcrontab'
export default {
    components: { vcrontab },
    data() {
        return {
            input: "",
            expression: "",
            showCron: false
        };
    },
    methods: {
        crontabFill(value) {
            //确定后回传的值
            this.input = value;
        },
        showDialog() {
            this.expression = this.input;//传入的 cron 表达式，可以反解析到 UI 上
            this.showCron = true;
        }
    }
};
</script>
```

## 参数

- expression
  传入的 cron 表达式，可以反解析到 UI 上

- hideComponent
  需要隐藏的组件数组，依次为`['second','min','hour','day','mouth','week','year']`

## 方法

- fill
  点击确定时，把选择好的值返回。

- hide
  关闭组件时的回调