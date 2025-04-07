import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table_comp from "./table";
import Container from "react-bootstrap/Container";
import Popup from "./popup";
import { useEffect, useState } from "react";


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    if(rowData){
      setTempData(rowData)
    } else{
      setTempData({
        name:null,
        email:null,
        location:null,
        phoneno:null,
        qualification:null,
      })

    }
    setShow(true)
    
  };

  const [Data,setData] = useState(false)

  const [tempData,setTempData] = useState({}) // a state used to update the data 
  console.log(Data,"app")
  return (
    <>
      <Container fluid className="table-container">
        <Popup popShow = {show} popClose = {handleClose} setFieldData = {setTempData} fieldData = {tempData} updateData = {Data} setUpdateData = {setData}/>
        <Table_comp popOpen = {handleShow} updateData = {Data} setUpdateData = {setData}  />
      </Container>
    </>
  );
}

export default App;
