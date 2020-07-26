import React ,{useState} from 'react';
import banner from './img/banner.jpg';
import laptop2 from './img/laptop2.jpg';
import repair from './img/repair.jpg';
import Intel from './img/Intel.png';
import dell from './img/dell.jpg';
import hp from './img/hp.png';
import tally from './img/tally.png';
import Modal from 'react-modal';
import custom from './img/custom.jpg';
import './contact.php';
import './RightNav';

function Home() {
  const [modalIsOpen, setModalIsOpen]=useState(false)
  return (

    <>
    
    
<Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}
style={{
  overlay:{
    backgroundColor:'grey'
  },
  content:{
    color: 'orange'
  }
}}>
<h2>Services we provide</h2>
<p>
<ul>Deals in following : 
<li>Sales of CCTV CAMERA Laptop,Desktop,Printer,OnlineUPS,Batteries&other Hardware Pheriperals</li>
<li>LAN, Wireless LAN, Internet sharing, LAN cabling.</li>
<li>Operating system support, drivers, application software.</li>
<li>LAPTOP,DESKTOP & PRINTER REPAIR</li>
<li> Deals in Sale & Support  of TALLY PACKAGE</li>
We provide annual maintenance services for desktop workstations, servers &networks.
<li>E-tech Systems offers per call services as per customer’s requirement in very nominal rates with response time of 2hrs after receiving the complaint.</li></ul></p>
<button className="button primary" style={{color:"white"}} onClick={()=>setModalIsOpen(false)}>Close </button>


</Modal>


      <div className="bg" >
        <div className="banner">
          <div className="banner-img2">
            <img src={banner} alt="banner"></img>

          </div>
          <div className="banner-title">
            <h1>E-TechSystem</h1>
            <h3>We get the job done right</h3>
          </div>
        </div>

      </div>


      <section id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="feature-box">
                <div className="feature-left">
                  <h3>We deal in :</h3>
                  <ul className="shift">
                    <li>BRANDED PC</li>
                    <li>NOTEBOOK</li>
                    <li>WORKSTATION</li>
                    <li>SECURITY PRODUCTS</li>
                    <li>PRINTER AND SCANNER</li>
                    <li>LARGE FORMAT PRINTER</li>
                    <li>AMC (PCs & Printers)</li>
                    <li>CCTV Installation</li>
                    <li>NETWORKING PRODUCTS</li>
                    <li>POST WARRANTY SERVICE SALES</li>
                    <li>MAINTENANCE OF NETWORK SITE</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      <section className="about" id="about">

        <div className="backcolor">

          <div className="txtcol">

            <h1 className="abouttxt">What we're All About</h1>
            <p className="info">E-techsystem was established in 2000 with one mission: to bring a reliable, high quality Computer Repair Service. Our passion for excellence is what inspired us to open up our business, and continues to drive us to this day. All our repairs are completed with meticulous detail, resulting in a product that is as good as new.</p>
          </div>
        </div>

      </section>

      <section id="client-section">
        <h1 className="h-primary center" style={{ textAlign: "center", paddingTop:"12px"}} >Brands</h1>
        <div id="clients">
            <div className="client-item">
                <img src={Intel} alt="Our Client"/>
            </div>
            <div className="client-item">
                <img src={dell} alt="Our Client"/>
            </div>
          
            <div className="client-item">
                <img src={hp} alt="Our Client"/>
            </div>
            <div className="client-item">
                <img src={tally} alt="Our Client"/>
            </div>
        </div>

    </section>



      <section id="facilities">
        <div className="container">
          <div className="title">
            <h1 id="services1">Our Services</h1>
            <p>Quality Guaranteed</p>
          </div>
          <div className="row ">

            <div className="col-md-4 ">
              <div className="card ">
                <img className="card-img-top" src={repair} alt="Card image cap" />
                <div class="card-body" style={{ backgroundColor: "#313333" }}>
                  <h5 class="card-title" style={{ color: "white" }}>Hardware Repair</h5>
                </div>
              </div>

            </div>

            <div className="col-md-4">
              <div className="card " >
                <img className="card-img-top" src={laptop2} alt="Card image cap" />
                <div class="card-body" style={{ backgroundColor: "#FFE0E0" }}>
                  <h5 class="card-title">Laptop Repair</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card " >
                <img className="card-img-top" src={custom} alt="Card image cap" onClick={()=>setModalIsOpen(true)}/>
                <div className="card-body" style={{ backgroundColor: "#d4d9cc" }}>
                  <h5 className="card-title">Other Services <p style={{fontSize:"10px",color:"blue"}}>(click on image to know more)</p></h5>
                </div>
              </div>
            </div>
          </div>
        </div>




      </section>


      




     <form action="/contact.php" id="contact1">
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Any query feel free to contact us. Kindly provide your phone number for us to reach you.</p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" name="name" id="name" placeholder="Name" type="text" />
                </div>
                <div className="p-2 w-1/2">
                  <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" name="email" id="email" placeholder="Email" type="email" />
                </div>
                <div className="p-2 w-full">
                  <textarea className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" name="text" id="text" placeholder="Message"></textarea>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <p className="text-indigo-500">ajay@e-techsystem.com</p>
                  <p className="leading-normal my-5">K-86 (Basement) Kalkaji, New Delhi
                    </p>
                  <span className="inline-flex">
                    <p className="text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </p>
                    <p className="ml-4 text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </p>
                    <p className="ml-4 text-gray-500">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </p>
                    <p className="ml-4 text-gray-500">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </p>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </section>
              </form>


              <footer class="background">
    <p class="text-footer">
       Copyright &copy;  www.e-techsystem.com  2027 - All rigths reserved 
    </p>
</footer>
    </>
  );
}


export default Home;