import { useSelector } from "react-redux";
import Alert from "./Alert";
import "./AlertBox.css";

const AlertBox = () => {
  const alerts = useSelector((state) => state.alerts);

  console.log(alerts);

  return (
    <section className="alert-box">
      {alerts.map(({ id, ...alert }) => (
        <Alert key={id} {...alert} />
      ))}
    </section>
  );
};

export default AlertBox;
