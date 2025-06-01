// pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // chứa css cho bg

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>GreenLeaf Store</h1>
      <p>Your go-to destination for fresh indoor plants 🌿</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
