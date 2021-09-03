import React from 'react';
import jump from 'jump.js';

export default function Menu() {
  const meats = ["Pulled Pork", "Beef", "Chicken", "Turkey", "Vegan"];
  const sides = ["BBQ Beans", "Potato Salad", "Greens Salad", "Corn", "Macaroni Salad"];
  const desserts = ["Cupcakes", "Pies", "Ice Cream", "Birthday Cake"];
  const drinks = ["Soda/Pop", "Bottled Water", "Iced Tea", "Lemonade"];
  return (
  <>
    <div className="menu-wrapper">
      <h1 className="menu-header">CHOW LIST</h1>
      <div className="meats">
        <h2 className="menu-list-header">The Meats</h2>
          <ul>
            {meats.map(meat => (
              <li className="menu-list-item">{meat}</li>
          ))}
          </ul>
      </div>
      <div className="sides">
        <h2 className="menu-list-header">The Sides</h2>
          <ul>
            {sides.map(side => (
              <li className="menu-list-item">{side}</li>
          ))}
          </ul>
      </div>
    </div>
  </>
  )
}
