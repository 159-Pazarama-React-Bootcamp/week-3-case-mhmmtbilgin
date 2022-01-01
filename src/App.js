import "./App.css";
import React from "react";
import Landing from "./components/Landing/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
