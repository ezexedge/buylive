import { useEffect, useRef, useState } from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import {
  Box,
  Drawer,
  Grid,
  Hidden,
  useTheme,
  Divider,
  IconButton
} from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useParams } from 'react-router-dom';
import Results from './Results';
import Single from './Single';
import Sidebar from './Sidebar';
import { getTags } from 'src/slices/mailbox';
import { useDispatch } from 'src/store';

import { experimentalStyled } from '@material-ui/core/styles';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

const DrawerWrapper = experimentalStyled(Drawer)(
  ({ theme }) => `
    width: 280px;
    flex-shrink: 0;
    z-index: 3;

    & > .MuiPaper-root {
        width: 280px;
        height: calc(100% - ${theme.header.height});
        position: absolute;
        top: ${theme.header.height};
        left: ${theme.sidebar.width};
        z-index: 3;
        background: ${theme.colors.alpha.black[5]};
    }
`
);

const DrawerWrapperMobile = experimentalStyled(Drawer)(
  () => `
    width: 280px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 280px;
        z-index: 3;
  }
`
);

const MainContentWrapper = experimentalStyled(Box)(
  ({ theme }) => `
  flex-grow: 1;
  min-height: 100%;
  background: ${theme.colors.alpha.white[100]};
`
);

const IconButtonToggle = experimentalStyled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

function ApplicationsMailbox() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { mailboxCategory } = useParams<{ mailboxCategory: any }>();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  return (
    <ContentWrapper title="Mailbox - Applications">
      <Box sx={{ minHeight: '100%' }} display="flex">
        <Hidden lgUp>
          <DrawerWrapperMobile
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            <Scrollbars autoHide>
              <Sidebar containerRef={pageRef} />
            </Scrollbars>
          </DrawerWrapperMobile>
        </Hidden>
        <Hidden lgDown>
          <DrawerWrapper
            variant="permanent"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open
          >
            <Scrollbars autoHide>
              <Sidebar containerRef={pageRef} />
            </Scrollbars>
          </DrawerWrapper>
        </Hidden>
        <MainContentWrapper>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Hidden lgUp>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  p={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <IconButtonToggle
                    color="primary"
                    onClick={handleDrawerToggle}
                    size="small"
                  >
                    <MenuTwoToneIcon />
                  </IconButtonToggle>
                </Box>
                <Divider />
              </Grid>
            </Hidden>
            <Grid item xs={12}>
              {mailboxCategory ? <Single /> : <Results />}
            </Grid>
          </Grid>
        </MainContentWrapper>
      </Box>
    </ContentWrapper>
  );
}

export default ApplicationsMailbox;
