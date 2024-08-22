import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Chip,
} from "@material-tailwind/react";

import { EXERCISES as Exercises } from "../../constants/Exercises";
import { useDispatch } from "react-redux";
import { setExerciseInfo } from "../../redux/reducers/exerciseSlice";

export default function ExercisesListComponent() {
  const [actualExercise, setActualExercise] = useState({});
  const dispatch = useDispatch(); // Corrección del error tipográfico

  useEffect(() => {
    dispatch(setExerciseInfo(actualExercise)); // Llamada directa a dispatch
    console.log(actualExercise);
  }, [actualExercise, dispatch]);

  const exercisesList = Exercises.map((exercise, index) => {
    return (
      <div className="flex flex-col w-min" key={index}>
        <Card className="mt-6 mr-3 flex-1" color="blue">
          <CardBody>
            <div
              className="flex flex-col"
              style={{ alignItems: "center", textAlign: "justify" }}
            >
              <div id="editAR" className="mb-2">
                <Typography
                  id="title"
                  variant="h3"
                  className="mb-2"
                  style={{ cursor: "pointer" }}
                >
                  <a
                    href={"ejercicios/" + `${exercise.id}`}
                    onClick={() => setActualExercise(exercise)}
                  >
                    {exercise.title}
                  </a>
                </Typography>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex flex-1">
              <Chip color="cyan" value={exercise.difficulty} className="m-1" />
              <Chip color="lime" value={exercise.language} className="m-1" />
              <Chip color="indigo" value={exercise.points} className="m-1" />
              <Chip color="lime" value={exercise.teacher} className="m-1" />
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  });

  return <> {exercisesList} </>;
}
