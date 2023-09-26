import styles from "./CurrentPlotPage.module.css";
import { checkToken } from "../../utilities/users-service";

function CurrentPlotPage() {
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
    <div className={styles.CurrentPlotPage}>
      <h1 className={styles.h1}>Current Plot.</h1>
      <p className={styles.p}>
        This page will display the most recently edited plot. It will be a grid
        of 8 squares by 4 squares.
      </p>
      <p className={styles.p}>STRETCH goal. Display hours of daylight today.</p>
      <p className={styles.p}>
        You will be able to EDIT the squares on the page by clicking on one of
        the vegetable squares, or on one of the vegetable details below the plot
        graphic. Following the link takes you to to a detail page of the
        vegetable where you can edit what will be in that square.
      </p>
      <button onClick={handleCheckToken}>Login Expiry</button>
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
