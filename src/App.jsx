import React, { useState } from "react";
import "./App.css";

function App() {
  const [startSKU, setStartSKU] = useState("");
  const [numSheets, setNumSheets] = useState(0);
  const [category, setCategory] = useState("Clothing");
  const [generatedLabels, setGeneratedLabels] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let currentSKU = parseInt(startSKU); // Convert start SKU to integer
    let labels = [];

    // Generate SKU labels
    for (let i = 0; i < numSheets * 8; i++) {
      labels.push({
        sku: currentSKU,
        category: category,
      });
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
          <div>
            <label htmlFor="start">Start SKU:</label>
            <input
              type="number"
              id="start"
              name="start"
              value={startSKU}
              onChange={(e) => setStartSKU(parseInt(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="sheet">Number of Sheets:</label>
            <input
              type="number"
              id="sheet"
              name="sheet"
              value={numSheets}
              onChange={(e) => setNumSheets(parseInt(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="categories">Category:</label>
            <select
              id="categories"
              name="categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Shoes">Shoes</option>
            </select>
          </div>

          <input type="submit" value="Generate" />
        </form>
        <div className="labels">
          {generatedLabels.map((label, index) => (
            <div key={index} className="label">
              <h1>{label.sku}</h1>
              <div className="label-content">
                {label.category === "Clothing" && (
                  <span className="category">
                    Tops • Bottoms • Dresses • Outer • V
                  </span>
                )}

                {label.category === "Accessories" && (
                  <span className="category">
                    Bags & Wallets • Hats & Scarves
                  </span>
                )}

                {label.category === "Shoes" && (
                  <span className="category">Shoes</span>
                )}

                <span>Size</span>
                {label.category === "Clothing" && (
                  <p className="size">XS | S | M | L | XL | 1X+ | masc</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
