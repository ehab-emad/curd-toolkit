import { createSlice } from "@reduxjs/toolkit";
export const Operation=createSlice(
    {
        name:"operation by toolkit",
        initialState:{product:[],pro:[]},
        reducers:{
            addproduct:(state,action)=>{

                state.product.push(action.payload)
            },
            deleteproduct:(state,action)=>{
 state.product=state.product.filter((i)=>i.id!==action.payload)
              
            }
        }
    }
)
export  const{addproduct,deleteproduct,editproduct}=Operation.actions
export default Operation.reducer;