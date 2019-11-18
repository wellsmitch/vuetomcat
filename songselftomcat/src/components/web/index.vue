<template>

  <a-layout style="position: relative">
    <a-layout-header style="background: #fff; padding: 0;padding-left: 20px">
      {{title}}

    </a-layout-header>
    <a-layout-content style="margin: 16px 16px 0">
      <a-alert message="Warning text" banner/>
      <!-- video audio 配置 -->
      <a-collapse v-model="activeKey">
        <a-collapse-panel :header="attetaion1" key="1">
          <!-- 内容开始 -->
          <a download href="~ASSETS/song.jpg">~ASSETS/song.jpg</a>
          <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
          </a-steps>
          <div class="steps-content">{{steps[current].content}}</div>
          <div class="steps-action">
            <a-button
              v-if="current < steps.length - 1"
              type="primary" @click="next"
            >
              下一项
            </a-button>
            <a-button
              v-if="current == steps.length - 1"
              type="primary"
              @click="done"
            >
              结束
            </a-button>

            <a-button
              v-if="current>0"
              style="margin-left: 8px"
              @click="prev"
            >
              上一项
            </a-button>
          </div>
        </a-collapse-panel>
        <a-collapse-panel header="各种表格样式" key="2" :disabled='false'>
          <p v-html="tableDemo"></p>
        </a-collapse-panel>
        <a-collapse-panel header="数组的一些方法" key="3" :disabled='false'>
          <div>
            /*map*/
            <br/>var arr = [11, 12, 15, 18];
            <br/>var arr1 = arr.map(function (item, i) {
            <br/>return item == 12 ? 88 : item
            <br/>});
            <br/>console.log(arr1);
            <br/>/*filter*/
            <br/>var arr2 = [{a:11}, {a:15}];
            <br/>var arr3 = arr2.filter(function (item, i) {
            <br/>console.log(item);
            <br/>return item.a == 15
            <br/>});
            <br/>console.log(arr3);
            <br/>
            <br/>var arr4 = [];
            <br/>var arrCopy = arr4.concat(9,[11,[13]]);
            <br/>console.log(arr4.concat(...arrCopy));

          </div>
        </a-collapse-panel>
        <a-collapse-panel header="js代码执行器" key="4" :disabled='false'>
          <textarea name="" id="" cols="30" rows="10" v-model="consoleval"></textarea>
          <button @click="zhixing">执行</button>
          <div>{{consoleResult}}</div>
        </a-collapse-panel>
        <a-collapse-panel header="关于console" key="5" :disabled='false'>
          <div></div>
        </a-collapse-panel>
        <a-collapse-panel header="关于console" key="6" :disabled='false'>
          <div>
            <h2>console.trace()//追踪函数调用轨迹</h2>
            <div>
              function box() {
              <br/>// debugger
              <br/>var a =1;
              <br/>console.count('调用次数');//调用次数
              <br/>console.trace()//追踪函数调用轨迹
              <br/>}
              <br/>box();
              <br/>box()
            </div>
          </div>
          <div>
            <h2>console.time()//计算脚本执行的时间</h2>
            console.time('fff')
            <br> var a =1
            <br> console.timeEnd('fff')
          </div>
          <div>
            <h2>console的封装</h2>
            <div>
              // https://blog.csdn.net/qq_35275973/article/details/80941436

              <br>console.log = (function(oriLogFunc) {
              <br>return function(msg, tag = '') {
              <br>oriLogFunc.call(console, '%c#' + tag, 'background:yellow;color:red;font-size:16px', msg);
              <br>}
              <br>})(console.log);
              <br>console.log(132)
            </div>
          </div>
        </a-collapse-panel>
        <a-collapse-panel header="es6" key="7" :disabled='false'>
          <!--类-->
          <div>
            <h2>class</h2>
            <div>
              class person {
              <br> constructor(x,y){
              <br> this.x = x;
              <br> this.y = y;
              <br> this.toString()
              <br> }
              <br> toString(){
              <br> console.log(this.x,111111111111)
              <br> }
              <br> }
              <br> var a = new person(1,3);


              <br> var ss = 'vv';
              <br> class person_ {
              <br> constructor(x,y){
              <br> this.x = x;
              <br> this.y = y;
              <br> this.vv()
              <br> }
              <br> [ss](){
              <br> console.log(this.x,55555555)
              <br> }
              <br> }
              <br> var a = new person_(1,3)
            </div>
          </div>
          <!--继承-->
          <div>
            <h2>继承</h2>
            <div>
              class person {
              <br>constructor(x,y){
              <br>this.x = x;
              <br>this.y = y;
              <br>this.toString_()
              <br>}
              <br>toString_(){
              <br>console.log(this.x,this.y,111111111111)
              <br>}
              <br>}

              <br>class child extends person {
              <br>constructor(x,y,color){
              <br>super(x,y);
              <br>this.color = color;
              <br>this.fn()
              <br>}
              <br>fn(){
              <br>// console.log(666)
              <br>console.log(this.color)
              <br>}
              <br>}

              <br>var child_1 = new child(111,222,'red')
            </div>
          </div>
          <!--super-->
          <div>
            <h2>关于super</h2>
            <div>
              class Point {
              <br> constructor(x, y) {
              <br> this.x = x;
              <br> this.y = y;
              <br> this.g();
              <br> }
              <br> g () {
              <br> console.log(this.x)
              <br> }
              <br> }

              <br> class ColorPoint extends Point {
              <br> constructor(x, y, color) {
              <br> // this.color = color; // ReferenceError
              <br> super(x, y);
              <br> this.color = color; // 正确
              <br> }}
              <br> var a = new ColorPoint(3)
            </div>
          </div>
          <!--yield-->
          <div>
            <h2>yield</h2>
            <div>
              let go = function* (x) {
              <br> console.log('x', x);
              <br> let a = yield x;
              <br> console.log('xx', x);
              <br>
              <br> console.log('a', a);
              <br>
              <br> let b = yield(x + 100);
              <br>
              <br> sum = a + b;
              <br> console.log(a, b);
              <br>
              <br> yield a + b;
              <br>
              <br> return a + b
              <br> };
              <br>
              <br> go(10);
              <br>
              <br> let g = go(10);
              <br> // console.log(g.next());
              <br> // console.log(g.next().value);
              <br> //这里加了三个
              <br> console.log(g.next(50));
              <br> console.log(g.next(8));
              <br> console.log(g.next(9));
              <br> console.log(g.next(18));
              <hr>
              function* g4() {
              <br> yield* [1, 2, 3];
              <br> // yield* { "a": 123, "b": 456};
              <br> return 'foo';
              <br> }
              <br>
              <br> var result;
              <br>
              <br> function* g5() {
              <br> result = yield* g4();
              <br> }
              <br>
              <br> var iterator = g5();
              <br>
              <br> console.log(iterator.next()); // {value: 1, done: false}
              <br> console.log(iterator.next()); // {value: 2, done: false}
              <br> console.log(iterator.next()); // {value: 2, done: false}
              <br> console.log(result);
              <br> console.log(iterator.next()); // {value: 3, done: false}
              <br> console.log(iterator.next()); // {value: undefined, done: true},
              <br> // g4() returned {value: 'foo', done: true} at this point
              <br>
              <br> console.log(result); // "foo"
            </div>
          </div>
        </a-collapse-panel>

      </a-collapse>


      <h2>static 中播放音乐视频正常但是assets播放异常 --未解决</h2>
      <!-- video -->
      <!--  video  assets  -->
      <!--<video src="~ASSETS/Echosmith.mp4" autoplay="autoplay" controls="controls"></video>-->
      <!--  video  static播放正常  -->
      <!--<video ssss controls src="static/Echosmith.mp4" autoplay="autoplay"></video>-->


      <!-- audio-->
      <!-- audio   static播放正常  -->
      <!--<audio class="audio" src="static/thz.mp3" controls autoplay="autoplay"></audio>-->
      <!-- audio   assets播放正常  -->
      <audio src="~ASSETS/thz.mp3" controls></audio>
      <router-link :to="{path: 'cssindex',query: {param1:'css'}}">css</router-link>

    </a-layout-content>
    <a-layout-footer style="text-align: center;">
      welcome to wellsimtch's castle!
    </a-layout-footer>
  </a-layout>

</template>

<script>
  export default {
    name: "v-webIndex",
    data() {
      return {
        attetaion1: 'audio 标签与ant-design-vue',
        title: '',
        current: 0,
        visible: false,
        consoleResult: '',
        consoleval: '',
        tableDemo:
          `
          <table cellpadding='0' cellspacing="0" align="left">

    <!--<caption>表格的标题</caption>-->
    <colgroup>
        <col span="2" align="left" style="background:#ff19b0;" rules="cols">
        <col align="right" style="color:#0000FF;">
    </colgroup>

    <thead>
        <tr>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>内容333</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td colspan="3"  rowspan="3">内容1111</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td colspan="3">内容1111</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
        <tr>
            <td colspan="3">内容1111</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
            <td>内容</td>
        </tr>
    </tfoot>

</table>
          <table width="100%" border="1">
              <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Price</th>
                  <th>Price</th>
              </tr>
              <tr>
                  <td>3476896</td>
                  <td>My first HTML</td>
                  <td>My first HTML</td>
                  <td>My first HTML</td>
                  <td>$53</td>
              </tr>
          </table>
          <table cellpadding="0" cellspacing="0" rules="cols">
              <colgroup>
                  <col span="2" style="background-color:#66ff8b;color: #3dc033;">
                  <col style="background-color:yellow">
              </colgroup>
              <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Price</th>
              </tr>
              <tr>
                  <td>3476896</td>
                  <td>My first HTML</td>
                  <td>$53</td>
              </tr>
          </table>
          <table border=1 >
              <tr>
                  <td colspan="2">数据</td>
                  <td>数据</td>
              </tr>
              <tr>
                  <td>数据</td>
                  <td>数据</td>
                  <td>数据</td>
              </tr>
              <tr>
                  <td>数据</td>
                  <td>数据</td>
                  <td>数据</td>
              </tr>
          </table>
          <table border=1 >
              <tr>
                  <td rowspan="3">数据11</td>
                  <td>数据</td>
                  <td>数据</td>
                  <td>数据</td>
              </tr>
              <tr>
                  <td>数据</td>
                  <td>数据</td>
                  <td>数据</td>
              </tr>
              <tr>
                  <td>数据</td>
                  <td>数据</td>
                  <td>数据</td>
              </tr>
          </table>
          `,
        steps: [
          {
            title: 'video',
            content: `
            1、在vue-loader.conf.js中进行配置
              transformToRequire: {
                  video: ['src', 'poster'],
                  source: 'src',
                  img: 'src',
                  image: 'xlink:href',
                 audio:['src', 'poster']
                }
             2、在webpack.base.conf.js中进行loader的配置
             {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
              },
            `,
          }, {
            title: 'ant-design-vue的使用注意事项',
            content: `

             使用ant-design-vue导入模块时  须在  main.js中进行
             import { Button, DatePicker, Menu, Layout, Icon, Collapse, Steps, Message, Alert, Drawer, message  } from 'ant-design-vue';
              Vue.use(Button)
                .use(DatePicker)
                .use(Layout)
                .use(Menu)
                .use(Icon)
                .use(Collapse)
                .use(Steps)
                // .use(Message)
                .use(Alert)
                .use(Drawer)

                Vue.prototype.$message = message ;

                   跟'ant-design-vue.d.ts 文件'
                     如果暴漏出来的是类对象  即可  通过use 的方法
                     如果暴漏出来的是非类对象  通过Vue.prototype.$message = message 这种方法进行组件的注入
            `
          }, {
            title: 'Last',
            content: 'Last-content',
          }],
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
        activeKey: ['1']
      }
    },
    mounted() {
      var that = this;
      if(that.$route.query.params) {
        this.title = that.$route.query.params.title
      }else {
        this.title = that.$route.meta.titleText
      }

    },
    methods: {
      showDrawer() {
        this.visible = true
      },
      onClose() {
        this.visible = false
      },
      next() {
        this.current++
      },
      zhixing() {
        this.consoleResult = eval(this.consoleval);
      },
      prev() {
        this.current--
      },
      done() {
        this.$message.success('已经是最后一项了')
      }
    }
  }
</script>

<style scoped>

</style>
