import * as React from "react";
import "./itemListContainer.css";
import Item from "./Item";

const ItemListContainer = (props) => (
  <div>
    <h1>{props.greeting}</h1>
    <div className="cards">
      <Item
        imgurl="/img/bike.jpg"
        producto="Descenso Extremo"
        precio={25000}
      />
      <Item
        imgurl="/img/escalada.jpg"
        producto="Bautismo de Escalada"
        precio={15000}
      />
      <Item 
        imgurl="/img/kite.jpg" 
        producto="Kite Surf" 
        precio={20000} 
      />
            <Item 
        imgurl="/img/parapente.jpg" 
        producto="Parapente" 
        precio={45000} 
      />
            <Item 
        imgurl="/img/Trekk.jpg" 
        producto="Trekking" 
        precio={5000} 
      />
    </div>
  </div>
);

export default ItemListContainer;
