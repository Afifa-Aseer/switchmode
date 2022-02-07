import React from "react";
import logo from "../img/logo.png"
import img from "../img/img.png"
import beimg from "../img/beimg.png"
import beimg2 from "../img/beimg2.png"


const document=()=>{
    return (
      <div className="body">
           <body className="main-layout">
      {/* <!-- header --> */}

      <header style={{display:"flex",justifyContent:"space-around"}}>
                              <div className="logo">
                                 <a href="index.html"><img src={logo} alt="#" /></a>
                              </div>
                              <nav className="main-menu" >
                                 <ul className="menu-area-main" style={{display:"flex",justifyContent:"space-evenly",listStyle:"none"}}>
                                    <li className="active"> <a href="index.html">Home</a> </li>
                                    <li> <a href="#jewellery">jewellery</a> </li>
                                    <li> <a href="#contact">Contact</a> </li>
                                    <li> <a href="#clients">Our Clients</a> </li>
                                 </ul>
                              </nav>
            {/* <!-- end header inner --> */}
            {/* <!-- end header --> */}
            </header>
            <br />
            <section className="slider_section">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="text-img">
                              <figure><img src={img} style={{width:"300px"}} /></figure>
                           </div>
                        </div>
         </section>
         
      {/* <!-- Best  --> */}
      <div id="jewellery" className="Best" />
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Best jewellery</h2>
                     <p> a reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="best_main">
                     <div className="row d_flex">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="best_text">
                              <p>A reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div className="best_img">
                              <h4>Best Design Of Ring</h4>
                              <figure><img src={beimg} alt="" /></figure>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="best_main">
                     <div className="row d_flex">
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div className="best_img croos_rt">
                              <h4>Best Design Of Ring</h4>
                              <figure><img src={beimg2} /></figure>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="best_text flot_left">
                              <p>A reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="best_main pa_bot">
                     <div className="row d_flex">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div className="best_text">
                              <p>A reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end Best --> */}
     
      {/* <!-- end clients --> */}
      {/* <!--  footer --> */}
    
   </body>

      </div>
    )
}

export default document;