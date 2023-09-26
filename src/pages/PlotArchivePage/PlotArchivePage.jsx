import styles from "./PlotArchivePage.module.css";
// CHECK TOKEN FOR LOGIN EXPIRATION EVENT HANDLER
// USING ON CURRENT PAGE
import { checkToken } from "../../utilities/users-service";

function PlotArchivePage() {
  return (
    <div className={styles.PlotArchivePage}>
      <h1 className={styles.h1}>Plot Archive.</h1>
      <p className={styles.p}>This page will show all past garden plots.</p>
      <p className={styles.p}>
        A list of vegetables might be displayed. They will be cards, and there
        will be a map.
      </p>
    </div>
  );
}
export default PlotArchivePage;

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
