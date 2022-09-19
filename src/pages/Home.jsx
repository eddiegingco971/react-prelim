import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="container">
        <Navbar/>
        <Form />
        <Footer/>
    </div>
  );
}

export default Home;
