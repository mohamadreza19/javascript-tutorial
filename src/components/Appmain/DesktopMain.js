import { ArrowBackIos } from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";

import { Outlet, useLocation } from "react-router-dom";
import { UiContext } from "../../contextApi/uiContext";
import {
  InfoBox,
  InfoContectText,
  MainContainer,
  MyBox,
  MyLink,
  ParentGrid,
  SearchBox,
  TilteText,
  InfoListItem,
  SectionBox,
  TextPatch,
  SearchBoxBox,
} from "../../styles/appmain";

export default function DesktopMain() {
  const { contents, setLoading } = useContext(UiContext);
  const { pathname } = useLocation();

  const PreviewMaped = function () {
    const uniquecategoriesArray = [
      ...new Set(contents.map((content, index) => content.categories[1])),
    ];
    const previewMaped = uniquecategoriesArray.map((category, index) => {
      return (
        <SectionBox key={index}>
          <Typography color="primary" variant="h5">
            بخش{index + 1}. {category.replaceAll("-", " ")}
          </Typography>
          {contents.map((preview, index) => {
            if (preview.categories[1] === category) {
              return (
                <List key={index}>
                  <ListItem>
                    <ListItemText>
                      <MyLink href={`/category/${preview.title}`}>
                        {preview.title.replaceAll("-", " ")}
                      </MyLink>
                      <TextPatch variant="body1">
                        _{preview.shortDescription}
                      </TextPatch>
                    </ListItemText>
                  </ListItem>
                </List>
              );
            }
          })}
        </SectionBox>
      );
    });
    return <>{previewMaped}</>;
  };

  const SideBarMaped = () => {
    const uniquecategoriesArray = [
      ...new Set(contents.map((content, index) => content.categories[1])),
    ];

    const sideBarMaped = uniquecategoriesArray.map((category, index) => {
      return (
        <MyBox key={index}>
          <TilteText variant="caption">
            {category.replaceAll("-", " ")}
          </TilteText>
          {contents.map((content, index) => {
            if (content.categories[1] === category)
              return (
                <List key={index}>
                  <ListItem>
                    <ListItemText>
                      <MyLink href={`/category/${content.title}`}>
                        {content.title.replaceAll("-", " ")}
                      </MyLink>
                    </ListItemText>
                  </ListItem>
                </List>
              );
          })}
        </MyBox>
      );
    });
    return <>{sideBarMaped}</>;
  };
  return (
    <MainContainer>
      <ParentGrid container>
        <Grid md={8} xs={12} item>
          {pathname === "/" ? (
            <>
              <MyBox>
                <header>
                  <Typography color="primary" variant="h4">
                    اموزش جاوا اسکریپت
                  </Typography>
                </header>
                <InfoBox>
                  <InfoContectText color="secondary" variant="body1">
                    به وب سایت JavaScriptTutorial خوش آمدید! این آموزش جاوا
                    اسکریپت به شما کمک می کند زبان برنامه نویسی جاوا اسکریپت را
                    از ابتدا به سرعت و به طور موثر یاد بگیرید.
                  </InfoContectText>
                  <InfoContectText color="secondary" variant="body1">
                    اگر شما ...
                  </InfoContectText>
                  <List>
                    <InfoListItem>
                      <InfoContectText color="secondary" variant="body1">
                        <ArrowBackIos fontSize="small" />
                        مطمئن نیستید از کجا شروع کنید
                      </InfoContectText>
                    </InfoListItem>
                    <InfoListItem>
                      <InfoContectText color="secondary" variant="body1">
                        <ArrowBackIos fontSize="small" />
                        از کپی پیست کردن کد بقیه خسته شدی
                      </InfoContectText>
                    </InfoListItem>
                    <InfoListItem>
                      <InfoContectText color="secondary" variant="body1">
                        <ArrowBackIos fontSize="small" />
                        دوست داری بیشتر بفهمی
                      </InfoContectText>
                    </InfoListItem>
                    <InfoListItem>
                      <InfoContectText color="secondary" variant="body1">
                        JavaScriptTutorial مکان خوبی برای شروع است.
                      </InfoContectText>
                    </InfoListItem>
                  </List>
                </InfoBox>
              </MyBox>
              <PreviewMaped />
            </>
          ) : (
            <Outlet />
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          <SearchBoxBox>
            <SearchBox
              className="bb"
              id="outlined-basic"
              label="جست و جو"
              variant="outlined"
              fullWidth
              color="secondary"
              placeholder="جست جو ..."
              size="big"
            />
          </SearchBoxBox>
          <SideBarMaped />
        </Grid>
      </ParentGrid>
    </MainContainer>
  );
}
