import React, { useState } from "react";
import "./App.css";

function App() {
  const [startSKU, setStartSKU] = useState("");
  const [numSheets, setNumSheets] = useState(0);
  const [generatedLabels, setGeneratedLabels] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let currentSKU = parseInt(startSKU); // Convert start SKU to integer
    let labels = [];

    // Generate SKU labels
    for (let i = 0; i < numSheets * 8; i++) {
      labels.push({ sku: currentSKU });
      currentSKU++; // Increment SKU
    }

    // Update state with generated labels
    setGeneratedLabels(labels);
  };

  return (
    <>
      <header>
        <h1>Label Generator</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="start">Start SKU:</label>
          <input
            type="number"
            id="start"
            name="start"
            value={startSKU}
            onChange={(e) => setStartSKU(parseInt(e.target.value))}
          />
          <label htmlFor="sheet">Number of Sheets:</label>
          <input
            type="number"
            id="sheet"
            name="sheet"
            value={numSheets}
            onChange={(e) => setNumSheets(parseInt(e.target.value))}
          />
          <input type="submit" value="Generate" />
        </form>
        <div className="labels">
          {generatedLabels.map((label, index) => (
            <div key={index} className="label">
              <h1>{label.sku}</h1>
              <div className="label-content">
                <p className="category">Clothing • Shoes • B&W • H&S</p>
                <span>Size</span>
                <p className="size">XS | S | M | L | XL | 1X+ | masc</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
