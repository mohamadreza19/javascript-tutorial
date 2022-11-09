import { UiContext } from "../../contextApi/uiContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CpContainer,
  CpTitleBox,
  CpTitle,
  CpTextFieldBox,
  CpTextField,
  CpSelectBox,
  CpSelect,
  CpInputLabel,
} from "./../../styles/createpost";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
export default function CreatePost() {
  const { credit, contents } = useContext(UiContext);

  const navigate = useNavigate();
  console.log(contents);
  useEffect(() => {
    if (!credit) {
      navigate("/login");
    }
  }, []);
  const mapedMenu = contents.map((content, index) => {
    return (
      <MenuItem key={index} value={content.categories[0]}>
        {content.categories[1].replaceAll("-", " ")}
      </MenuItem>
    );
  });
  return (
    <>
      <CpContainer>
        <CpTitleBox>
          <CpTitle variant="h4">ساخت پست</CpTitle>
        </CpTitleBox>
        <CpTextFieldBox>
          <CpTextField label="عنوان" variant="standard" maxRows="300" />
          <CpTextField
            label="بدنه"
            variant="outlined"
            multiline
            rows={5}
            maxRows={10}
          />
        </CpTextFieldBox>
        <CpSelectBox>
          <FormControl fullWidth>
            <CpInputLabel id="cpselect">دسته بندی</CpInputLabel>
            <CpSelect autoWidth labelId="cpselect" label="دسته بندی">
              {mapedMenu}
            </CpSelect>
          </FormControl>
        </CpSelectBox>
      </CpContainer>
    </>
  );
}
