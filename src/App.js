import Header from "./components/Header";
import CardGallery from "./components/CardGallery";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container mt-5">
        <h1 className="text-center">Collect 'Em All!</h1>
        <CardGallery searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
