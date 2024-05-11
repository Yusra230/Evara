
import Footer from "../components/Footer"
import Header from "../components/Header"

import NewsLetter from "../components/NewsLetter"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import FetchAllData from "../components/FetchAllData";
import Spinner from "../components/Spinner";

function App() {

  const products = useSelector(store => store.products);
  // console.log('initial produc value');
  // console.log(products);

  return <>
    <Header></Header>
    <FetchAllData></FetchAllData>
    {products.length === 0 ? <Spinner></Spinner> : <Outlet></Outlet>}
    <NewsLetter></NewsLetter>
    <Footer></Footer>
  </>

}

export default App;
