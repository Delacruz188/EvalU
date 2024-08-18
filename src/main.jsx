import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ExercisesComponent from "./components/ExercisesComponent/ExercisesComponent.jsx";
import ExerciseDetailsComponent from "./components/ExerciseDetailsComponent/ExerciseDetailsComponent.jsx";

//redux
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';



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
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <NavbarComponent />
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
