import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import { Container, Grid } from '@material-ui/core';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TimeSpent from './TimeSpent';
import TopTrainers from './TopTrainers';
import Leaderboard from './Leaderboard';
import UpcomingConferences from './UpcomingConferences';
import RecentCourses from './RecentCourses';

function DashboardLearning() {
  return (
    <ContentWrapper title="Learning Dashboard">
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
            <TimeSpent />
          </Grid>
          <Grid item xs={12} md={6}>
            <TopTrainers />
          </Grid>
          <Grid item xs={12} md={6}>
            <Leaderboard />
          </Grid>
          <Grid item xs={12}>
            <UpcomingConferences />
          </Grid>
          <Grid item xs={12}>
            <RecentCourses />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default DashboardLearning;
