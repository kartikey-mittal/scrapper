import React, { useEffect, useState } from "react";
import axios from "axios";

const UserLogin1 = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [formattedAddress, setFormattedAddress] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    // Function to fetch geolocation coordinates on component mount
    const fetchCoordinates = () => {
      const options = {
        enableHighAccuracy: true,
        timeout: 10000, // Increase timeout to 10 seconds
        maximumAge: 0,
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude.toFixed(7);
            const lng = position.coords.longitude.toFixed(7);
            setLatitude(lat);
            setLongitude(lng);

            // Fetch address details based on coordinates
            fetchAddressDetails(lat, lng);
          },
          (error) => {
            console.error("Error fetching coordinates:", error.message);
            if (error.code === error.PERMISSION_DENIED) {
              alert("Location access denied. Please allow location access.");
            } else {
              alert(
                "Error fetching coordinates. Please check your location settings and try again."
              );
            }
          },
          options
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    // Function to fetch address details from Google Geocoding API
    const fetchAddressDetails = async (lat, lng) => {
      const apiKey = "AIzaSyAyJpLSyJTHpJ2zkMaHB-eXb2L63MpONa4";
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=street_address&key=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        if (response.data.results.length > 0) {
          const formattedAddress =
            response.data.results[0].formatted_address;

          // Extract city name
          const addressComponents =
            response.data.results[0].address_components;
          const cityComponent = addressComponents.find(
            (component) =>
              component.types.includes("locality") &&
              component.types.includes("political")
          );
          const city = cityComponent ? cityComponent.long_name : "";

          setFormattedAddress(formattedAddress);
          setCity(city);
        } else {
          console.error("No address details found for the coordinates.");
        }
      } catch (error) {
        console.error("Error fetching address details:", error);
      }
    };

    fetchCoordinates(); // Fetch coordinates on component mount
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Function to generate Google Maps iframe URL
  const generateMapUrl = () => {
    if (latitude && longitude) {
      return `//maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    }
    return "//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"; // Default Dublin coordinates
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        margin: 0,
        overflow: "hidden",
      }}
    >
      {/* Left Side with Google Maps iframe */}
      <div
        style={{
          width: "60%",
          backgroundColor: "white",
          borderRadius: "1.2rem",
          border: "1px solid #000000",
          gap: 5,
          margin: "20px",
        }}
      >
        <iframe
          title="Google Maps"
          src={generateMapUrl()}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "1.2rem",
          }}
        ></iframe>
      </div>

      {/* Right Side with Form Inputs */}
      <div
        style={{
          position: "relative",
          width: "40%",
          backgroundColor: "white",
          borderRadius: "1.2rem",
          border: "1px solid #000000",
          margin: "20px",
          padding: "0px",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "1.2rem",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            color: "white",
            padding: "20px",
            fontSize: "1.9rem",
            fontFamily: "DMSB",
          }}
        >
          Join ScrapMate
        </div>
        <div style={{ marginTop: "50px" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "transparent",
              marginLeft: 10,
            }}
          >
            <div style={{ width: "50%", paddingRight: "10px" }}>
              <div style={{ color: "#7F7F7F", marginBottom: 5 }}>
                House No
              </div>
              <input
                type="text"
                style={{
                  width: "70%",
                  borderRadius: "0.5rem",
                  border: "1px solid #a2a2a3",
                  padding: "10px",
                  fontFamily: "DMSB",
                  backgroundColor: "#f4f4f4",
                  fontSize: "1.3rem",
                }}
              />
            </div>
            <div style={{ width: "50%", paddingLeft: "10px" }}>
              <div style={{ color: "#7F7F7F", marginBottom: 5 }}>City</div>
              <input
                type="text"
                style={{
                  width: "70%",
                  borderRadius: "0.5rem",
                  border: "1px solid #a2a2a3",
                  padding: "10px",
                  fontFamily: "DMSB",
                  backgroundColor: "#f4f4f4",
                  fontSize: "1.3rem",
                }}
                value={city}
                readOnly
              />
            </div>
          </div>

          <div
            style={{
              paddingRight: "10px",
              backgroundColor: "transparent",
              paddingLeft: 10,
              marginTop: 20,
            }}
          >
            <div style={{ color: "#7F7F7F", marginBottom: 5 }}>
              Full Address
            </div>
            <textarea
              style={{
                width: "80%",
                borderRadius: "0.5rem",
                border: "1px solid #a2a2a3",
                padding: "10px",
                fontFamily: "DMSB",
                backgroundColor: "#f4f4f4",
                fontSize: "1.3rem",
                resize: "vertical",
              }}
              value={formattedAddress}
              readOnly
            ></textarea>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "15px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <button
            style={{
              padding: "15px 20px",
              borderRadius: "0.9rem",
              backgroundColor: "#385aeb",
              color: "white",
              border: "none",
              fontFamily: "DMSB",
              fontSize: "1.3rem",
              cursor: "pointer",
              width: "90%",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin1;
