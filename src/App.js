import "./components/style.css";
import head1 from "./images/head1.jpg";
import head2 from "./images/head2.jpg";
import nalco from "./images/nalco.png";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx"
import Flash from "./components/Flash.jsx"
import Body from "./components/Body.jsx"
import Navbar1 from "./components/hindi/Navbar1"
import Body1 from "./components/hindi/Body1"
import Footer1 from "./components/hindi/Footer1"
import Footer from "./components/Footer.jsx"
import {useNavigate } from "react-router-dom";
import { Routes,Route} from "react-router-dom";
function App() {
  const navigate=useNavigate();
  const [bit,setbit]=useState(1)
  function callback(value){
    setbit(value);
  }
  useEffect(()=>{
    if(bit===1){
      navigate('/')
    }
    else{
      navigate('/hindi')
    }
  },[bit]);
  return (
    <>
    <Routes>
      <Route exact path='/' element={
        <>
        <div className="contain">
        <div className="box">
          <div id="heading">
            <div className="head1">
              <img id="headdesign1" src={head1} alt="" />
              <span id="headdetails">
                <div>
                  <span className="headtext">
                    नाल्को
                  </span>
                  <img
                    id="nalco"
                    src={nalco}
                    alt=""
                  />
                  <span className="headtext">
                    Nalco
                  </span>
                </div>
                <span id="text">The Industrial Konark</span>
              </span>
              <img id="headdesign2" src={head2} alt="" />
            </div>
            <div></div>
          </div>
         <Navbar handle={callback}/>
         <Flash />
          <Body />
        </div>
      </div>
      <Footer />
        </>
      }></Route>
      <Route exact path='/hindi' element={
        <>
        <div className="contain">
        <div className="box">
          <div id="heading">
            <div className="head1">
              <img id="headdesign1" src={head1} alt="" />
              <span id="headdetails">
                <div>
                  <span className="headtext">
                    नाल्को
                  </span>
                  <img
                    id="nalco"
                    src={nalco}
                    alt=""
                  />
                  <span className="headtext">
                  नाल्को
                  </span>
                </div>
                <span id="text">The Industrial Konark</span>
              </span>
              <img id="headdesign2" src={head2} alt="" />
            </div>
            <div></div>
          </div>
         <Navbar1 handle={callback}/>
         <Flash />
          <Body1 />
        </div>
      </div>
      <Footer1 />
        </>
      }></Route>
    </Routes>
      {/* <div className="contain">
        <div className="box">
          <div id="heading">
            <div className="head1">
              <img id="headdesign1" src={head1} alt="" />
              <span id="headdetails">
                <div>
                  <span className="headtext">
                    नाल्को
                  </span>
                  <img
                    id="nalco"
                    src={nalco}
                    alt=""
                  />
                  <span className="headtext">
                    Nalco
                  </span>
                </div>
                <span id="text">The Industrial Konark</span>
              </span>
              <img id="headdesign2" src={head2} alt="" />
            </div>
            <div></div>
          </div>
         <Navbar handle={callback}/>
         <Flash />
          <Body />
        </div>
      </div> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
