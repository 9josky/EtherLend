// pages/_app.js
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import { AuthProvider, useAuth } from "@/common/AuthProvider";

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
    // <AuthProvider>
    <App {...props} />
    // </AuthProvider>
  );
}
