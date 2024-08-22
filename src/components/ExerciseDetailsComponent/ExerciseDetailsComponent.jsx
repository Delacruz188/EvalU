import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Editor from "@monaco-editor/react";
import { useSelector } from "react-redux";
import CodeViewerComponent from "src@components/CodeViewerComponent/CodeViewerComponent";

export default function ExercisesListComponent() {
  const [actualCode, setActualCode] = useState("");
  // const [actualInfo, setActualInfo] = useState({});
  const exercise = useSelector((state) => state.exercise);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, [exercise, user]);

  return (
    <div className="flex justify-center">
      <Card className="mt-6" color="indigo">
        <CardBody>
          <div
            className="flex flex-col"
            style={{ alignItems: "center", textAlign: "justify" }}
          >
            <div id="editAR" className="mb-2">
              <Typography id="title" variant="h3" className="mb-2">
                {exercise.title}
              </Typography>
            </div>
            <div className="mb-2">
              <Typography id="description" variant="h6" className="mb-2 px-10">
                {exercise.description}
              </Typography>
            </div>
          </div>
          <Editor
            height="50vh"
            width="50vw"
            defaultValue="// escribe tu respuesta :D"
            theme="vs-dark"
            defaultLanguage="javascript"
            onChange={(value) => value.trim() != "" && setActualCode(value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={() =>
              console.log({
                id: exercise.id,
                actualCode,
              })
            }
          >
            Revisar
          </Button>
        </CardFooter>
        <CodeViewerComponent code={actualCode} />
      </Card>
    </div>
  );
}
