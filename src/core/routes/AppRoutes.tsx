import { createBrowserRouter } from "react-router-dom";
import { Login } from "../auth/Login";
import IdealForm from "../../features/IdealFeatures/Components/IdealFormComponent/IdealForm.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/ideal-form",
    element: <IdealForm />,
  },
]);
