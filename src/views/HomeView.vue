<template>
  <div>
    <div v-for="content in contents" :key="content.id">
      {{ content.title }}
    </div>
    <div v-if="err">
      {{ err }}
    </div>
  </div>
</template>

<script>
import getir from '../composable/jsondata';
export default {
  setup(){
    const { contents, err, gitgetir} = getir();
    gitgetir();
    return {contents,err};
  }    
}
</script>
