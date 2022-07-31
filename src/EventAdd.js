import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64"
import { FetchURLSwapPOSTIMG,FetchURLSwapGETIMG,FetchURLSwapDELIMG } from "./FetchURLSwap.js";
const EventAdd = () => {
    const [oldEvent, newEvent] = useState("");
    const [oldData, newData] = useState("");
    const [oldComp, newComp] = useState(<></>);
    const [oldfetchData, newfetchData] = useState([]);
    const [oldmsg, newmsg] = useState(<></>);
    const GetImageData = (data) => {
        // alert("Done");
        // console.log(data.base64);
        newData(data.base64);
        newmsg(<>uploaded :) </>)
    }
    const HandleSubmit = (event) => {
        event.preventDefault();
        if(Boolean(oldEvent) && Boolean(oldData)){
            const SwapInsertObj = {
                'ename': oldEvent,
                'edata':oldData
            }
            fetch(FetchURLSwapPOSTIMG,{
                method : 'POST',
                headers :{
                    'Content-Type':'aplication/json'
                },
                body: JSON.stringify(SwapInsertObj)
                
            }).then(response => {response.json(); ImgGetter()}).then(sdata => {console.log(sdata); newComp("Success")}).catch(err => console.log(err))

        }
        
    }

    const ImgGetter =()=>{
        fetch(FetchURLSwapGETIMG).then(response => response.json()).then(data => newfetchData(data));
    }
    useEffect(ImgGetter,[]);

    const EVdel =(sno)=>{
        if(Boolean(sno)){
            const SwapObj = {
                'sno':sno
            }
            fetch(FetchURLSwapDELIMG,{
                method:'POST',
                headers:{
                    'Content-Type':'aplication/json'
                },
                body:JSON.stringify(SwapObj)
            }).then(response => ImgGetter())
            
        }
    }
    const HandleEventName = (event) => {
        newEvent(event.target.value);
    }


    return(<>
        <form onSubmit={HandleSubmit}>
            <input type="text" className="form-control mb-4 px-0" placeholder="Enter Event" onChange={HandleEventName} />
            <FileBase64 multiple={false}  onClick={()=>{newmsg(<>uploading...</>)}} className="form-control mb-4 px-0" onDone={(data)=>{GetImageData(data)}}  />{oldmsg}
            <button type="submit" className="btn btn-primary">Submit Event</button>
            <button type="reset" onClick={()=>{newComp(<></>)}} className="btn btn-primary"> Reset Event</button>
            <div style={{'color':'red'}}> {oldComp}</div>
            

        </form>
            <img src={oldData} style={{ 'height':'100px', 'width':'100px' }} alt="loading" />

            <hr style={{ 'color':'red' }} />

<h4>Event Table</h4>

<hr style={{ 'color':'red' }} />

<table className="table table-bordered table-hover">
    <thead>
    <tr>
      <th scope="col">SNO</th>
      <th scope="col">Event Name</th>
      {/* <th scope="col"></th> */}
      <th scope="col">Image</th>
      <th scope="col">Date Time</th>
      <th scope="col">Action</th>



    </tr>
  </thead>
  <tbody>
    {oldfetchData.map(x => <tr>

<th scope="row">{x.sno}</th>
<td>{x.ename}</td>
<td><img src={x.edata} alt="loadingimg.." style={{ 'height':'100px','width':'100px' }} /></td>
<td>{x.edate}</td>
<td><button type="button" onClick={ ()=> {
  EVdel(x.sno);
  
}} className="btn btn-danger">Delete</button></td>
</tr> )}
    
    
  </tbody>
</table>



    </>)
}
export default EventAdd;