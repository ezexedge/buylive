import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@material-ui/core';
import Footer from 'src/components/Footer';

import RecentTransactions from './RecentTransactions';
import MyCards from './MyCards';
import UpgradeAccount from './UpgradeAccount';
import Budget from './Budget';
import AllExpenses from './AllExpenses';
import ActiveSubscriptions from './ActiveSubscriptions';

function DashboardFinance() {
  return (
    <ContentWrapper title="Finance Dashboard">
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
          <Grid item lg={7} md={6} xs={12}>
            <RecentTransactions />
          </Grid>
          <Grid item lg={5} md={6} xs={12}>
            <MyCards />
          </Grid>
          <Grid item xs={12}>
            <UpgradeAccount />
          </Grid>
          <Grid item md={6} lg={5} xs={12}>
            <Budget />
          </Grid>
          <Grid item md={6} lg={7} xs={12}>
            <AllExpenses />
          </Grid>
          <Grid item xs={12}>
            <ActiveSubscriptions />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default DashboardFinance;
