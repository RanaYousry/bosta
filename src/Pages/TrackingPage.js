import React, {
  Fragment,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import DataContext from "../store/data-context";
import styles from "./TrackingPage.module.css";

const TrackingPageContent = lazy(() =>
  import("../components/TrackingPageContent/TrackingPageContent")
);

const TrackingPage = () => {
  let trackingNumber = 7234258; //6636234, 7234258, 9442984,1094442
  const [trackdata, setTrackData] = useState({});

  const dataCtx = useContext(DataContext);

  useEffect(() => {
    fetch(
      `https://tracking.bosta.co/shipments/track/${dataCtx.trackingNumber}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTrackData({
          trackingNum: data.TrackingNumber,
          currstate: data.CurrentStatus.state,
          deliveryDate: data.PromisedDate,
          createDate: data.CreateDate,
          transitEvents: data.TransitEvents,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataCtx.trackingNumber]);
  console.log(trackdata);
  return (
    <Suspense
      fallback={
        <div className={styles.centered}>
          <div className={styles.spinner}></div>
        </div>
      }
    >
      <TrackingPageContent
        trackingNum={trackdata.trackingNum}
        currstate={trackdata.currstate}
        deliveryDate={trackdata.deliveryDate}
        createDate={trackdata.createDate}
        transitEvents={trackdata.transitEvents}
      />
    </Suspense>
  );
};

export default TrackingPage;
