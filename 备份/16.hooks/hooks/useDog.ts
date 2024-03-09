import { reactive} from "vue";
import axios from 'axios'
export default function (){
let dogList = reactive(['https://images.dog.ceo//breeds//chihuahua//n02085620_1152.jpg'])
function getDog(){
  axios.get('https://dog.ceo/api/breeds/image/random').then(res=>{
    dogList.push(res.data.message)
  })
}
return {dogList,getDog}
}