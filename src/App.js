import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1><span>Doughope</span></h1>
        <h2>A bread hyrdation calculator</h2>
      </header>

      <div className="main">

        <div className="main-content">
          <p>In a recipe, the baker's percentage for water is referred to as the "hydration"; it is indicative of the stickiness of the dough and the "crumb" of the bread.</p>
          <p>
            Lower hydration rates (e.g., 50–57%) are typical for bagels and pretzels, and medium hydration levels (58–65%) are typical for breads and rolls. Higher hydration levels are used to produce more and larger holes, as is common in artisan breads such as baguettes or ciabatta.
          </p>
          <cite>Source:<a href="https://en.wikipedia.org/wiki/Baker_percentage#Dough_hydration">Wikipedia</a></cite>

        </div>

        <aside>
          <p>
            [Recipe Summary field]
          </p>
        </aside>
      </div>


    </div>
  );
}

export default App;
