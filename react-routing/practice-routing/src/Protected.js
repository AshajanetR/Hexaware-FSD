import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ component: Component }) => {
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (!data) {
      navigate("/login");
    } else {
      setIsAllowed(true);
    }
  }, [navigate]);

  return <>{isAllowed && <Component />}</>;
};

export default Protected;
