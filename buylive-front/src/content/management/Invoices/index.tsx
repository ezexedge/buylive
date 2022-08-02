import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import Statistics from './Statistics';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Container, Grid } from '@material-ui/core';
import useRefMounted from 'src/hooks/useRefMounted';
import type { Invoice } from 'src/models/invoice';

import Results from './Results';

function ManagementInvoices() {
  const isMountedRef = useRefMounted();
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await axios.get<{ invoices: Invoice[] }>(
        '/api/invoices'
      );

      if (isMountedRef.current) {
        setInvoices(response.data.invoices);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <ContentWrapper title="Invoices - Management">
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
            <Statistics />
          </Grid>
          <Grid item xs={12}>
            <Results invoices={invoices} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default ManagementInvoices;
