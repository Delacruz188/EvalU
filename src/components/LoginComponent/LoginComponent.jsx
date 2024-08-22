import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { validateLogin } from "src@hooks/useValidations";
import { useDispatch } from 'react-redux';
import { login, logout } from '../../redux/reducers/userSlice';
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [actualUser, setActualUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (actualUser.isAuthenticated) {
      dispatch(login(actualUser));
      navigate('/ejercicios');
    }
  }, [actualUser, dispatch, navigate]);

  return (
    <div className="flex justify-center">
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 mt-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Bienvenido
            </Typography>
          </CardHeader>
          <Input
            label="Email"
            size="lg"
            onBlur={(e) =>
              e.target.value.trim() !== "" && setEmail(e.target.value)
            }
          />
          <Input
            label="Password"
            size="lg"
            onBlur={(e) =>
              e.target.value.trim() !== "" && setPwd(e.target.value)
            }
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="outlined"
            fullWidth
            color="black"
            onClick={() => {
              if (validateLogin(email, pwd).valid) {
                setActualUser({
                  email,
                  pwd,
                  isAuthenticated: true
                });
              }
            }}
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            <Typography
              as="a"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold cursor-pointer"
              onClick={() => {
                dispatch(logout({
                  isAuthenticated: false
                }));
              }}
            >
              Logout
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
