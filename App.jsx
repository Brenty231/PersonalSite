import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShowFly } from "./components/ShowFly";

export function App() {
  const [flyers, setFlyers] = useState("");

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ marginTop: 15, marginBottom: 20 }}>Brent's Flyers</h1>
        <SplitButton variant="success" title="Select a Portfolio" align="end">
          <Dropdown.Item onClick={() => setFlyers("sunday service")}>
            Sunday Service
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => setFlyers("countdowns")}>
            Countdowns
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => setFlyers("auditions")}>
            Auditions
          </Dropdown.Item>
        </SplitButton>
      </div>

      <ShowFly fly={flyers} />

      <ToastContainer theme="dark" />
    </>
  );
}
