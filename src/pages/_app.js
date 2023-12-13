// pages/_app.js
import "../styles/globals.css";
import "../styles/loan-summary.css";
// import "../styles/loan.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Web5Provider } from "@/component/web5";
function App({ Component, pageProps }) {
  // const { user } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   // Redirect based on authentication status
  //   if (user) {
  //     // User is logged in, redirect to the dashboard
  //     router.push("/Dashboard");
  //   } else {
  //     // User is not logged in, redirect to the login page
  //     router.push("/Login");
  //   }
  // }, [user, router]);

  return <Component {...pageProps} />;
}

export default function AppWithAuthProvider(props) {
  return (
    <Web5Provider>
      <App {...props} />
    </Web5Provider>
  );
}
