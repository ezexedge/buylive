import { useState, useCallback, useEffect } from 'react';

import ContentWrapper from 'src/components/ContentWrapper';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import type { Product } from 'src/models/product';
import ProductBody from './ProductBody';
import Footer from 'src/components/Footer';
import PageHeader from './PageHeader';
import axios from 'src/utils/axios';

function ManagementProductSingle() {
  const isMountedRef = useRefMounted();
  const [product, setProduct] = useState<Product | null>(null);
  // @ts-ignore
  const { productId } = useParams();

  const getProduct = useCallback(async () => {
    try {
      const response = await axios.get<{ product: Product }>('/api/product', {
        params: {
          productId
        }
      });
      if (isMountedRef.current) {
        setProduct(response.data.product);
      }
    } catch (err) {
      console.error(err);
    }
  }, [productId, isMountedRef]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  if (!product) {
    return null;
  }

  return (
    <ContentWrapper title={product.name + ' - Products Management'}>
      <PageTitleWrapper>
        <PageHeader product={product} />
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
            <ProductBody product={product} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default ManagementProductSingle;
