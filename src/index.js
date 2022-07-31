import React from "react"; 
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./About.js";
import Contact from "./Contact.js";
import Admin from "./Admin.js";
import AdminBody from "./AdminBody.js";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<App />}></Route>
            <Route index path="/about" element={<About />}></Route>
            <Route index path="/contact" element={<Contact />}></Route>
            <Route index path="*" element={<div className="container"><h1>Nothing on this Page <br></br> <Link className="btn" to="/">Visit Home</Link></h1></div>}></Route>
            <Route path="/admin/adminbody" element={<AdminBody />}>

            </Route>
            <Route index path="/admin" element={<Admin />}></Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)