import React from "react";

function Profile() {
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
          <div className="coin col bars">
            <img src="../Assets/Bars1.svg" alt="Bars" />
            <div>
              <p>Active Loan</p>
              <p>$351,251.02</p>
            </div>
          </div>
          <div className="coin col bars">
            <img src="../Assets/Bar3.svg" alt="bars" />
            <div>
              <p>Amount Paid</p>
              <p>$000</p>
            </div>
          </div>
          <div className="coin col bars">
            <img src="../Assets/Bars2.svg" alt="bars" />
            <div>
              <p>Total Interest Balance</p>
              <p>&000</p>
            </div>
          </div>
        </div>
      </main>
      <div className="right mt-4">
        <div className="top d-flex justify-content-end">
          <div className="menu">
            <a href="" id="menu-btn">
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>
          <div className="profile d-flex">
            <p>
              <a href="">
                <img
                  src="../Assets/profile.svg"
                  className="me-3"
                  alt="Profile"
                />
              </a>
            </p>
            <p>
              <a href="">
                <img src="../Assets/notification.svg" alt="Notification" />
              </a>
            </p>
          </div>
        </div>
        <div className="loan-body">
          <div>
            <p className="pt-2 text-center">Trader Profile</p>
            <img
              src="../Assets/KimSeonHo.png"
              className="profile"
              alt="Trader Profile"
            />
            <p className="text-center fw-bold">Han Ji Pyeong</p>
            <input
              type="text"
              placeholder="change username"
              className="form-control ms-5"
            />
            <input
              type="text"
              placeholder="ID : 6444564795645346"
              className="form-control ms-5"
            />
          </div>
          <div className="d-flex button justify-content-between my-5">
            <p className="ps-3 my-3">Loan Status:</p>
            <p className="pe-3 my-3">Active</p>
          </div>
          <div className="ms-5 me-5">
            <p className="fw-bold">Assets</p>
            <div className="d-flex justify-content-between">
              <p className="assets-c">Bitcoin</p>
              <p>
                23.5 <span className="assets-c">BTC</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="assets-c">Ethereum</p>
              <p>
                190.45 <span className="assets-c">ETH</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="assets-c">Doge</p>
              <p>
                239,500<span className="assets-c"> DOGE</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="assets-c">Ripple</p>
              <p>
                65,100 <span className="assets-c">XRP</span>
              </p>
            </div>
          </div>
          <div className="ms-5 me-5 py-5">
            <p className="fw-bold">Notifications</p>
            <div className="notification">
              <div className="pb-3 d-grid">
                <small className="fw-bold">Loan will be due in 30days</small>
                <small className="text-muted">59minutes ago</small>
              </div>
              <div className="pb-3 d-grid">
                <small className="fw-bold">
                  Interest of 1.5usd added to outstanding loan
                </small>
                <small className="text-muted">5days ago</small>
              </div>
              <div className="pb-3 d-grid">
                <small className="fw-bold">Live market Updated</small>
                <small className="text-muted">30minutes ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
