<template>
  <div>

    <!--<a-layout id="components-layout-demo-side" style="min-height: 100vh">-->

      <!--<menu_side></menu_side>-->

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0;padding-left: 20px" >
          {{this.$route.query.param1}}
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-alert message="Warning text" banner />
      <h2>这是css 的内容</h2>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          welcome to wellsimtch's castle!
        </a-layout-footer>
      </a-layout>
    <!--</a-layout>-->
  </div>
</template>

<script>
    export default {
        name: "cssindex"
    }
</script>

<style scoped>

</style>
