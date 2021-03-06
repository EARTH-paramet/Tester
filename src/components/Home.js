import "./Home.css";
import ListProduct from "./ListProduct";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [option, setOption] = useState("home");

  const Page = ()=>{
    if(option=="profile"){
      return(<button>OK</button>)
    }else if(option=="home"){
      return(
          <ListProduct/>
      )
    }else{
      return(<div></div>)
    }
  }
  console.log(option)
  return (
    <div className="wrapper">
      <div className="page">
        <div className="row">
          <div className="col-6">
            <h2>APP NAME</h2>
          </div>
          <div className="col-6 ">
            <h2 className="text-end">-</h2>
          </div>
        </div>
        <Search />
        {/* <div className="overflow-auto p-3" style={{ height: "75vh" }}> */}
          {/* <ListProduct /> */}
          <Page/>
        {/* </div> */}
      </div>
      <div className="bottom-appbar">
        <div className="tabs">
          <div className="tab tab--left">
            <div className="row">
              <div className="col-6">
                <div className="icons-bar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/*! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z" />
                  </svg>
                </div>
                <span onClick={()=>setOption("home")}>Home</span>
              </div>
              <div className="col-6">
                <div className="icons-bar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/*! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z" />
                  </svg>
                </div>
                <span onClick={()=>setOption("fridge")}>Fridge</span>
              </div>
            </div>
          </div>
          <div className="tab tab--fab">
            <div className="top">
              <NavLink to="/scan" className="btn-add-link">
                <div className="fab">+</div>
              </NavLink>
            </div>
          </div>
          <div className="tab tab--right">
            <div className="row">
              <div className="col-6">
                <div className="icons-bar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/*! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z" />
                  </svg>
                </div>
                <span onClick={()=>setOption("category")}>CATEGORY</span>
              </div>
              <div className="col-6">
                {/* <NavLink to="/profile" className="bar-link"> */}
                  <div className="icons-bar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      {/*! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                      <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z" />
                    </svg>
                  </div>
                  <span onClick={()=>setOption("profile")}>Profile</span>
                {/* </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
