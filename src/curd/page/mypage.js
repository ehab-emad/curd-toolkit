// import { Button } from 'bootstrap'
import { Button } from 'react-bootstrap'
import './mypagestyle.css'
import { addproduct } from '../../redux/operation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
export default function Mypage(){
const[name,nameset]=useState("")
const[type,typeset]=useState("")
const data=useSelector((state)=>state.oper.product)

const dispatch =useDispatch()
return(

    <>
    
    <form  style={{width:"630px",height:"100vh",backgroundColor:"#333",padding:"30px"}}>
      <div className='d-flex justify-content-between' style={{padding:"20px"}}> <div> <label style={{color:"green",marginRight:"10px",fontSize:"20px"}} >name</label>
       <input style={{border:"1px solid #777",borderRadius:"10px",textAlign:"center"}} value={name} onChange={(e)=>nameset(e.target.value)} className="py-1"   type="text" placeholder="enter product name"/></div>
<div><label style={{color:"green",marginRight:"10px" ,fontSize:"20px"}} >type</label>
<input    style={{border:"1px solid #777",borderRadius:"10px",textAlign:"center"}}  onChange={(e)=>typeset(e.target.value)}   value={type} className="py-1" type="text" placeholder="enter product type"/></div></div>

<Button onClick={()=>{if(name==="" || type==="")
  {
    Swal.fire(
        'Error!',
        'Your fields are empty .',

      );
  }
  else{  dispatch(addproduct({name:name,type:type,id:data.length+1}),
  nameset(""),
     typeset("")
     )}
   
}} className="btn btn-info px-4 my-4 mx-5">add</Button>


    </form>
    
    
    </>
)



}