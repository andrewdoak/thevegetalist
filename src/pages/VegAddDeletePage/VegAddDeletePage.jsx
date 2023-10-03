import styles from "./VegAddDeletePage.module.css";
// CHECK TOKEN FOR LOGIN EXPIRATION EVENT HANDLER
// USING ON CURRENT PAGE
import { checkToken } from "../../utilities/users-service";
// COMPONENTS
import AddVegForm from "../../components/AddVegForm/AddVegForm";

export default function VegAddDeletePage() {
  return (
    <div className={styles.VegAddDeletePage}>
      <h1 className={styles.h1}>Add a Vegetable.</h1>
      <p className={styles.p}>
        <span className={styles.vegType}>Instructions</span>
        <br />
        Use this page to add a new vegetable to your plot. Fill out all the
        fields! Reference the web page where you bought your seeds or seedlings
        to fill out the form.
      </p>
      <p className={styles.p}>
        <span className={styles.pAvenirBold}>Add an image URL</span> for your
        vegetable. Find the image you would like to use on the web. Right click
        to open it in a new tab. Copy the URL from the new tab and paste it in
        the Image URL field below.
      </p>
      <br />
      <p className={styles.p}>
        <span className={styles.vegType}>Planting Guide</span>
        <br />
        <span className={styles.pAvenirBold}>#1 / square foot: </span>
        <br />
        Asparagus, Broccoli, Brussels Sprouts, Cabbage, Cauliflower, Eggplant,
        Kale, Okra, Peppers, Potato, Rhubarb, Strawberry, Sunflower (large),
        Tomato.
      </p>
      <p className={styles.p}>
        <span className={styles.pAvenirBold}>#4 / square foot: </span>
        <br />
        Corn, Chives, Fennel, Garlic, Kohlrabi, Lettuce (head), Rutabaga,
        Shallots, Sunflower (hedge), Swiss Chard.
      </p>
      <p className={styles.p}>
        <span className={styles.pAvenirBold}>#9 / square foot: </span>
        <br />
        Bean, (pole), Bean (bush), Beet (large), Bok Choy, Celery, Mustard,
        Onion (bulb), Peas, Soybean, Spinach, Turnips (large).
      </p>
      <p className={styles.p}>
        <span className={styles.pAvenirBold}>#16 / square foot: </span>
        <br />
        Beets (small), Carrots, Green Onion, Leek, Micro Greens, Parsnip,
        Radish, Salad Greens, Scallions, Turnip (small).
      </p>
      <AddVegForm />
    </div>
  );
}

/* 
// OLD PAGE HAD Check login BUTTON

export default PlotArchivePage;

// Sends an alert on the handler
// async in arrow function before parentheses
function PlotArchivePage() {
  // const handleCheckToken = async () => {
  //   try {
  //     const expDate = await checkToken();
  //     // Have date methods from users-service
  //     alert(`Your login expires on ` + expDate.toLocaleString());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <h1>Archive</h1>
      <button onClick={handleCheckToken}>Check login</button>
    </div>
  );
}

export default PlotArchivePage; 
*/
