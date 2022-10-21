import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import {
  MainContainer,
  MyBox,
  MyLink,
  ParentGrid,
  SearchBox,
  TilteText,
} from "../../styles/appmain";

export default function DesktopMain() {
  return (
    <MainContainer>
      <ParentGrid container>
        <Grid item md={3}>
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
          <MyBox>
            <TilteText variant="caption">برای شروع</TilteText>
            <List>
              <ListItem>
                <ListItemText>
                  <MyLink href="#">چی هست جاوا اسکریپت</MyLink>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <MyLink href="#">نصب ادیتور جاوا اسکریپت</MyLink>
                </ListItemText>
              </ListItem>
            </List>
          </MyBox>
          <MyBox>
            <TilteText variant="caption">پایه های جاوا اسکریپت</TilteText>
            <List>
              <ListItem>
                <ListItemText>
                  <MyLink href="#">سینتکس</MyLink>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <MyLink href="#">متغیر ها</MyLink>
                </ListItemText>
              </ListItem>
            </List>
          </MyBox>
        </Grid>
        <Grid md={9} item></Grid>
      </ParentGrid>
    </MainContainer>
  );
}
