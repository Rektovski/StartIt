import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./main/components/error/ErrorPage";
import Main from "./main/components/main/Main";
import Layout from "./main/Layout";
import Courses from "./main/components/courses/Courses";
import CppPage from "./main/components/main/CppPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={''} element={<Main/>}></Route>
            <Route path={'/courses'} element={<Courses/>}></Route>
            <Route path={'/c++'} element={<CppPage/>}></Route>
        </Route>
        <Route path={'*'} element={<ErrorPage/>}></Route> Error page must be here
      </Routes>
    </BrowserRouter>
  );
}

export default App;
