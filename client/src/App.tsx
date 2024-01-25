import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Board } from "./pages/Board";
import Login from "./pages/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/boards" element={<Board />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
