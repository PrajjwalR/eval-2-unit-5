import { useContext, useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

import { DataContext } from "./Context/DataStore";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import AddData from "./Components/AddData";
import Admin from "./Components/Admin";
import { Adminaccess } from "./Privateroute/Adminaccess";

function App() {
  const { data, SetData } = useContext(DataContext);

  function fetchData() {
    axios
      .get("https://unit-5-eval1-default-rtdb.firebaseio.com/books.json")
      .then((res) => {
        SetData(Object.entries(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, [1]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home fetchData={fetchData} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/adddata"
          element={<AddData fetchData={fetchData} />}
        ></Route>
        <Route
          path="/admin"
          element={<Adminaccess Component={Admin} />}
        ></Route>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
