import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

const tablling = (
  <table>
    <thead>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Origin</th>
    </thead>
    <tbody>
      <tr>
        <td>Wilfred</td>
        <td>Tinega</td>
        <td>24</td>
        <td>Kisii</td>
      </tr>
    </tbody>
  </table>
);

const header =(<h1><span>Wilfred Mamboleo</span> </h1>)

const container = document.getElementById("root");

const firstChildContainer = ReactDOM.createRoot(container);

firstChildContainer.render(header);

