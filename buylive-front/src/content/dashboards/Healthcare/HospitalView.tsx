import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeaderHospital';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Container, Grid } from '@material-ui/core';
import OverallStatus from './OverallStatus';
import AppointmentsAlt from './AppointmentsAlt';
import Surgeries from './Surgeries';
import Doctors from './Doctors';
import Departments from './Departments';
import RecentPatients from './RecentPatients';
import Notifications from './Notifications';
import UpcomingConsults from './UpcomingConsults';

function DashboardHospitalView() {
  return (
    <ContentWrapper title="Healthcare Dashboard - Hospital Management">
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
          <Grid item lg={8} xs={12}>
            <OverallStatus />
          </Grid>
          <Grid item lg={4} xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item lg={12} md={6} xs={12}>
                <AppointmentsAlt />
              </Grid>
              <Grid item lg={12} md={6} xs={12}>
                <Surgeries />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} lg={5} xs={12}>
            <Doctors />
          </Grid>
          <Grid item md={6} lg={7} xs={12}>
            <Departments />
          </Grid>
          <Grid item xs={12}>
            <RecentPatients />
          </Grid>
          <Grid item md={6} lg={7} xs={12}>
            <Notifications />
          </Grid>
          <Grid item md={6} lg={5} xs={12}>
            <UpcomingConsults />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default DashboardHospitalView;
