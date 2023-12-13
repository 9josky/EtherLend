// pages/index.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the authentication token is present in localStorage
    const authToken = localStorage.getItem("authToken");

    // If the token is present, redirect to the dashboard
    if (authToken) {
      router.push("/Dashboard");
    } else {
      router.push("/Login");
    }
  }, [router]);

  // useEffect(() => {
  //   // Redirect to the login page when the component mounts

  // }, []);

  return null; // This component doesn't render anything, it just handles the redirection
};

export default Index;
