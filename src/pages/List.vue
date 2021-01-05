<template>
  <div>
    List page
  </div>
</template>

<script>
  import ListModel from 'models/list';
  const listModel = new ListModel();
  export default{
    name:'ListPage',
    async mounted (){
      const fieldData = await ListModel.getCourseFields(),
      courseData = await ListModel.getCourses('all');
      console.info(fieldData,courseData);
    }
  }

</script>

<style lang="scss" scoped="scoped">
  div{
    color: green;
  }
</style>
