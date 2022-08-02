import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Container, Grid } from '@material-ui/core';
import useRefMounted from 'src/hooks/useRefMounted';
import type { Product } from 'src/models/product';

import Results from './Results';

function ManagementProducts() {
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
    <ContentWrapper title="Products - Management">
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
            <Results products={products} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default ManagementProducts;
