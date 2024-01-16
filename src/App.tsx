import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageProvider from "./component/ImageProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageProvider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
