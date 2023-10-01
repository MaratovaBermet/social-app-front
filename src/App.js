import Layout from "./components/layout/Header/Header";
import {Routes, Route} from "react-router-dom"
import Authorization from "./pages/Authorization/Authorization";
import Home from "./pages/Home/Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path='/auth' element={<Authorization/>} />
            <Route index element={<Home/>}/>
        </Route>
      </Routes>

  );

}

export default App;
