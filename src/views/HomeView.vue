<template>
  <div>
    <div class="baslik">
    <h4>Vue 3 ile Json 'dan Data Çekme Uygulaması</h4>
    </div>
    <div class="formclass">
        <form>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="text" id="veri" v-model="uri" class="form-control" />
            <label class="form-label" for="veri">Veri Çekmek İstediğiniz Adresi Giriniz...</label>
          </div>
          <!-- Submit button -->
          <button class="btn btn-primary btn-block">Verileri Getir</button>
        </form>
    </div>
    <div v-for="d in datalar" :key="d.id">
      {{ d.title }}
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  data(){
    return{
      uri:""
    }
  },
  setup(){
    const uri = "https://jsonplaceholder.typicode.com/posts";
    const datalar = ref([]) ;
    const hata = ref(null);
    const handlesubmit= async () => {
      try { 
          let datagetir = await fetch(uri);
          datalar.value = await datagetir.json();
          if(!datagetir.ok){
            throw new Error("Verilere Erişilemedi")
          }
      } catch (error) {
        hata.value = error.message
      }
    };
    handlesubmit();
    return {handlesubmit,hata,datalar};
  }
}
</script>

<style>
.formclass{
  padding: 100px 500px;
  
}
.baslik{
  margin-top: 100px;
  text-align: center;
}
</style>