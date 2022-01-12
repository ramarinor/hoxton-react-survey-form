import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

/*
This is what your initial state could look like:

  const initialForm = {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [],
  worstFeatures: [],
  timeSpent: []
};

*/

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
