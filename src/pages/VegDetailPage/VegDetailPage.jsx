// CSS
import styles from "./VegDetailPage.module.css";
// DEPENDENCIES
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// UTILITIES
// import { checkToken } from "../../utilities/users-service";
// import { showVegetables } from "../../utilities/vegetables-api";
// COMPONENTS
import ShowVegDetail from "../../components/ShowVegDetail/ShowVegDetail";
import UpdateVegForm from "../../components/UpdateVegForm/UpdateVegForm";

export default function VegDetailPage() {
  return (
    <div className={styles.VegDetailPage}>
      <h1 className={styles.h1}>My Vegetable.</h1>
      <p className={styles.p}>
        You will be able to EDIT the vegetable on the page. There will be a form
        below the vegetable where you can edit what will be in that square.
      </p>
      <ShowVegDetail />
      <UpdateVegForm />
    </div>
  );
}
