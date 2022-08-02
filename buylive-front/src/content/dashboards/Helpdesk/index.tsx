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
  IconButton
} from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars-2';

import HelpdeskSidebar from './HelpdeskSidebar';
import UnresolvedTickets from './UnresolvedTickets';
import PendingQuestions from './PendingQuestions';
import UpdatedTickets from './UpdatedTickets';
import AssignedTasks from './AssignedTasks';
import PendingTickets from './PendingTickets';
import RecentQuestions from './RecentQuestions';
import TopAgentsHeading from './TopAgentsHeading';
import TopAgents1 from './TopAgents1';
import TopAgents2 from './TopAgents2';

import { experimentalStyled } from '@material-ui/core/styles';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

const DrawerWrapper = experimentalStyled(Drawer)(
  ({ theme }) => `
    width: 360px;
    flex-shrink: 0;
    z-index: 3;

    & > .MuiPaper-root {
        width: 360px;
        height: calc(100% - ${theme.header.height});
        position: absolute;
        top: ${theme.header.height};
        right: 0;
        z-index: 3;
        background: ${theme.colors.alpha.white[100]};
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

function DashboardHelpdesk() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <Scrollbars autoHide>
      <HelpdeskSidebar />
    </Scrollbars>
  );

  return (
    <ContentWrapper title="Helpdesk Dashboard">
      <Box sx={{ width: { xs: '100%', lg: 'calc(100% - 360px)' } }}>
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
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <UnresolvedTickets />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PendingQuestions />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <UpdatedTickets />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AssignedTasks />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <PendingTickets />
              </Grid>
              <Grid item xs={12}>
                <RecentQuestions />
              </Grid>
              <Grid item xs={12}>
                <TopAgentsHeading />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TopAgents1 />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TopAgents2 />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box mt={3} />
          </Container>
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

export default DashboardHelpdesk;
