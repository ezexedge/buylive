import { useState, useCallback, useEffect } from 'react';

import ContentWrapper from 'src/components/ContentWrapper';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import type { Invoice } from 'src/models/invoice';
import InvoiceBody from './InvoiceBody';
import PageHeader from './PageHeader';

import axios from 'src/utils/axios';

function ManagementInvoicesView() {
  const isMountedRef = useRefMounted();
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  // @ts-ignore
  const { invoiceId } = useParams();

  const getInvoice = useCallback(async () => {
    try {
      const response = await axios.get<{ invoice: Invoice }>('/api/invoice', {
        params: {
          invoiceId
        }
      });
      if (isMountedRef.current) {
        setInvoice(response.data.invoice);
      }
    } catch (err) {
      console.error(err);
    }
  }, [invoiceId, isMountedRef]);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (!invoice) {
    return null;
  }

  return (
    <ContentWrapper title="Invoice Details - Management">
      <PageTitleWrapper>
        <PageHeader invoice={invoice} />
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
            <InvoiceBody invoice={invoice} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default ManagementInvoicesView;
