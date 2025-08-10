import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Transactions from "./pages/transactions.jsx";
import Home from "./pages/home.jsx";
import Settings from "./pages/settings.jsx";
import Layout from "./components/layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
