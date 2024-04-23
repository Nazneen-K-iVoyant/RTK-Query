import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Read from "./components/Read";
import Header from "./components/Header";
import { Provider } from "react-redux";
import AddEdit from "./components/AddEdit";
import { store } from "./store";
import Create from "./components/Create";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Read />,
      },
      {
        path: "/create",
        element: <AddEdit />,
      },
      {
        path: "/edit/:id",
        element: <AddEdit />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;