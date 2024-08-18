import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import { ThemeProvider } from "@material-tailwind/react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ExercisesComponent from "./components/ExercisesComponent/ExercisesComponent.jsx";
import ExerciseDetailsComponent from "./components/ExerciseDetailsComponent/ExerciseDetailsComponent.jsx";
import { AppProvider } from "./context/AppProvider/AppProvider.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inicio",
    element: <App />,
  },
  {
    path: "/ejercicios",
    element: <ExercisesComponent />,
  },
  {
    path: "/ejercicios/:numEjercicio",
    element: <ExerciseDetailsComponent />,
  },
  {
    path: "/preguntas",
    element: <App />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <NavbarComponent />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
