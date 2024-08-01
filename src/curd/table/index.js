import { useDispatch, useSelector } from "react-redux"
import { deleteproduct } from "../../redux/operation"

export default function Table(){
    const dispatch=useDispatch()
const data=useSelector((state)=>state.oper.product)
return(

    <>
<table className="table table" style={{backgroundColor:"darkgrey",height:"200px",width:"60%"}}>
    <thead>
       <tr>
        <th>id</th>
        <th>name</th>
        <th>type</th>
        <th>operation</th>
       </tr>
    </thead>
   
       {data.map((i)=>{
      return(<>
       <tbody>
        <tr>
        <td>{i.id}</td>
        <td>{i.name}</td>
        <td>{i.type}</td>
        <td>
            <button className="btn btn-warning" onClick={()=>dispatch(deleteproduct(i.id))}>delete</button>
        </td>
       </tr>
       </tbody> </>)
       })}
   
</table>


    
    </>
)



}