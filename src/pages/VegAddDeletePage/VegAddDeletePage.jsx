import styles from "./VegAddDeletePage.module.css";
// CHECK TOKEN FOR LOGIN EXPIRATION EVENT HANDLER
// USING ON CURRENT PAGE
import { checkToken } from "../../utilities/users-service";
// COMPONENTS
import AddVegForm from "../../components/AddVegForm/AddVegForm";

export default function VegAddDeletePage() {
  return (
    <div className={styles.VegAddDeletePage}>
      <h1 className={styles.h1}>Add & Delete Vegetable.</h1>
      <p className={styles.p}>
        User will be able to add and delete a vegetable on this page.
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
