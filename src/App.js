
import React, {useState, useEffect, Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { publishRoutes } from './routes';
import { Defaultlayout } from './components/DefaultLayout';
import { ProductContext } from './components/Context';
import axios from 'axios';
import { ShopGrid } from './pages/ShopGrid';
import { ProductPage } from './pages/ProductPage';
import { HomePage } from './pages/Homepage';

function App() {

  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = () => {
        return axios.get("https://hcmut-e-commerce.herokuapp.com/api/product/getall")
            .then((response) => setData(response.data))
    }
    fetchData();
}, [])

  useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
  },[page])

  const handleClick = () => {
    if (page === 1) {
      setPage(0)
    }
    else setPage(1)
  }

  return (
    <Router>
      <div className="App">
       <ProductContext.Provider value={{data, setData}}>
         <Routes>
         <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<Defaultlayout/>}/>
          <Route path='/shop/:id' element={<ProductPage/>}/>
          
         </Routes>
         <p className='to-top' onClick={handleClick}>
              <i className="fa-sharp fa-solid fa-chevron-up"></i>
          </p>
       </ProductContext.Provider>
      </div>
    </Router>
  );
}

export default App;
