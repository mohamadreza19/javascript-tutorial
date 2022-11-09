import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import { registeAuthor } from "../../services";
import {
  RrBox,
  RrTitle,
  RrTitleBox,
  RtSubmitButton,
  RtSubmitButtonBox,
  RtTextField,
  RtTextFieldBox,
} from "../../styles/authentication";

export default function Register() {
  const [email, setEmail] = useImmer({
    email: "",
    err: "",
  });
  const [password, setPassword] = useImmer({ password: "", err: "" });
  const [repeatpassword, setRepeatpassword] = useImmer({
    repeatpassword: "",
    err: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await registeAuthor({
        email: email.email,
        password: password.password,
        repeatpassword: repeatpassword.repeatpassword,
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
        setRepeatpassword({
          repeatpassword: "",
          err: "",
        });
        navigate("/");
      }
    } catch (error) {
      error.response.data.details.forEach((s) => {
        if (s.field === Object.keys(email)[0]) {
          setEmail((draft) => {
            draft.err = s.message;
          });
        } else if (s.field === Object.keys(password)[0]) {
          setPassword((draft) => {
            draft.err = s.message;
          });
        } else if (s.field === Object.keys(repeatpassword)[0]) {
          setRepeatpassword((draft) => {
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
          <RrTitle variant="h3">ثبت نام نویسنده</RrTitle>
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
          <RtTextField
            name="repeatpassword"
            type="password"
            variant="filled"
            label="تکرار پسورد"
            error={repeatpassword.err ? true : false}
            value={repeatpassword.repeatpassword}
            helperText={repeatpassword.err ? repeatpassword.err : " "}
            onChange={(e) => {
              setRepeatpassword((draft) => {
                draft.repeatpassword = e.target.value;
                draft.err = "";
              });
            }}
          />
        </RtTextFieldBox>
        <RtSubmitButtonBox>
          <RtSubmitButton onClick={handleSubmit} variant="contained">
            ثبت نام
          </RtSubmitButton>
        </RtSubmitButtonBox>
      </RrBox>
    </>
  );
}
