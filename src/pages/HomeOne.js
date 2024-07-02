import React from "react";
import Header from "./Header";
import { AiFillCreditCard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  
  // Retrieve data from local storage
  const storedData = JSON.parse(localStorage.getItem("LazerUser"));
  console.log("Role", storedData.data[0].Role);
  
  // Extract role from stored data
  const role = storedData && storedData.length > 0 ? storedData.data[0].Role : storedData.data[0].Role;
  console.log("role", role);

  // Function to render cards based on role
  const renderCards = () => {
    return (
      <>
        <CardLink url="http://172.16.20.55:3001" title="Quotation" />
        <CardLink url="http://172.16.20.55:3009" title="Orders" />
        <CardLink
          url="http://172.16.20.55:3001"
          title="Customer Information"
          dataToStore={{
            token: storedData.accessToken,
            user: storedData,
          }}
        />
        <CardLink url="http://172.16.20.55:3006" title="Packing And Inv" />
        <CardLink url="http://172.16.20.55:3006" title="Material Setup" />
      </>
    );
  };

  // Component for rendering each card link
  const CardLink = ({ url, title, dataToStore }) => {
    const handleClick = (e) => {
      e.preventDefault();
      const newWindow = window.open(url);

      if (newWindow) {
        newWindow.addEventListener('load', () => {
          newWindow.postMessage(dataToStore, url);
        });
        console.log('Sending message:', dataToStore); // Debugging line
        newWindow.postMessage(dataToStore, 'http://172.16.20.55:3001');

      }
    };

    const handleCardClick = (url, dataToStore) => {
      return (e) => {
        e.preventDefault();
        const targetWindow = window.open(url);
        
        // Post the data to the opened window
        targetWindow.postMessage(dataToStore, 'http://172.16.20.55:3001');
      };
    };
    
    

    return (
      <a href={url} style={{ textDecoration: "none", color: "black" }} onClick={handleCardClick(url, dataToStore)}>
        <div className="dashboard-card">
          <div className="card-item">
            <AiFillCreditCard size={60} color="#283E81" />
            < span className="dashboard-link" style={{ textAlign: "center" }}>{title}</span>
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      <Header user={false} />
      <button
        className="button-style"
        style={{
          backgroundColor: "#283E81",
          borderRadius: "10px",
          marginLeft: "42px",
        }}
        onClick={() => navigate("../home")}
      >
        Previous Menu
      </button>
      <div className="card-container">
        {renderCards()}
      </div>
    </>
  );
}

export default Home;
