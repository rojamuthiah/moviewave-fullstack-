import GenreMovieList from "./Components/GenreMovieList";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import "./App.css";
import ProductionHouse from "./Components/ProductionHouse";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NewMovieSlider from "./Components/NewMovieSlider";
import NewMovies from "./Components/NewMovies";
import Trendvideo from "./Components/trendvideo";
import Music from "./Components/Music";
import SlidesNew from "./Components/SlidesNew";

function App() {
  return (
    <Router>
       <div className="bg-black w-[1500px] "> 
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-black" >
                <Navbar />
                <SlidesNew/>
                {/* <ProductionHouse /> */}
                <GenreMovieList />
             
              </div>
            }
          />
            <Route path="/payment"
          element={
            <div classname='relative bg-black h-auto'>
          
                <Navbar/>
                
                 <Home/>
           

            </div>
          }/>
          <Route path="/movies"
          element={
            <div>
          
          
                 <Navbar/>
                 <ProductionHouse/>
                 <NewMovies/>

            </div>
          }/>

          <Route path="/login" 
          element={
            <div className="relative">
              <Navbar/>
               <Login />
            </div>
          }/>
          <Route path="/music"
          element={
            <div className="grid bg-black h-auto">
              <Navbar/>
              <Music/>
            </div>
          }/>
          <Route path="/trend"
          element={
            <div classname="relative bg-black">
              <Navbar/>
              <ProductionHouse/>
              <Trendvideo/>
            </div>

           }
          />
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
