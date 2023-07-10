import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Footer from './Footer';
import App2 from './search/App2'
import './Home/HomePage.css';
// import Create from './Create';
// import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/search" element={<App2 />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;