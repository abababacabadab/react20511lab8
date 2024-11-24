import { useState } from "react";

export default function InteractiveApp() {
  const [data, setData] = useState(null); // Stan na dane z JSON-a
  const [showImage, setShowImage] = useState(false); // Kontroluje widoczność obrazka
  const [style, setStyle] = useState({ backgroundColor: "white" });

  // Funkcja obsługi kliknięcia
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Funkcja zmiany stylu
  const changeStyle = () => {
    setStyle({ backgroundColor: style.backgroundColor === "white" ? "blue" : "white" });
  };

  // Funkcja do załadowania danych z pliku JSON
  const loadDataFromJson = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error loading JSON:", error);
    }
  };

  // Obsługa przesyłania pliku
  const uploadFile = (event) => {
    const file = event.target.files[0];
    console.log("File uploaded:", file.name);
  };

  // Funkcja do pokazania obrazka
  const toggleShowImage = () => {
    setShowImage((prev) => !prev);
  };

  return (
    <div style={style}>
      <button onClick={handleClick}>Click Me</button>

      {/* Show Image */}
      <button onClick={toggleShowImage} style={{ marginLeft: "10px" }}>
        {showImage ? "Hide Image" : "Show Image"}
      </button>
      {showImage && <img src="/vite.svg" alt="Vite Logo" style={{ marginTop: "10px", width: "100px" }} />}

      {/* Load JSON Data */}
      <button onClick={loadDataFromJson} style={{ marginTop: "10px" }}>
        Load JSON Data
      </button>
      {data && (
        <div style={{ marginTop: "10px" }}>
          <h3>Załadowane dane:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {/* File Upload */}
      <input
        type="file"
        onChange={uploadFile}
        style={{ display: "block", marginTop: "10px" }}
      />

      {/* Change Style */}
      <button onClick={changeStyle} style={{ marginTop: "10px" }}>
        Change Background Style
      </button>
    </div>
  );
}
