import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Loader = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate("/main")}>
      <h2>Click Anyware To Start</h2>
    </div>
  );
};

export default Loader;
