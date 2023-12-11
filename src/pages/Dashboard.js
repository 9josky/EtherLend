import React from "react";

function Dashboard(){
  return (
    <div className="wrapper">
      <aside className="bg-white">
        <div className="top d-flex justify-content-between mt-4">
          <div className="logo">
            <img src="../Assets/logo.svg" alt="brand logo" />
            <h3>
              Ether<span className="logot">Lend</span>
            </h3>
          </div>
          <div className="close" id="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="sidebar">
          <div className="top-header">
            <h3 className="ms-2">loan balance</h3>
            <h4 className="ms-3 mt-2">32,780,900.00 Usd</h4>
            <hr className="ms-2 me-2" />
          </div>
          <div className="container">
            <div className="aside-loans">
              <small>Approved Loan</small>
              <small>16,700.00 USD</small>
            </div>
            <div className="aside-loans">
              <small>Pending Loan</small>
              <small>-------- USD</small>
            </div>
          </div>
          <div className="d-grid gap-2 mt-4">
            <button className="btn">Pay Loan</button>
            <button className="btn button">Collect Loan</button>
          </div>
          <div className="border mt-5 p-3">
            <a href="index.html" className="list-item pb-4 mt-4 d-flex">
              <img
                src="../Assets/dasboard.svg"
                className="me-2"
                alt="Dashboard"
              />
              <h2 className="h4">Dashboard</h2>
            </a>
            <a href="loan.html" className="pb-4 d-flex">
              <img src="../Assets/donate.svg" className="me-2" alt="Loan" />
              <h2 className="h4">Loan</h2>
            </a>
            <a href="loan-summary.html" className="list-item mb-5 d-flex">
              <img src="../Assets/user.svg" className="me-2" alt="Profile" />
              <h2 className="h4">Profile</h2>
            </a>
          </div>
          <div className="container mt-5 bg-white">
            <img src="../Assets/amico.svg" className="ms-2 lasti" alt="Amico" />
            <a href="#" className="d-flex pt-3">
              <img
                src="../Assets/logout.svg"
                className="me-3 last"
                alt="Logout"
              />
              <h2 className="h4">Logout</h2>
            </a>
          </div>
        </div>
      </aside>
      <main>
        <div className="inputs mt-4">
          <input type="search" placeholder="Search in dashboard..." />
        </div>
        <div className="container welcome-text">
          <h1>welcome !</h1>
          <p className="fw-bold">Here is a summary of your account. Have fun</p>
        </div>
        <div className="coin-list d-flex">
          <div className="coin col">
            <img src="../Assets/bitcoin.png" alt="Bitcoin" />
            <div>
              <p>Active Loan</p>
              <p>$351,251.02</p>
            </div>
          </div>
          <div className="coin col">
            <img src="../Assets/tether.png" alt="Tether" />
            <div>
              <p>$000</p>
              <p>Tether</p>
            </div>
          </div>
          <div className="coin col">
            <img src="../Assets/ethereum.png" alt="Ethereum" />
            <div>
              <p>&000</p>
              <p>Ethereum</p>
            </div>
          </div>
        </div>
      </main>
      <div className="right mt-4">
              <div className="top d-flex justify-content-end">
                <div className="menu">
                  <a href="" id="menu-btn"><i class="fa-solid fa-bars"></i></a>
                </div>
                <div className="profile d-flex">
                    <p><a href=""><img src="../Assets/profile.svg" class="me-3"/></a></p>
                    <p><a href=""><img src="../Assets/notification.svg"/></a></p>
                </div>
              </div>
              
              <div className="loan shadow-lg">
                <div className="">
                  <h3 className="text-center">loan Details</h3>
                  <h4 className="ms-3 mt-4">Loan Balance</h4>
                  <h4 className="ms-3">32,780,900,00 USD</h4>
                  <hr className="ms-2 me-2"/>
                  <p className="ms-3 fw-bold">Coins Borrowed</p>
              </div>
              <div className="container">
                  <div className="d-flex justify-content-between pb-0">
                    <img src="../Assets/btc.png" className="image"/>
                    <small className="fw-bold">Bitcoin <br/><small className="small-text">Interest $20</small> </small>
                    <small className="text-muted">  $36,081.00</small>
                    <small className="text-danger"> deadline</small>
                  </div>
                  <div className="days">
                    <p className="mt-2">Days Remaining Till Deadline</p>
                    <p className="days text-center fw-bold">30<sub>Days</sub></p>
                  </div> 
              </div>
              <div className="d-grid gap-2 mt-4">
                <small>Extra fee 0f <span className="text-danger">$20.15</span> if loan is not paid on/Before deadline</small>
                  <button className="btn">Pay Loan</button>
                </div>
              </div>
              <div className="bg-white mt-5 Portfolio">
                <div className="mx-3">
                    <div className="fw-bold ms-3 mt-3">My Portfolio
            <div class="d-flex justify-content-between ms-2 me-2 pt-3 pb-3">
                <p> <img src="../Assets/btc.png" className="image"/></p>
                 <small>Bitcoin<br/> <small className="small-text">+2.6%</small></small>
                 <small className="text-muted">  $36,081.00</small>
                 <img src="../Assets/Vector3.svg"/>
           </div>
           <div class="d-flex justify-content-between ms-2 me-2 pt-3 pb-3">
            <p> <img src="../Assets/ethereum.png" className="image"/></p>
             <small>Ethereum<br/> <small className="small-text">+2.6%</small></small>
             <small class="text-muted">  $36,081.00</small>
             <img src="../Assets/Vector.svg"/>
       </div>
           <div className="d-flex justify-content-between ms-2 me-2 pt-3 pb-3">
            <p> <img src="../Assets/icon.svg" className="image"/></p>
             <small>Cadarno<br/> <small class="text-danger">-3.6%</small></small>
             <small class="text-muted">  $36,081.00</small>
             <img src="../Assets/Vector2.svg"/>
           </div>
    </div>
  </div>
  </div>
    <div className="bg-white mt-5">
      <div className=" mx-2">
          <div className="ms-3 mt-3">AI Tips
              <ul className="AI-link ms-auto pb-5">
                  <li className="fw-bold">follow news and market analysis to understand what events may affect asset prices</li>
                  <li className="fw-bold">pay back loan before due date, to</li>
              </ul>
              </div>
            </div>
            </div>
            </div>
            </div>
    );
}

export default Dashboard;

