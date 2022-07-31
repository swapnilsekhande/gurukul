
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Admin = () => {
    const [oldusername, newusername] = useState("");
    const [oldpassword, newpassword] = useState("");
    const [oldBody, newBody] = useState(<></>);
    const navigate = useNavigate();

    const HandleForm =(event) => {
        event.preventDefault();
        if(Boolean(oldusername) && Boolean(oldpassword)) {
            if(oldusername === "swapnilsekhande@gmail.com" && oldpassword === "MD") {
                const codeword = "84521578954152365475845856211254785";
                navigate('adminbody', {replace:true, state:{codeword:codeword}})
                newusername("");
                newpassword("");
            } else {
                newBody(<div className="container" style={{'color':'red'}}>Invalid Credentials</div>)
            }
        }else{
            newBody(<div className="container" style={{'color':'red'}}>Empty Credentials</div>)

        }

    }
    const HandleUsername = (event) => {
        newusername(event.target.value);

    }

    const HandlePassword = (event) => {
        newpassword(event.target.value);
    }

return(<>
<form className="container" onSubmit={HandleForm}>
        <input onChange={HandleUsername} className="form-control mb-4 px-0" placeholder="Username" value={oldusername} />
        <input onChange={HandlePassword} className="form-control mb-4 px-0" placeholder="Password" value={oldpassword} /> 
        <button className="btn" type="submit" >Login</button>
        </form>
        {oldBody}
</>)
}

export default Admin;