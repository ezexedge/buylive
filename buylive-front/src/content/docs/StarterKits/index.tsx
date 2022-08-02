import { Container, Typography, Grid } from '@material-ui/core';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from 'src/components/PageHeaderDocs';

function StarterKits() {
  return (
    <ContentWrapper title="Starter Kits - Tokyo React Admin Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader heading="Starter Kits" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              We know how important is it for everyone to get started as soon as
              possible on working on their next project. This is the reason
              we're including starter kits with Tokyo React Admin Dashboard.
            </Typography>
            <Typography paragraph>
              In release version <code>1.0.0</code> we included a starter kit
              that is a slimmed down version of the Live Preview you probably
              already saw. It contains just a few sidebar menu items, a single
              page to help you get started, a single integrated color scheme.
            </Typography>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Roadmap
            </Typography>
            <Typography paragraph>
              We will be adding more starter kits in next releases that will
              include different layout variations.
            </Typography>
            <Typography paragraph>
              For example, a different starter kit would be one in which the
              sidebar is minimized and the sidebar menu consists only of icons
              without labels. Or, a starter kit with a different main content
              setup or different header content arrangement.
            </Typography>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Integrating in existing apps
            </Typography>
            <Typography paragraph>
              We do not have an universal recipe for using Tokyo React Admin
              Dashboard for existing projects, as they may vary in project
              structure, but we are sure that using a starter kit will be easier
              than integrating the whole main template files.
            </Typography>
            <Typography paragraph>
              After you integrate the starter kit in your project, you could go
              copy code snippets from the main template, as needed.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
}

export default StarterKits;
