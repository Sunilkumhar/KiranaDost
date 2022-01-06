import React, { useEffect } from "react";
import { FrontEnd_URL } from "../baseURL";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("edit_id");
    localStorage.removeItem("_id");
    window.location.href = FrontEnd_URL;
  }, []);

  return <div></div>;
}

export default Logout;
