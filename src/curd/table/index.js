import { useDispatch, useSelector } from "react-redux"
import { deleteproduct } from "../../redux/operation"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Table(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [value,setvalue]=useState(true)
const data=useSelector((state)=>state.oper.product)
return(

  <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
    <h1 className="text-center" style={{color:"gold",margin:"20px"}}>Your products</h1>
  <div style={{margin:"20px"}} > <Link style={{textDecorationLine:"none"}} to={'/create'}> <button className="btn btn-info">Create product</button></Link></div>
<table className="table" style={{backgroundColor:"darkgrey",height:"200px",width:"100%"}}>
    <thead>
       <tr>
        <th>id</th>
        <th>name</th>
        <th>type</th>
        <th>operation</th>
       </tr>
    </thead>
    <tbody>
       {data.map((i)=>{
      return(<>
     
        <tr>
           
        <td>{i.id}</td>
        <td>{i.name}</td>
        <td>{i.type}</td>
        <td >
            <button className="btn btn-warning mx-5"  onClick={()=>dispatch(deleteproduct(i.id))}>delete</button>
            <button className="btn btn-warning" onClick={()=>navigate('/edit/'+i.id)}>edit</button>
        </td>
       </tr>
     </>)
       })}
          </tbody>
   
</table>


    
    </div>
)



}