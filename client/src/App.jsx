import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AlertBox from "./components/AlertBox";
import Home from "./pages/Home";
const NotFound = lazy(() => import("./pages/NotFound"));
const Redirect = lazy(() => import("./pages/Redirect"));

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root hasNav={true} />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<Root hasNav={false} />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/:id" element={<Redirect />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

const Root = ({ hasNav = true }) => {
  return (
    <>
      {hasNav && <Navbar />}
      <main className={hasNav ? "main" : "main no-nav"}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <AlertBox />
    </>
  );
};

export default App;
