import './App.css';
import Mainscreen from './Mainscreen';
import {BrowserRouter,Route,Link, Routes} from "react-router-dom";
import Page2 from './Page2.js';
import Page3 from './Page3.js'; 
function App() {
  
  
  return(
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Mainscreen></Mainscreen>}/>
        <Route path="/page2" element={<Page2></Page2>}/>
        <Route path="/page3" element={<Page3></Page3>}/>
    </Routes>
   
  </BrowserRouter>
  
       
    
  );
}

export default App;
