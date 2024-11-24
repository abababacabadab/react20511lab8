import { useState } from "react";

let badCounter = 0; 

export default function CounterSet() {
  const [goodCounter, setGoodCounter] = useState(0); 

  // zły licznik
  const incrementBadCounter = () => {
    badCounter++;
    alert(`Zły licznik: ${badCounter}`);
  };

  // dobry licznik
  const incrementGoodCounter = () => {
    setGoodCounter((prev) => prev + 1);
  };

  return (
    <div>
      {/* zły licznik */}
      <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid red" }}>
        <h2>Zły licznik</h2>
        <p>Wartość złego licznika: {badCounter}</p>
        <button onClick={incrementBadCounter}>Zwiększ Zły Licznik</button>
      </div>

      {/* dobregy licznik */}
      <div style={{ padding: "10px", border: "1px solid green" }}>
        <h2>Dobry licznik</h2>
        <p>Wartość dobrego licznika: {goodCounter}</p>
        <button onClick={incrementGoodCounter}>Zwiększ Dobry Licznik</button>
      </div>
    </div>
  );
}
