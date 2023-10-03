// CSS
import styles from "./CurrentPlotPage.module.css";
// DEPENDENCIES
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// UTILITIES
import { checkToken } from "../../utilities/users-service";
import {
  showVegetables,
  deleteOneVegetable,
} from "../../utilities/vegetables-api";

function CurrentPlotPage() {
  const [vegetables, setVegetables] = useState([]);
  // const [error, setError] = useState("");

  // SHOW ALL VEGETABLES
  async function getVegetables() {
    try {
      const newVegetables = await showVegetables();
      console.log(newVegetables);
      setVegetables(newVegetables);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getVegetables();
  }, []);

  // DELETE ONE VEGETABLE
  async function deleteVegetable(id) {
    try {
      console.log("Clicked");
      console.log(id);
      await deleteOneVegetable(id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.CurrentPlotPage}>
      <h1 className={styles.h1}>My Plot.</h1>
      <p className={styles.p}>
        This page will display the most recently edited plot. It will be a grid
        of 8 squares by 4 squares. There will also be details on the vegetables
        in each square in a set of columns below the grid.
      </p>
      <p className={styles.p}>
        You will be able to EDIT the squares on the page by clicking on one of
        the vegetable squares, or on one of the vegetable details below the plot
        graphic.
      </p>
      <p className={styles.p}>
        Following the LINK takes you to to a detail page of the vegetable where
        you can edit what will be in that square.
      </p>
      <p className={styles.pAvenirBold}>
        STRETCH goal. Display hours of daylight today.
      </p>
      {/* {vegetable.sortOrder.toString()} */}
      {vegetables.map((vegetable, i) => {
        return (
          <div key={i}>
            <p className={styles.p}>
              <br />
              <span className={styles.vegType}>
                {vegetable.sortOrder}. {vegetable.type}
              </span>
              <span className={styles.vegPerSF}> ({vegetable.perSF})</span>
            </p>

            <div className={styles.duoTone}>
              <img src={vegetable.img} alt="" />
            </div>
            {/* Harvest Data */}
            <p className={styles.p}>
              <span className={styles.vegVariety}>{vegetable.variety}</span>{" "}
              <br />
              <span>
                <a
                  href={vegetable.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.vegLink}
                >
                  Seed Source
                </a>{" "}
              </span>
              <br />
              <span className={styles.vegData}>Days to Maturity: </span>{" "}
              {vegetable.daysToHarvest} <br />
              {/* TODO: Need JS function to add the days to sprouted */}
              <span className={styles.vegData}>Harvest around: </span>
              “Work some JS Magic”
              <br />
              <Link
                to="/vegetable/detail"
                className={styles.vegLink}
              >{`+ Detail +`}</Link>{" "}
              <br />
              <button onClick={() => deleteVegetable(vegetable._id)}>
                Delete
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CurrentPlotPage;

/* 
function PlotArchivePage() {
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken();
      // Have date methods from users-service
      alert(`Your login expires on ` + expDate.toLocaleString());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Archive</h1>
      <button onClick={handleCheckToken}>Check login</button>
    </div>
  );
}

export default PlotArchivePage;
*/
