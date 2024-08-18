import ExercisesListComponent from "../ExercisesListComponent/ExercisesListComponent";
import FilterComponent from "../FilterComponent/FilterComponent";
function ExercisesComponent() {
  return (
    <div>
      <div
        className="flex flex-col w-4/6 mx-auto  mt-5"
        style={{ alignItems: "center" }}
      >
        <div className=" flex flex-1" style={{ alignItems: "start" }}>
          <FilterComponent />
        </div>
        <div className="flex flex-1 flex-wrap justify-center">
          <ExercisesListComponent />
        </div>
      </div>
    </div>
  );
}

export default ExercisesComponent;
