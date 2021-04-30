import { api } from './api.service'

const service = {
   async getCardList(url){
        return await api.get(`/cardinfo.php?language=pt&archetype=${url}`)
    },

    async getCard(id){
        return await api.get(`/cardinfo.php?language=pt&id=${id}`)
    }
}
export default service