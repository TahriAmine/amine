import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import Test from "./containers/Test";

function App() {
  return (
    <div className="App">
     <h1>React Redux Demo</h1>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<ProductListing/> } />
      <Route path="/test" element={<Test/> } />
      <Route path="/product/:productId" element={<ProductDetail/>} />
      <Route>404 Not Found !!</Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
