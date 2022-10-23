import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useUiContext } from "../../contextApi/uiContext";
import {
  ContinerSoloContent,
  TitleBox,
  Title,
  BodyBox,
  Body,
} from "../../styles/solocontent";

export default function SoloContent() {
  const { title } = useParams();
  const { contents, content, setContent } = useUiContext();

  useEffect(function () {
    const matchedContent = contents.find((content) => {
      return content.title === title;
    });
    console.log(matchedContent);
    setContent(matchedContent);
  }, []);

  return (
    <>
      <ContinerSoloContent>
        <TitleBox>
          <Title variant="h5">{content.title.replaceAll("-", " ")}</Title>
        </TitleBox>
        <BodyBox>
          <Body variant="body1">{content.body}</Body>
        </BodyBox>
      </ContinerSoloContent>
    </>
  );
}
