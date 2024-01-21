import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import HomePage from "./HomePage";
import PrivacyNotice from "./PrivacyNotice";
import DeleteAccount from "./DeleteAccount";
import CreateAccount from "./CreateAccount";
import Footer from "./Footer";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/privacy-notice", element: <PrivacyNotice /> },
    { path: "/delete-account", element: <DeleteAccount /> },
    { path: "/create-account", element: <CreateAccount /> },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
