import React from "react";
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./pages/Projects";
import './App.css'
import About from "./pages/About";
import Playground from "./pages/Playground";
import ContactUs from "./pages/ContactUs";
import Diorpackstage from "./pages/ProductDetails/Diorpackstage";
import DiorSnow from "./pages/ProductDetails/DiorSnow";
import YvesSaintLaurent from "./pages/ProductDetails/YvesSaintLaurent";
import GayelordHauserTV from "./pages/ProductDetails/GayelordHauserTV";
import ChopardRedCarpet from "./pages/ProductDetails/ChopardRedCarpet";
import CocaColaXKanako from "./pages/ProductDetails/CocaColaXKanako";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Projects/>}/>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/playground" element={<Playground/>}></Route>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/diorpackstage" element={<Diorpackstage/>}/>
          <Route path="/diorsnow" element={<DiorSnow/>}/>
          <Route path="/yvessaintlaurent" element={<YvesSaintLaurent/>}/>
          <Route path="/gayelordhausertv" element={<GayelordHauserTV/>}/>
          <Route path="/chopardredcarpet" element={<ChopardRedCarpet/>}/>
          <Route path="/cocacolaxkanako" element={<CocaColaXKanako/>}/>
          <Route path="*" element={<Projects to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
