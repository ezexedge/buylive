import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import AudienceOverview from './AudienceOverview';
import Conversions from './Conversions';
import TopLandingPages from './TopLandingPages';
import ActiveReferrals from './ActiveReferrals';
import PendingInvitations from './PendingInvitations';
import BounceRate from './BounceRate';
import ConversionsAlt from './ConversionsAlt';
import SessionsByCountry from './SessionsByCountry';
import TrafficSources from './TrafficSources';
import { Container, Grid } from '@material-ui/core';

function DashboardAnalytics() {
  return (
    <ContentWrapper title="Analytics Dashboard">
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <AudienceOverview />
          </Grid>
          <Grid item md={5} xs={12}>
            <Conversions />
          </Grid>
          <Grid item md={7} xs={12}>
            <TopLandingPages />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <Grid
              container
              spacing={3}
              direction="row"
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid item sm={6} xs={12}>
                <ActiveReferrals />
              </Grid>
              <Grid item sm={6} xs={12}>
                <PendingInvitations />
              </Grid>
              <Grid item sm={6} xs={12}>
                <BounceRate />
              </Grid>
              <Grid item sm={6} xs={12}>
                <ConversionsAlt />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <SessionsByCountry />
          </Grid>
          <Grid item xs={12}>
            <TrafficSources />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default DashboardAnalytics;
