
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mypage from './curd/page/mypage';
import Table from './curd/table';
import Edit from './curd/page/editpage/editpage';

function App() {
  return (
    <div className="d-flex justify-content-center " style={{height:"100vh",backgroundColor:"white" ,alignItems:"center"}}>

      <BrowserRouter>
      <Routes>
<Route path='/' element={   <Table/>}/>
<Route path='/create' element={   <Mypage/>}/>
<Route path='/edit/:id' element={   <Edit/>}/>

      </Routes>
      </BrowserRouter>
   
   
    </div>
  );
}

export default App;
