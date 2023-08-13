import Header from "./components/Header/index.tsx";
import Dash from "./components/Dash/index.tsx";

function App() {
 
  return (
    <>
      <Header />
      <Dash newValue={215.78} valueType='tbd' />
    </>
  );
}

export default App;
