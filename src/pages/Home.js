import logo from '../logo.svg';
import '../Home.css';
import {ChoppitNav} from "../components/ChoppitNav";
import React from "react";

function Home() {
  return (
    <>
      <ChoppitNav/>
      <header className="App-header App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default Home;
