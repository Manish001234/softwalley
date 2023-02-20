
import React, { useEffect, useState } from 'react'

const Homepage = () => {
  const [leaddata, setLeadData] = useState([]);
  let token = localStorage.getItem("Jwt_Token");

  const Lead_data = async () => {
    const response = await fetch(
      "http://crm.softvalley.sveducrm.com/api/admin/base/lead-status",

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    

    setLeadData(data);
  };
  useEffect(() => {
    Lead_data();
  }, []);

  return (
    <div>
   //after getting data need to map in react-able

    </div>
  )
}

export default Homepage