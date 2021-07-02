import React from 'react';
import jump from 'jump.js';

export default function Menu() {
  return (
  <>
    <div className="whole-menu-title">CHOW LIST</div>
    <div className="menu-container">
      <div className="menu-list1">
        <div className="menu-title">Meats</div>
          <div className="menu-sub">Pork</div>
          <div className="menu-sub">Beef</div>
          <div className="menu-sub">Chicken</div>
          <div className="menu-sub">Turkey</div>
          <div className="menu-sub">Vegan</div>
      </div>
      <div className="menu-list2">
        <div className="menu-title">Sides</div>
          <div className="menu-sub">BBQ Beans</div>
          <div className="menu-sub">Corn</div>
          <div className="menu-sub">Mac & Chee</div>
          <div className="menu-sub">Potato Salad</div>
          <div className="menu-sub">Greens Salad</div>
      </div>
      <div className="menu-list3">
        <div className="menu-title">Dessert</div>
          <div className="menu-sub"> Cake</div>
          <div className="menu-sub"> Apple Pie</div>
          <div className="menu-sub"> Ice Cream</div>
          <div className="menu-sub"> Doughnuts</div>
          <div className="menu-sub"> Chocolate Cake</div>
      </div>
      <div className="menu-list4">
        <div className="menu-title">Drinks</div>
          <div className="menu-sub">Soda/Pop</div>
          <div className="menu-sub">Bottled Water</div>
          <div className="menu-sub">Lemonade</div>
          <div className="menu-sub">Iced Tea</div>
          <div className="menu-sub">Coffee</div>
      </div>
    </div>
      <div className="get-in-touch"
        onClick={() => {jump(".form-wrapper")}}
        >Get in touch
      </div>
  </>
  )
}
