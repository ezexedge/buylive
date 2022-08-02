import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import { Container, Grid } from '@material-ui/core';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Transfers from './Transfers';
import Bills from './Bills';
import Requests from './Requests';
import Payments from './Payments';
import MainAccount from './MainAccount';
import SecondaryAccounts from './SecondaryAccounts';
import Investments from './Investments';
import TransactionsStatistics from './TransactionsStatistics';

function DashboardBanking() {
  return (
    <ContentWrapper title="Banking Dashboard">
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
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item lg={3} sm={6} xs={12}>
                <Transfers />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Bills />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Requests />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Payments />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={8} xs={12}>
            <MainAccount />
          </Grid>
          <Grid item md={4} xs={12}>
            <SecondaryAccounts />
          </Grid>
          <Grid item lg={5} md={6} xs={12}>
            <Investments />
          </Grid>
          <Grid item lg={7} md={6} xs={12}>
            <TransactionsStatistics />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default DashboardBanking;
