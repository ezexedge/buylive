import { Container, Grid, Typography } from '@material-ui/core';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from 'src/components/PageHeaderDocs';

function Introduction() {
  return (
    <ContentWrapper title="Introduction - Tokyo React Admin Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader heading="Introduction" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ mb: 2 }} variant="h2">
              Welcome
            </Typography>
            <Typography paragraph>
              Tokyo React Admin Dashboard includes multiple pages that can be
              used to give you a head start when starting you start developing a
              web app. The current release includes 12 different dashboard
              pages, 6 applications, 5 management sections, 5 color schemes and
              over 130 components.
            </Typography>
            <Typography paragraph>
              We've built this template with performance in mind, so all pages
              will get a 96 or more score on Google Lighthouse performance
              testing. You can inspect the template performance by opening the
              Google Chrome Inspector and moving to the last tab named
              "Lighthouse". On that tab click on "Generate report".
            </Typography>
            <Typography paragraph>
              We designed 5 different color schemes that can be switched from
              the Settings dropdown in the live preview header section. There
              are 3 light color schemes and two dark ones.
            </Typography>
            <Typography paragraph>
              The documentation include basic examples on how to work with the
              template or how to remove certain parts that you will not be using
              in your production application.
            </Typography>
            <Typography paragraph>
              Tokyo React Admin Dashboard is based on{' '}
              <code>Create React App</code> from Facebook. If required, you can
              use the eject command to eject the project instance. Read more
              about ejecting here:
              https://create-react-app.dev/docs/available-scripts/#npm-run-eject
            </Typography>
            <br />
            <Typography sx={{ mb: 2 }} variant="h2">
              Feedback
            </Typography>
            <Typography paragraph>
              We try to constantly improve all our products. Any feedback or
              suggestions you might have will help us a lot in developing the
              next release. If you have any suggestions, bugs report or issue,
              you can open a ticket by sending an email to
              support@bloomui.freshdesk.com
            </Typography>
            <br />
            <Typography sx={{ mb: 2 }} variant="h2">
              Custom Pages for Free
            </Typography>
            <Typography paragraph>
              Based on our experience in developing applications user interfaces
              we chose popular niche areas for the dashboard pages, applications
              and management sections. We understand that these might not be
              enough for your app's needs. That's why we are offering to build
              custom pages based on your needs, if we feel that your requested
              page design might benefit multiple customers or if they aren't too
              specific to a particular products niche.
            </Typography>
            <Typography paragraph>
              All you have to do is email us at support@bloomui.freshdesk.com
              with a wireframe, prototype or design for the requested pages.
              After our initial review, we will contact you and let you know if
              we'll be integrating your custom page in Tokyo React Admin
              Dashboard.
            </Typography>
            <Typography paragraph></Typography>
            <Typography paragraph>
              Please note that we reserve the right to reject any or all custom
              page requests that are made for free custom pages.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
}

export default Introduction;
