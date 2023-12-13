import React from "react";
import { useRouter } from "next/router";
// import styles from "../styles/loan.css";

function Loan() {
  const router = useRouter();
  function goToPage(link) {
    router.push(link);
  }
  return (
    <div className="wrapper">
      <div className="bg-white">
        <div className="top d-flex justify-content-between mt-4">
          <div className="logo">
            <img src="/Assets/logo.svg" alt="brand logo" />
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
            <a
              // href="index.html"
              className="list-item pb-4 mt-4 d-flex"
              onClick={() => goToPage("/Dashboard")}
            >
              <img src="../Assets/dasboard.svg" className="me-2" />
              <h2 className="h4">Dashboard</h2>
            </a>
            <a
              // href="loan.html"
              className="pb-4 d-flex"
              onClick={() => goToPage("/Loan")}
            >
              <img src="../Assets/donate.svg" className="me-2" />
              <h2 className="h4">Loan</h2>
            </a>
            <a
              // href="loan-summary.html"
              className="list-item mb-5 d-flex"
              onClick={() => goToPage("/Profile")}
            >
              <img src="../Assets/user.svg" className="me-2" />
              <h2 className="h4">Profile</h2>
            </a>
          </div>
          <div className="container mt-5 bg-white">
            <img src="../Assets/amico.svg" className="ms-2 lasti" />
            <a href="#" className="d-flex pt-3">
              <img src="../Assets/logout.svg" className="me-3 last" />
              <h2 className="h4">Logout</h2>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="inputs mt-4">
          <input type="search" placeholder="Search in dashboard..." />
        </div>
        <p className="text-muted">Loan</p>
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g favour"
                  aria-label="First name"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="Surname">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g francis"
                  aria-label="Last name"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="type-of-coin">Coin</label>
            <input type="text" className="form-control" placeholder="Bitcoin" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g 124BTC"
              aria-label="amount"
            />
          </div>
          <div className="form-group">
            <label htmlFor="collateral">Collateral</label>
            <input
              type="text"
              className="form-control"
              placeholder="input collateral"
              aria-label="collateral"
            />
          </div>
          <div className="form-group">
            <label htmlFor="loan-term">Loan Term</label>
            <input
              type="text"
              className="form-control"
              placeholder="input collateral"
              aria-label="loan-term"
            />
          </div>
        </form>
        <div className="col-12">
          Terms and conditions
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              I have read the terms and conditions
            </label>
          </div>
        </div>
        <div className="submit text-center">
          {" "}
          <button className="btn mt-3 cloan">Collect Loan</button>
        </div>
        <h3 className="fw-bold">Take Note</h3>
        <ul>
          <li className="text-muted">
            pay loan on/or before promised date to avoid extra charges.
          </li>
          <li className="text-muted">
            Coins will be deposited after meta space confrimations.
          </li>
          <li className="text-muted">
            Until confirmations are made an equivalent amount of your assets
            will be temporarily unavailable for withdrawals.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Loan;
