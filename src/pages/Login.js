import React, { useState, useEffect } from "react";
import { Web5 } from "@web5/api";
import Web3 from "web3";
import ConnectAndLog from "@/common/web5";
import { useRouter } from "next/router";

function Login() {
  const [userAddress, setUserAddress] = useState("");
  const [web5, setWeb5] = useState(null);
  const [did, setMyDid] = useState(null);
  const [userName, setUserName] = useState("");
  const [retrive, setRetrive] = useState([]);
  const [showLogin, setShowLogin] = useState(true);
  const router = useRouter();

  // console.log(retrive.data.username);
  console.log({ retrive });
  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect();
      setWeb5(web5);
      setMyDid(did);
      // const identityStore = Web5.getIdentityStore();
      // identityStore.clear();

      //   if (web5 && did) {
      //     await configureProtocol(web5, did);
      //     await fetchDings(web5, did);
      //   }
    };
    initWeb5();
    retriveUser();
  }, []);

  const createUser = async () => {
    if (web5) {
      const { record } = await web5.dwn.records.create({
        data: JSON.stringify({
          username: userName,
          wallet: userAddress,
        }),
        message: {
          schema: "http://some-schema-registry.org/lend",
          dataFormat: "application/json",
        },
      });

      const data = await record.data.json();
      const user = { record, data, id: record.id };
      console.log({ user });

      setUserName("");
      retriveUser();
    } else {
      console.log("none");
    }
  };
  if (!showLogin && userName && userAddress) {
    createUser();
  }

  const retriveUser = async () => {
    // const deleteResult = await web5.dwn.records.deleteAll();

    if (web5 && did) {
      let response = await web5.dwn.records.query({
        // from: did,
        message: {
          filter: {
            schema: "http://some-schema-registry.org/lend",
            dataFormat: "application/json",
          },
        },
      });
      console.log({ response });
      if (response.records && Array.isArray(response.records)) {
        for (let record of response.records) {
          const data = await record.data.json();
          const user = { record, data, id: record.id };
          console.log({ user });
          setRetrive(user);
          // todos.value.push(todo);
        }
      } else {
        console.log("Response.records is not available or not an array");
      }
    } else {
      console.error("web5 or did is not initialized");
    }
  };

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setUserName("");
    setUserAddress("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if MetaMask is installed
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAddress = accounts[0];

        // Now you have the user's Ethereum address
        console.log("Connected to MetaMask:", userAddress);

        // You can use web3 to interact with Ethereum
        const web3 = new Web3(window.ethereum);
        const balance = await web3.eth.getBalance(userAddress);

        console.log("Account balance:", web3.utils.fromWei(balance, "ether"));

        // Perform further actions with the user's address

        // Assuming the retrieved data is an array
        if (retrive.length > 0) {
          const userToLogin = retrive[0];

          // Check if the username and wallet match the retrieved data
          if (
            userToLogin.data.username === userName &&
            userToLogin.data.wallet === userAddress
          ) {
            // Redirect to the dashboard
            console.log("Before navigation");
            router.push("/Dashboard");
            console.log("After navigation");
          } else {
            // Handle the case where the username or wallet doesn't match
            console.log("Invalid username or wallet");
          }
        } else {
          // Handle the case where no user data is retrieved
          console.log("No user data found");
        }
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask is not installed");
    }
  };

  const connectToMetaMask = async (event) => {
    event.preventDefault();
    // Check if MetaMask is installed
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAddress = accounts[0];

        // Now you have the user's Ethereum address
        console.log("Connected to MetaMask:", userAddress);

        // You can use web3 to interact with Ethereum
        const web3 = new Web3(window.ethereum);
        const balance = await web3.eth.getBalance(userAddress);

        console.log("Account balance:", web3.utils.fromWei(balance, "ether"));

        // Perform further actions with the user's address
        setUserAddress(userAddress);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }

      // Handle account changes
      window.ethereum.on("accountsChanged", (accounts) => {
        const userAddress = accounts[0];
        console.log("Account changed:", userAddress);
        setUserAddress(userAddress);
        // Update your app accordingly
      });

      // Handle network changes
      window.ethereum.on("chainChanged", (chainId) => {
        console.log("Network changed:", chainId);
        // Update your app accordingly
      });
    } else {
      console.error("MetaMask is not installed");
    }
  };

  return (
    <>
      {showLogin ? (
        <div className="login shadow-lg signup">
          <div className="containers d-flex">
            <div className="right">
              <img src="/Assets/Frame.png" alt="Right Image" />
            </div>
            <div className="left">
              <div className="log-in">
                <div className="close" id="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="logo text-center">
                  <img sr="/Assets/logo.svg" alt="brand logo" />
                  <h3 className="text-center">
                    ETHER<span className="logo-text">LEND</span>
                  </h3>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      value={userName}
                      onChange={handleUsernameChange}
                    />
                    <h6 className="text-muted">Have an account?</h6>
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    onClick={connectToMetaMask}
                  >
                    Login
                  </button>
                </form>
                <div className="form-bottom pt-5 mt-5 text-end pb-5 me-5">
                  <a
                    className="sign-up"
                    onClick={toggleForm}
                    style={{ cursor: "pointer" }}
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="login shadow-lg">
          <div className="containers d-flex">
            <div className="right">
              <img src="/Assets/Frame.png" alt="Right Image" />
            </div>
            <div className="left">
              <div className="log-in">
                <div className="close" id="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="logo text-center mt-5">
                  <img sr="/Assets/logo.svg" alt="brand logo" />
                  <h3 className="text-center">
                    ETHER<span className="logo-text">LEND</span>
                  </h3>
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      value={userName}
                      onChange={handleUsernameChange}
                    />
                    <h6 className="text-muted">Don't have an account?</h6>
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    onClick={connectToMetaMask}
                  >
                    Sign Up
                  </button>
                </form>
                <div className="form-bottom pt-5 mt-5 text-end pb-5 me-5">
                  <a
                    className="sign-up"
                    onClick={() => toggleForm(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;