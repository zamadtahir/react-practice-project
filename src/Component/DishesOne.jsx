import React, { useState } from "react";
import list from "../Data";

import Dishes from "./Dishes";

const  DishesOne = ({handleClick})=> {
  
  return (
    <>
      <section className="dishes-one">
        {list.map((item) => (
          <Dishes key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
}

export default DishesOne