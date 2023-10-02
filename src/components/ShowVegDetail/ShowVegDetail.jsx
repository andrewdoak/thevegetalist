import { useState, useEffect } from "react";
import styles from "./ShowVegDetail.module.css";
// import { checkToken } from "../../utilities/users-service";
import {
  addOneVegetable,
  deleteOneVegetable,
  updateOneVegetable,
  showOneVegetable,
} from "../../utilities/vegetables-api";

// WILL CONTAIN CRUD FUNCTIONS
import React from "react";

function ShowVegDetail() {
  return (
    <div>
      <h1>My Vegetable.</h1>
    </div>
  );
}

export default ShowVegDetail;
