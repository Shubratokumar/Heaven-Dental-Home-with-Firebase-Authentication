import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
// import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blogs/>}></Route>
        {/* <Route path="/checkout/:checkId" element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }></Route> */}
        <Route path="/checkout/:checkId" element={
            <Checkout/>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
