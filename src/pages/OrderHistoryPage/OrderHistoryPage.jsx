import { checkToken } from "../../utilities/users-service";

// Sends an alert on the handler
// async in arrow function before parentheses
function OrderHistoryPage() {
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
      <h1>Order History</h1>
      <button onClick={handleCheckToken}>Login Expired?</button>
    </div>
  );
}

export default OrderHistoryPage;

/* 
Need either a div or a react fragment for multiple react elements on a page or component
*/
