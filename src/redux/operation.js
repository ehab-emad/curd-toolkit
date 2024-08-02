import { createSlice } from "@reduxjs/toolkit";
export const Operation=createSlice(
    {
        name:"operation by toolkit",
        initialState:{
          product: localStorage.getItem("product")
          ? JSON.parse(localStorage.getItem("product"))
          : [],
        },
        reducers:{
            addproduct:(state,action)=>{
              const fake={...action.payload}

                state.product.push(fake)
                localStorage.setItem("product", JSON.stringify(state.product));
            },
            deleteproduct:(state,action)=>{
 state.product=state.product.filter((i)=>i.id!==action.payload)
 localStorage.setItem("product", JSON.stringify(state.product));
              
            },
            
                updateUser(state, action) {
                  const { id, name, type } = action.payload;
                  const index = state.product.findIndex(user => user.id === id);

                  console.log(index)
                  if (index !== -1) {
                    state.product[index] = { ...state.product[index], name, type };
                  }
                localStorage.setItem("product", JSON.stringify(state.product));

                }
              
        }
    }
)
export  const{addproduct,deleteproduct,updateUser}=Operation.actions
export default Operation.reducer;