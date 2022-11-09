import { useImmer } from "use-immer";
import Cookie from "universal-cookie";
import { LoginAuthor } from "./../../services/index";
import {
  RrBox,
  RrTitle,
  RrTitleBox,
  RtSubmitButton,
  RtSubmitButtonBox,
  RtTextField,
  RtTextFieldBox,
} from "../../styles/authentication";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UiContext } from "./../../contextApi/uiContext";
const cookie = new Cookie();
export default function Login() {
  const { setCredit } = useContext(UiContext);
  const [email, setEmail] = useImmer({
    email: "",
    err: "",
  });
  const [password, setPassword] = useImmer({
    password: "",
    err: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log("submit");
    try {
      const res = await LoginAuthor({
        email: email.email,
        password: password.password,
      });

      if (res.status === 200) {
        setEmail({
          email: "",
          err: "",
        });
        setPassword({
          password: "",
          err: "",
        });
        const token = res.data.details.token;
        console.log(token);
        cookie.set("credit", token, {
          sameSite: "strict",
          path: "/",
          expire: new Date(new Date().getTime() * 1 * 3600 * 1000),
        });
        setCredit(true);
        navigate("/create-post");
      }
    } catch (error) {
      error.response.data.details.forEach((s) => {
        if (s.field === Object.keys(email)[0]) {
          setEmail((draft) => {
            draft.err = s.message;
          });
          console.log("email");
        } else if (s.field === Object.keys(password)[0]) {
          setPassword((draft) => {
            draft.err = s.message;
          });
        }
      });
    }
  };
  return (
    <>
      <RrBox>
        <RrTitleBox>
          <RrTitle variant="h3">ورود</RrTitle>
        </RrTitleBox>
        <RtTextFieldBox>
          <RtTextField
            name="email"
            variant="filled"
            label="ایمیل"
            error={email.err ? true : false}
            value={email.email}
            helperText={email.err ? email.err : ""}
            onChange={(e) => {
              setEmail((draft) => {
                draft.email = e.target.value;
                draft.err = "";
              });
            }}
          />
          <RtTextField
            name="password"
            type="password"
            variant="filled"
            label="پسورد"
            error={password.err ? true : false}
            value={password.password}
            helperText={password.err ? password.err : ""}
            onChange={(e) => {
              setPassword((draft) => {
                draft.password = e.target.value;
                draft.err = "";
              });
            }}
          />
        </RtTextFieldBox>
        <RtSubmitButtonBox>
          <RtSubmitButton onClick={handleSubmit} variant="contained">
            ورود
          </RtSubmitButton>
        </RtSubmitButtonBox>
      </RrBox>
    </>
  );
}
