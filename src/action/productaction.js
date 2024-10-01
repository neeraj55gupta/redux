
import { getdata } from "../reducer/productreducer";
import axios from "axios"
export const asyncdata = () =>async(dispatch)=>{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res.data)
        dispatch(getdata(res.data))

    }
    catch(e){
    console.log(e)
}
}