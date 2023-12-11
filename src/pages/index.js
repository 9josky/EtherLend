// pages/index.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page when the component mounts
    router.push("/Login");
  }, [router]);

  return null; // This component doesn't render anything, it just handles the redirection
};

export default Index;
