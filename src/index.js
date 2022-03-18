import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './Components/categories';
import Meal from './Components/meals';
import Search from './Components/search';
import Random from './Components/random';

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading..</h2>
  </div>
)
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/categories/:strCategory" element={<Category />} />
          <Route path="/random" element={<Random />} />
          <Route path="/meals/:idMeal" element={<Meal />} />
          <Route path="/search/:input" element={<Search />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
