import Layout from "./components/Header/Layout";
import { Route, Routes } from "react-router-dom";
import TrackingPage from "./Pages/TrackingPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/trackShipment" element={<TrackingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
