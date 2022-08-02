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

import FileManagerSidebar from './FileManagerSidebar';
import QuickAccess from './QuickAccess';
import TeamFolders from './TeamFolders';
import AllFolders from './AllFolders';

import { experimentalStyled } from '@material-ui/core/styles';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

const DrawerWrapper = experimentalStyled(Drawer)(
  ({ theme }) => `
    width: 400px;
    flex-shrink: 0;
    z-index: 3;

    & > .MuiPaper-root {
        width: 400px;
        height: calc(100% - ${theme.header.height});
        position: absolute;
        top: ${theme.header.height};
        right: 0;
        z-index: 3;
        background: ${theme.colors.gradients.blue3};
        color: ${theme.colors.alpha.white[100]};
    }
`
);

const DrawerWrapperMobile = experimentalStyled(Drawer)(
  ({ theme }) => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
        background: ${theme.colors.gradients.blue3};
        color: ${theme.colors.alpha.white[100]};
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

function ApplicationsFileManager() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <Scrollbars autoHide>
      <FileManagerSidebar />
    </Scrollbars>
  );

  return (
    <ContentWrapper title="File Manager - Applications">
      <Box sx={{ width: { xs: '100%', lg: 'calc(100% - 400px)' } }}>
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
                <QuickAccess />
              </Grid>
              <Grid item xs={12}>
                <TeamFolders />
              </Grid>
              <Grid item xs={12}>
                <AllFolders />
              </Grid>
            </Grid>
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

export default ApplicationsFileManager;
