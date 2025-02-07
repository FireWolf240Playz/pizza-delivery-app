/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const clasName = "text-sm text-blue-500 hover:text-blue-600 ";

  if (to === "-1")
    return (
      <button className={clasName} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link className={clasName} to={to}>
      &larr; {children}
    </Link>
  );
}

export default LinkButton;
