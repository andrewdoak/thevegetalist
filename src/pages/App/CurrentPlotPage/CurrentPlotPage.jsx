import { checkToken } from "../../../utilities/users-service";

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
    <div>
      <h1>My Plot</h1>
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
