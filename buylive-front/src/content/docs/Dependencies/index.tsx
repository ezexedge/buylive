import {
  Container,
  Grid,
  ListItemText,
  ListItem,
  List,
  Divider,
  Typography
} from '@material-ui/core';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from 'src/components/PageHeaderDocs';

function Dependencies() {
  return (
    <ContentWrapper title="Dependencies - Tokyo React Admin Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader heading="Dependencies" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              At it's core, Tokyo React Admin Dashboard is powered by{' '}
              <code>React</code>, <code>Typescript</code>,{' '}
              <code>@emotion/react</code> and <code>Material-UI</code>.
            </Typography>
            <Typography paragraph>
              All dependencies are defined under the root folder, in{' '}
              <code>package.json</code> file. We periodically check and update
              these dependencies with their latest versions to ensure maximum
              compatibility and security.
            </Typography>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Core Dependencies
            </Typography>
            <Typography paragraph>
              These dependencies should not be removed from the progress
              regardless of which page you keep or remove from the downloaded
              template files. They represent the core of the whole project and
              removing any of them will cause an error somewhere in the
              template.
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="@material-ui/core"
                  secondary="^5.0.0-alpha.28"
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="@material-ui/icons"
                  secondary="^5.0.0-alpha.28"
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="@material-ui/lab"
                  secondary="^5.0.0-alpha.28"
                />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="react" secondary="^17.0.1" />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="react-dom" secondary="^17.0.1" />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="react-router" secondary="^5.2.0" />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="react-router-dom" secondary="^5.2.0" />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="react-scripts" secondary="^4.0.1" />
              </ListItem>
            </List>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Unused Dependencies
            </Typography>
            <Typography paragraph>
              Some dependencies are only used for certain pages or sections.
              Based on the pages/sections you'll be using from the Tokyo React
              Admin Dashboard template, you can remove the unused dependencies
              in order to keep things as fast and clean as possible.
            </Typography>
            <Typography paragraph>
              For example, if you are not going to use the "Projects Board"
              application, you can remove the <code>react-beautiful-dnd</code>{' '}
              dependency as that is only used for that specific section.
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
}

export default Dependencies;
