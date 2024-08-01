
import './App.css';
import Mypage from './curd/page/mypage';
import Table from './curd/table';

function App() {
  return (
    <div className="d-flex justify-content-between " style={{height:"100vh",backgroundColor:"green"}}>
      <Mypage/>
      <Table/>
    </div>
  );
}

export default App;
