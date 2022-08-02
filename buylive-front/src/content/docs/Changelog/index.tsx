import { Container, Grid, List, ListItem, Typography } from '@material-ui/core';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from 'src/components/PageHeaderDocs';

function Changelog() {
  return (
    <ContentWrapper title="Changelog - Tokyo React Admin Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader heading="Changelog" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Version 1.5.0
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>9 April 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>
                fix wrong date formatting in{' '}
                <code>src\content\management\Users\single\SecurityTab.tsx</code>
              </ListItem>
              <ListItem>
                Added two new layouts: "Accent Header", "Accent Sidebar"
              </ListItem>
              <ListItem>Fixed pagination active item shadow</ListItem>
              <ListItem>Fixed ref prop for Projects Board card</ListItem>
              <ListItem>Replaced react-helmet with react-helmet-async</ListItem>
              <ListItem>Added react-ga for Google Analytics tracking</ListItem>
              <ListItem>
                Added a global component for all page title sections
              </ListItem>
              <ListItem>
                Changed live preview dummy password to a different value
              </ListItem>
              <ListItem>
                Added Javascript template version
              </ListItem>
              <ListItem>Added Sketch design files</ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Version 1.0.0
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>6 April 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>initial version, first release</ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
}

export default Changelog;
