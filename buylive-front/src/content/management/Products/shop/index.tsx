import { useState, useEffect, useCallback } from 'react';

import ContentWrapper from 'src/components/ContentWrapper';
import Footer from 'src/components/Footer';
import PageHeader from './PageHeader';
import Sidebar from './Sidebar';

import {
  Container,
  Hidden,
  Box,
  Grid,
  IconButton,
  Drawer,
  useTheme
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import axios from 'src/utils/axios';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

import useRefMounted from 'src/hooks/useRefMounted';
import type { Product } from 'src/models/product';

import Results from './Results';
import { Scrollbars } from 'react-custom-scrollbars-2';

const sidebarContent = (
  <Scrollbars autoHide>
    <Sidebar />
  </Scrollbars>
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

const IconButtonToggle = experimentalStyled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

function ManagementProductsShop() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isMountedRef = useRefMounted();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get<{ products: Product[] }>(
        '/api/products'
      );

      if (isMountedRef.current) {
        setProducts(response.data.products);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ContentWrapper title="Products Platform - Applications">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid display="flex" alignItems="center" item xs={12}>
            <Hidden mdUp>
              <IconButtonToggle
                sx={{ mr: 1 }}
                color="primary"
                onClick={handleDrawerToggle}
                size="small"
              >
                <MenuTwoToneIcon />
              </IconButtonToggle>
            </Hidden>
            <Box flex={1} mt={3}>
              <PageHeader />
            </Box>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={12} md={3}>
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={9}>
            {products && <Results products={products} />}
          </Grid>
        </Grid>
      </Container>
      <Hidden mdUp>
        <DrawerWrapperMobile
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {sidebarContent}
        </DrawerWrapperMobile>
      </Hidden>
      <Footer />
    </ContentWrapper>
  );
}

export default ManagementProductsShop;
