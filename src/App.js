import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";
import { Error } from "./Components/Error/Error";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsPage } from "./Components/Page/DetailsPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/cocktail/:id" element={<DetailsPage />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
