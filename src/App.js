import React, { useState, useEffect } from "react";
import AppTopBar from "./Components/AppBar";
import MenuTabs from "./Components/MainTabs";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <AppTopBar />
      {!loading && data && <MenuTabs data={data} />}
      {loading && <p>Loading...</p>}
      {!loading && !data && <p>Error fetching data. Please try again later.</p>}
    </div>
  );
}

export default App;
