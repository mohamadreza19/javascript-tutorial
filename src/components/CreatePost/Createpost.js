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
  CpSubmitButtonBox,
  CpSubmitButton,
} from "./../../styles/createpost";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useImmer } from "use-immer";
import { CreateContent } from "../../services";
export default function CreatePost() {
  const { credit, contents, setLoading } = useContext(UiContext);
  const navigate = useNavigate();
  const [title, setTitle] = useImmer({
    title: "",
    err: "",
  });
  const [shortDescription, setShortDescription] = useImmer({
    shortDescription: "",
    err: "",
  });
  const [body, setBody] = useImmer({
    body: "",
    err: "",
  });
  const [categories, setCategories] = useImmer({
    categories: "",
    err: "",
  });

  useEffect(() => {
    if (!credit) {
      navigate("/login");
    }
  }, []);

  const uniquecategoriesArray = [
    ...new Set(contents.map((content, index) => content.categories[1])),
  ];
  const mapedMenu = uniquecategoriesArray.map((category, index) => {
    return (
      <MenuItem key={index} value={category}>
        {category.replaceAll("-", " ")}
      </MenuItem>
    );
  });

  const handleCreatePost = async () => {
    setLoading(() => true);
    const feilds = {
      title: title.title,
      shortdescription: shortDescription.shortDescription,
      body: body.body,
      categories: categories.categories,
    };

    try {
      const res = await CreateContent(feilds);

      if (res.status === 200) {
        setTitle({
          title: "",
          err: "",
        });
        setShortDescription({
          shortDescription: "",
          err: "",
        });
        setBody({
          body: "",
          err: "",
        });
        setCategories({
          categories: "",
          err: "",
        });
        setLoading(() => false);
        return navigate("/");
      }
    } catch (error) {
      setLoading(() => true);
      error.response.data.details.forEach((s) => {
        console.log(error);
        if (s.field === Object.keys(title)[0]) {
          setTitle((draft) => {
            draft.err = s.message;
          });
          console.log("title");
        } else if (s.field === Object.keys(shortDescription)[0]) {
          setShortDescription((draft) => {
            draft.err = s.message;
          });
        } else if (s.field === Object.keys(body)[0]) {
          setBody((draft) => {
            draft.err = s.message;
          });
        }
      });
      setLoading(() => false);
    }
  };
  return (
    <>
      <CpContainer>
        <CpTitleBox>
          <CpTitle variant="h4">ساخت پست</CpTitle>
        </CpTitleBox>
        <CpTextFieldBox>
          <CpTextField
            name="title"
            onChange={(event) => {
              setTitle((draft) => {
                draft.title = event.target.value;
                draft.err = "";
              });
            }}
            error={title.err ? true : false}
            value={title.title}
            helperText={title.err ? title.err : ""}
            label="عنوان"
            variant="standard"
          />

          <CpTextField
            name="body"
            onChange={(event) => {
              setBody((draft) => {
                draft.body = event.target.value;
                draft.err = "";
              });
            }}
            error={body.err ? true : false}
            value={body.body}
            helperText={body.err ? body.err : ""}
            label="بدنه"
            variant="outlined"
            multiline
            rows={5}
          />
        </CpTextFieldBox>
        <CpTextFieldBox>
          <CpTextField
            name="shortdescription"
            onChange={(event) => {
              setShortDescription((draft) => {
                draft.shortDescription = event.target.value;
                draft.err = "";
              });
            }}
            error={shortDescription.err ? true : false}
            value={shortDescription.shortDescription}
            helperText={shortDescription.err ? shortDescription.err : ""}
            label="توضیح  کوتاه"
            variant="standard"
          />
        </CpTextFieldBox>
        <CpSelectBox>
          <FormControl fullWidth>
            <CpInputLabel id="cpselect">دسته بندی</CpInputLabel>
            <CpSelect
              name="categories"
              onChange={(event) => {
                setCategories((draft) => {
                  draft.categories = event.target.value;
                });
              }}
              value={categories.categories}
              autoWidth
              labelId="cpselect"
              label="دسته بندی"
            >
              {mapedMenu}
            </CpSelect>
          </FormControl>
        </CpSelectBox>
        <CpSubmitButtonBox>
          <CpSubmitButton onClick={handleCreatePost}>ساخت پست</CpSubmitButton>
        </CpSubmitButtonBox>
      </CpContainer>
    </>
  );
}
