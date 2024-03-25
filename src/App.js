import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
        <div>
        <h2>Installation Guide</h2>
        <ol>
          <li>Clone or download the repository</li>
          <li>Navigate to the project directory in your terminal</li>
          <li>
            install dependencies for the frontend and backend by running
            <code>npm install</code>
          </li>
          <li>
            start the backend server by running<code>node server.js</code>
          </li>
          <li>
            Start the frontend application by running<code>npm start</code>
          </li>
          <li>Access the application in your browser</li>
        </ol>
      </div>
      <h2>Widget</h2>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h3>Data Received:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}


