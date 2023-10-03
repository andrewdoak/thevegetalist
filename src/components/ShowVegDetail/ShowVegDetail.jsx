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
export default function ShowVegDetail() {
  // State goes here
  return (
    <div className={styles.ShowVegDetail}>
      <p className={styles.p}>Veg detail information goes here.</p>
    </div>
  );
}
