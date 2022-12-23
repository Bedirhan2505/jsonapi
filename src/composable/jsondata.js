import {ref} from 'vue'

const getir = () => {
        
        const contents = ref([]);
        const err = ref(null);
        const gitgetir  = async (uri) => {
            try {
                let data = await fetch(uri);
                contents.value = await data.json();

                if(!data.ok){
                    throw new Error("Erişim Sağlanamadı.")
                }
            } catch (error) {
                err.value = error.message                
            }
        };
        return {contents, err, gitgetir};
};
export default getir;
