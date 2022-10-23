import { ArrowBackIos, Brightness1 } from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useUiContext } from "../../contextApi/uiContext";
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
} from "../../styles/appmain";

export default function DesktopMain() {
  const { contents } = useUiContext();

  console.log(contents);

  const previewMaped = contents.map((content, index) => {
    return (
      <SectionBox key={index}>
        <Typography color="primary" variant="h5">
          بخش{index + 1}. {content.categories[1]}
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              <MyLink href="#">{content.title}</MyLink>
              <TextPatch variant="body1">_{content.shortDescription}</TextPatch>
            </ListItemText>
          </ListItem>
        </List>
      </SectionBox>
    );
  });

  const sideBarMaped = contents.map((content, index) => {
    return (
      <MyBox key={index}>
        <TilteText variant="caption">{content.categories[1]}</TilteText>
        <List>
          <ListItem>
            <ListItemText>
              <MyLink href="#">{content.title}</MyLink>
            </ListItemText>
          </ListItem>
        </List>
      </MyBox>
    );
  });
  return (
    <MainContainer>
      <ParentGrid container>
        <Grid md={8} xs={12} item>
          <MyBox>
            <header>
              <Typography color="primary" variant="h4">
                اموزش جاوا اسکریپت
              </Typography>
            </header>
            <InfoBox>
              <InfoContectText color="secondary" variant="body1">
                به وب سایت JavaScriptTutorial.net خوش آمدید! این آموزش جاوا
                اسکریپت به شما کمک می کند زبان برنامه نویسی جاوا اسکریپت را از
                ابتدا به سرعت و به طور موثر یاد بگیرید.
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
                    JavaScriptTutorial.net مکان خوبی برای شروع است.
                  </InfoContectText>
                </InfoListItem>
              </List>
            </InfoBox>
          </MyBox>
          {previewMaped}
        </Grid>
        <Grid item md={4} xs={12}>
          <Box>
            <SearchBox
              className="bb"
              id="outlined-basic"
              label="جست و جو"
              variant="outlined"
              fullWidth
              color="secondary"
              placeholder="حست جو ..."
              size="big"
            />
          </Box>
          {sideBarMaped}
        </Grid>
      </ParentGrid>
    </MainContainer>
  );
}
