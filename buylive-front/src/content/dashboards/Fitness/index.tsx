import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@material-ui/core';
import Footer from 'src/components/Footer';

import Steps from './Steps';
import Energy from './Energy';
import Water from './Water';
import Calories from './Calories';
import Activity from './Activity';
import TrainingPrograms from './TrainingPrograms';
import UpcomingEvents from './UpcomingEvents';
import ProfileGoals from './ProfileGoals';
import MonthlyGoalsTarget from './MonthlyGoalsTarget';
import CaloriesAlt from './CaloriesAlt';
import ProteinAlt from './ProteinAlt';
import CarbsAlt from './CarbsAlt';
import FatAlt from './FatAlt';
import HeartRate from './HeartRate';
import Running from './Running';
import Swimming from './Swimming';

function DashboardFitness() {
  return (
    <ContentWrapper title="Fitness Dashboard">
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
          <Grid item lg={6} xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item sm={6} md={3} lg={6} xs={12}>
                <Steps />
              </Grid>
              <Grid item sm={6} md={3} lg={6} xs={12}>
                <Energy />
              </Grid>
              <Grid item sm={6} md={3} lg={6} xs={12}>
                <Water />
              </Grid>
              <Grid item sm={6} md={3} lg={6} xs={12}>
                <Calories />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Activity />
          </Grid>
          <Grid item xs={12}>
            <TrainingPrograms />
          </Grid>
          <Grid item md={6} xs={12}>
            <UpcomingEvents />
          </Grid>
          <Grid item md={6} xs={12}>
            <ProfileGoals />
          </Grid>
          <Grid item md={6} xs={12}>
            <MonthlyGoalsTarget />
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item sm={6} xs={12}>
                <CaloriesAlt />
              </Grid>
              <Grid item sm={6} xs={12}>
                <ProteinAlt />
              </Grid>
              <Grid item sm={6} xs={12}>
                <CarbsAlt />
              </Grid>
              <Grid item sm={6} xs={12}>
                <FatAlt />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} md={4} xs={12}>
            <HeartRate />
          </Grid>
          <Grid item sm={6} md={4} xs={12}>
            <Running />
          </Grid>
          <Grid item md={4} xs={12}>
            <Swimming />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default DashboardFitness;
