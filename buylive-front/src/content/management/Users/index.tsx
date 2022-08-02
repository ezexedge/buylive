import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';

import { Container, Grid } from '@material-ui/core';
import useRefMounted from 'src/hooks/useRefMounted';
import type { User } from 'src/models/user';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Results from './Results';

function ManagementUsers() {
  const isMountedRef = useRefMounted();
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    try {
      const response = await axios.get<{ users: User[] }>('/api/users');

      if (isMountedRef.current) {
        setUsers(response.data.users);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  

  return (
    <ContentWrapper title="Users - Management">
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
            <Results users={users} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default ManagementUsers;
