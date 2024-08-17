
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Chip
} from "@material-tailwind/react";

export default function ExercisesListComponent() {

    return (
        // <Card className="mt-6" color="indigo">
        //     <CardBody>
        //         <div className="flex flex-col" style={{ alignItems: "center", textAlign: 'justify' }}>
        //             <div id="editAR" className="mb-2">
        //                 <Typography id="title" variant="h3" className="mb-2">
        //                     Ejercicio 1: La tienda
        //                 </Typography>
        //             </div>
        //             <div className="mb-2">
        //                 <Typography id="description" variant="h6" className="mb-2 px-10">
        //                     Tengo una tienda donde se venden productos variados, entre los
        //                     cuales tenemos PANES, REFRESCOS Y DULCES. Los PANES cuestan 20
        //                     pesos cada uno. Los REFRESCOS cuestan 15 pesos cada uno, y los
        //                     DULCES cuestan 5 pesos cada uno. En la tienda vamos a establecer
        //                     que cuando una persona compra 1 PAN y 1 DULCE, entonces se le
        //                     cobra 30 pesos. Si la persona compra
        //                 </Typography>
        //             </div>
        //         </div>
        //         <Editor
        //             height="50vh"
        //             width="50vw"
        //             defaultValue="// some comment"
        //             theme="vs-dark"
        //             defaultLanguage="javascript"
        //             onChange={(value) => value != "" && setActualCode(value)}
        //         />
        //     </CardBody>
        //     <CardFooter className="pt-0">
        //         <Button onClick={() => console.log(actualCode)}>Revisar</Button>
        //     </CardFooter>
        // </Card>
        <div className="flex flex-row">
            <Card className="mt-6 mr-3" color="blue">
                <CardBody>
                    <div className="flex flex-col" style={{ alignItems: "center", textAlign: 'justify' }}>
                        <div id="editAR" className="mb-2">
                            <Typography id="title" variant="h3" className="mb-2" style={{ cursor: 'pointer' }}>
                                Ejercicio 1: La tienda
                            </Typography>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className="flex flex-1">
                        <Chip color="indigo" value="lenguaje" className="m-1" />
                        <Chip color="cyan" value="nivel" className="m-1" />
                        <Chip color="lime" value="maestro" className="m-1" />
                    </div>
                </CardFooter>
            </Card>
            <Card className="mt-6">
                <CardBody>
                    <div className="flex flex-col" style={{ alignItems: "center", textAlign: 'justify' }}>
                        <div id="editAR" className="mb-2">
                            <Typography id="title" variant="h3" className="mb-2" style={{ cursor: 'pointer' }}>
                                Ejercicio 1: La tienda
                            </Typography>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className="flex flex-1">
                        <Chip color="indigo" value="indigo" className="m-1" />
                        <Chip color="indigo" value="indigo" className="m-1" />
                        <Chip color="indigo" value="indigo" className="m-1" />
                    </div>
                </CardFooter>
            </Card>
            <Card className="mt-6">
                <CardBody>
                    <div className="flex flex-col" style={{ alignItems: "center", textAlign: 'justify' }}>
                        <div id="editAR" className="mb-2">
                            <Typography id="title" variant="h3" className="mb-2" style={{ cursor: 'pointer' }}>
                                Ejercicio 1: La tienda
                            </Typography>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className="flex flex-1">
                        <Chip color="indigo" value="indigo" className="m-1" />
                        <Chip color="indigo" value="indigo" className="m-1" />
                        <Chip color="indigo" value="indigo" className="m-1" />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
