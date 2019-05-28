import React, { Component } from 'react';
import Ingredients, { Total } from './Ingredients';

class App extends Component {

  state =
    {
      item: {
        name: 'flour',
        type: 'White flour',
        quantity: 100,
        percentage: 100

      },
      totalQuantity: 100
    }



  render() {

    return (
      <div className="wrapper">
        <header className="header">
          <h1><span>DOUGHOPE</span></h1>
          <h2>A bread hyrdation calculator</h2>
        </header>

        <div className="main">

          <div className="main-content">
            <p>In a recipe, the baker's percentage for water is referred to as the "hydration"; it is indicative of the stickiness of the dough and the "crumb" of the bread.</p>
            <p>
              Lower hydration rates (e.g., 50–57%) are typical for bagels and pretzels, and medium hydration levels (58–65%) are typical for breads and rolls. Higher hydration levels are used to produce more and larger holes, as is common in artisan breads such as baguettes or ciabatta.
          </p>
            <cite>Source: <a href="https://en.wikipedia.org/wiki/Baker_percentage#Dough_hydration">Wikipedia</a></cite>

            <Ingredients name={this.state.item.name} type={this.state.item.type} quantity={this.state.item.quantity} percentage={this.state.item.percentage} />
            <Total total={this.state.totalQuantity} />
          </div>

          <aside>
            <h3>Recipe summary</h3>
            <p>
              {this.state.item.type}:               {this.state.item.quantity} (g)

            </p>
          </aside>
        </div>


      </div>
    );
  }
}

export default App;
