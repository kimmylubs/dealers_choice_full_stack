// this will show the teas, toppings, and milk in my Cart!

import React from "react";
import { connect } from "react-redux";

const Cart = ({ teas, toppings, milks }) => {
  return (
    <div>
        <h4>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧Your Cart ✧ﾟ･: *ヽ(◕ヮ◕ヽ)</h4>
      <nav>
        <ul id="nextTo">
          Teas:
          {teas.map((tea) => {
            return <li key={tea.id}> {tea.name},</li>;
          })}
        </ul>
        <ul id="nextTo">
          Toppings:
          {toppings.map((topping) => {
            return <li key={topping.id}> {topping.name},</li>;
          })}
        </ul>
        <ul id="nextTo">
          Milk:
          {milks.map((milk) => {
            return <li key={milk.id}> {milk.name},</li>;
          })}
        </ul>
      </nav>
      <br />
    </div>
  );
};

const mapState = (state) => state;

export default connect(mapState)(Cart);
