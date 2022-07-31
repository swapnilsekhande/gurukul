import { useEffect, useState } from "react";
import EventAdd from "./EventAdd.js";
import { FetchURLSwapGET, FetchURLSwapDEL } from "./FetchURLSwap.js";

import { useLocation } from "react-router-dom";
const AdminBody = (props) => {

  const location = useLocation();
  const [oldfetchData, newfetchData] = useState([]);
    const MDFetchSwap = () => {
        fetch(FetchURLSwapGET).then(response => response.json()).then(data => newfetchData(data)).catch(err => console.log(err));

    }
    useEffect(MDFetchSwap,[]);
   


    

    const MDDelSwap = (sno) => {
      if(Boolean(sno)){const SwapMDObj ={
        'sno': sno
      }
      fetch(FetchURLSwapDEL,{
        method:'POST',
        headers:{
          'Content-Type' : 'aplication/json'
        },
        body : JSON.stringify(SwapMDObj)
      }).then(() =>  MDFetchSwap()).catch(err => console.log(err));
      
      
    
    }  
      
    }

    // const SwapArr = [ ...oldfetchData ]; 
    if(location.state.codeword === "84521578954152365475845856211254785"){ 
      return(<div className="container">
      <hr style={{ 'color':'red' }} />

<h4>Event Corner</h4>

<hr style={{ 'color':'red' }} />
<EventAdd />




<hr style={{ 'color':'red' }} />

<h4>Contact Table</h4>

<hr style={{ 'color':'red' }} />



    <table className="table table-bordered table-hover">
    <thead>
    <tr>
      <th scope="col">SNO</th>
      <th scope="col">Name</th>
      {/* <th scope="col"></th> */}
      <th scope="col">Email ID</th>
      <th scope="col">Message</th>
      <th scope="col">Date Time</th>

      <th scope="col">Action</th>



    </tr>
  </thead>
  <tbody>
    {oldfetchData.map(x => <tr>

<th scope="row">{x.sno}</th>
<td>{x.pname}</td>
<td>{x.pemail}</td>
<td>{x.pmess}</td>
<td>{x.pdate}</td>
<td><button type="button" onClick={ ()=> {
  MDDelSwap(x.sno);
  
}} className="btn btn-danger">Delete</button></td>
</tr> )}
    
    
  </tbody>
</table>

    </div>)
    
    }

}

export default AdminBody;