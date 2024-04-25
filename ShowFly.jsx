import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import auds from "./auditions";
import countdowns from "./countpics";
import sunday_service from "./sunpics";

import { toast } from "react-toastify";

export function ShowFly({ fly }) {
  const [port, setPort] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getFlyers() {
      toast.dismiss();
      const dat = fly;

      setPort(dat);
      setLoading(false);
    }
    if (!fly) {
      setLoading(true);
    }
    getFlyers();
  }, [fly]);

  if (loading) {
    return <p>waiting...</p>;
  }

  switch (port) {
    case "countdowns":
      toast.success(`Showing ${countdowns.length} Countdown Flyer(s)`);

      return (
        <>
          <h3>Countdown Flyers:</h3>
          <div style={{ marginBottom: 25 }}>
            {countdowns.map((count, index) => (
              <img src={count} key={index} alt="" />
            ))}
          </div>
        </>
      );

    case "sunday service":
      toast.success(`Showing ${sunday_service.length} Sunday Service Flyer(s)`);

      return (
        <>
          <h3>Sunday Service Flyers:</h3>
          <div style={{ marginBottom: 25 }}>
            {sunday_service.map((sun, index) => (
              <img src={sun} key={index} alt="" />
            ))}
          </div>
        </>
      );

    case "auditions":
      toast.success(`Showing ${auds.length} Audition Flyer(s)`);

      return (
        <>
          <h3>Audition Flyers:</h3>
          <div style={{ marginBottom: 25 }}>
            {auds.map((aud, index) => (
              <img src={aud} key={index} alt="" />
            ))}
          </div>
        </>
      );
  }
}
