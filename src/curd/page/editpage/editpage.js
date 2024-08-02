import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../../../redux/operation'
export default function Edit(){
    const {id}=useParams()
    //useparms save url to id from the product you enterd
//جربت هنا فلتر منفعش عشان دي مجموعة جو مصفوفه 
//عشان كدا استخدمت find 
//كمان استخدمنا parseint عشان نحول to number


const data=useSelector((state)=>state.oper.product)
const product=data.find(user => user.id=== parseInt(id))
const [uname,setname]=useState(product.name)
const [utype,settype]=useState(product.type)
const[name,nameset]=useState(uname)
const[type,typeset]=useState(utype)
const navigate=useNavigate()

const dispatch =useDispatch()

return(

    <>
    {console.log(product)}
    {console.log(id)}
    
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
  else{  dispatch(updateUser({name:name,type:type,id:parseInt(id)})
  ,
  navigate('/')
     )}
   
}} className="btn btn-info px-4 my-4 mx-5">edit</Button>


    </form>
    
    
    </>
)



}