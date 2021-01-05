<template>
  <div>
    Index page
  </div>
</template>

<script>
  import IndexModel from '../models/index';
  const indexModel = new IndexModel();
  export default {
    name:'IndexModel',
    async mounted (){
      const data = await indexModel.getCourseDatas();
      console.info(data);
    }
  }
</script>

<style lang="scss" scoped="scoped">
  div{
    color: red;
  }
</style>
