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

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <AlertBox />
    </>
  );
};

export default App;
