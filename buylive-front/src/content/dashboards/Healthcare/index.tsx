import { useState } from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';

import {
  Container,
  Box,
  Drawer,
  Grid,
  Hidden,
  useTheme,
  IconButton,
  alpha
} from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Footer from 'src/components/Footer';

import HealthcareSidebar from './HealthcareSidebar';
import AccountVerification from './AccountVerification';
import Appointments from './Appointments';
import PrescriptionRequests from './PrescriptionRequests';
import Consultations from './Consultations';
import Cancelled from './Cancelled';
import { experimentalStyled } from '@material-ui/core/styles';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

const DrawerWrapper = experimentalStyled(Drawer)(
  ({ theme }) => `
    width: 400px;
    flex-shrink: 0;
    position: relative;
    z-index: 3;

    & > .MuiPaper-root {
        width: 400px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;
        background: ${alpha(theme.colors.alpha.white[100], 0.5)};
    }
`
);

const DrawerWrapperMobile = experimentalStyled(Drawer)(
  () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`
);

const MainContentWrapper = experimentalStyled(Box)(
  () => `
  flex-grow: 1;
`
);

const IconButtonToggle = experimentalStyled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

function DashboardHealthcare() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <Scrollbars autoHide>
      <HealthcareSidebar />
    </Scrollbars>
  );

  return (
    <ContentWrapper title="Healthcare Dashboard - Doctor Overview">
      <Box display="flex">
        <MainContentWrapper>
          <Container maxWidth="md">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box mt={3}>
                    <PageHeader />
                  </Box>
                  <Hidden lgUp>
                    <IconButtonToggle
                      color="primary"
                      onClick={handleDrawerToggle}
                      size="small"
                    >
                      <MenuTwoToneIcon />
                    </IconButtonToggle>
                  </Hidden>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <AccountVerification />
              </Grid>
              <Grid item xs={12}>
                <Appointments />
              </Grid>
              <Grid item xs={12}>
                <PrescriptionRequests />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Consultations />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Cancelled />
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </MainContentWrapper>
        <Hidden lgUp>
          <DrawerWrapperMobile
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {sidebarContent}
          </DrawerWrapperMobile>
        </Hidden>
        <Hidden lgDown>
          <DrawerWrapper
            variant="permanent"
            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
            open
          >
            {sidebarContent}
          </DrawerWrapper>
        </Hidden>
      </Box>
    </ContentWrapper>
  );
}

export default DashboardHealthcare;
