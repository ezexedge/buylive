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

import Sidebar from './Sidebar';

import AdditionalInfo from './AdditionalInfo';
import GeneralSection from './GeneralSection';
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
        background: ${theme.colors.alpha.white[10]};
    }
`
);

const DrawerWrapperMobile = experimentalStyled(Drawer)(
  ({ theme }) => `
    width: 360px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 360px;
        z-index: 3;
        background: ${theme.colors.alpha.white[30]};
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

function ManagementProductCreate() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <Scrollbars autoHide>
      <Sidebar />
    </Scrollbars>
  );

  return (
    <ContentWrapper title="Create Product - Commerce Management">
      <Box mb={3} display="flex">
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
                  mt={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <PageHeader />
                  <Hidden lgUp>
                    <IconButtonToggle
                      sx={{ ml: 2 }}
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
                <GeneralSection />
              </Grid>
              <Grid item xs={12}>
                <AdditionalInfo />
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

export default ManagementProductCreate;
