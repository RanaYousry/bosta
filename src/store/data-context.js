import React, { useState } from "react";

const DataContext = React.createContext({
  trackingNumber: "",
  setTrackingNumber: (trackingNumber) => {},
});

export const DataContextProvider = (props) => {
  const initialTrackingNumber = null;
  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber);

  const setTrackingNumberHandler = (trackingNumber) => {
    setTrackingNumber(trackingNumber);
  };

  const contextValue = {
    trackingNumber: trackingNumber,
    setTrackingNumber: setTrackingNumberHandler,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
