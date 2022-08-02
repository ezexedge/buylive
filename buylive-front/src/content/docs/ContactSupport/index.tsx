import { Container, Typography, Grid } from '@material-ui/core';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from 'src/components/PageHeaderDocs';

function ContactSupport() {
  return (
    <ContentWrapper title="Contact Support - Tokyo React Admin Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader heading="Contact Support" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ mb: 2 }} variant="h2">
              Support Tickets
            </Typography>
            <Typography paragraph>
              If you need help you can open a support ticket by sending an email
              to <code>support@bloomui.freshdesk.com</code>
            </Typography>
            <br />
            <Typography sx={{ mb: 2 }} variant="h2">
              Live Chat
            </Typography>
            <Typography paragraph>
              If you want to ask us something regarding Tokyo React Admin
              Dashboard, or have another pre-sale question like licensing terms
              or others, feel free to contact us using the live chat widget from
              the right bottom of this screen.
            </Typography>
            <Typography paragraph>
              Please note that we do not offer support via our live chat system,
              as we wouldn't be able to analyse the situation in due time.
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

export default ContactSupport;
