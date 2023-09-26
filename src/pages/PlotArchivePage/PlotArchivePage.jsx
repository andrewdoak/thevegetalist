// CHECK TOKEN FOR LOGIN EXPIRATION EVENT HANDLER
import { checkToken } from "../../utilities/users-service";

function PlotArchivePage() {
  return (
    <div>
      <h1>Archive</h1>
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
