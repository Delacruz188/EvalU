import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import ExercisesComponent from "./components/ExercisesComponent/ExercisesComponent.jsx";
import ExerciseDetailsComponent from "./components/ExerciseDetailsComponent/ExerciseDetailsComponent.jsx";
import LoginComponent from "src@components/LoginComponent/LoginComponent.jsx";

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
  {
    path: "/login",
    element: <LoginComponent />,
  },
]);

export default router;
