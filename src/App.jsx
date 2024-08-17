import ExercisesListComponent from "./components/ExercisesListComponent/ExercisesListComponent";
import FilterComponent from "./components/FilterComponent/FilterComponent";

import "./App.css";

function App() {
  return (
    <div className="flex justify-center mx-auto w-64 mt-5">
      <FilterComponent />
      <ExercisesListComponent />
    </div>
  );
}

export default App;
