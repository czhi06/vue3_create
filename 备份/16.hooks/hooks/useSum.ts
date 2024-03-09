import {ref} from "vue";
export default function (){
let sum = ref(0)
function clickButton(){
  sum.value++
}
return {sum,clickButton}
}