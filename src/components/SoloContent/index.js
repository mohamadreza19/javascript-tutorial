import { Skeleton, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UiContext } from "../../contextApi/uiContext";
import {
  ContinerSoloContent,
  TitleBox,
  Title,
  BodyBox,
  Body,
} from "../../styles/solocontent";
import { ColorsDark } from "../../styles/theme";

export default function SoloContent() {
  const { title } = useParams();
  const { loading, setLoading, contents, content, setContent } =
    useContext(UiContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(
    function () {
      const setDataContent = async () => {
        try {
          setLoading(true);
          const matchedContent = contents.find((content) => {
            return content.title === title;
          });

          if (!matchedContent) return navigate("/404");
          setContent((draft) => matchedContent);
          setLoading((draft) => false);
        } catch (error) {
          console.log(error);
        }
      };

      setDataContent();
    },
    [contents.length, pathname]
  );
  useEffect(() => {
    return () => {
      setContent(() => {
        return {};
      });
    };
  }, []);
  return (
    <>
      {loading ? (
        <>
          <TitleBox>
            <Title>
              <Skeleton
                sx={{ bgcolor: ColorsDark.gray }}
                width={"60%"}
                variant="text"
              ></Skeleton>
            </Title>
          </TitleBox>
          <BodyBox>
            <Body variant="body1">
              <Skeleton
                sx={{ bgcolor: ColorsDark.gray, height: "128px" }}
                variant="text"
              ></Skeleton>
            </Body>
          </BodyBox>
        </>
      ) : (
        <>
          {Object.keys(content).length > 0 && (
            <ContinerSoloContent>
              <TitleBox>
                <Title variant="h5">{content.title.replaceAll("-", " ")}</Title>
              </TitleBox>
              <BodyBox>
                <Body variant="body1">{content.body}</Body>
              </BodyBox>
            </ContinerSoloContent>
          )}
        </>
      )}
    </>
  );
}
