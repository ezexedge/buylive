import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Container, Grid } from '@material-ui/core';
import useRefMounted from 'src/hooks/useRefMounted';
import type { Project } from 'src/models/project';

import Results from './Results';

function ManagementProjects() {
  const isMountedRef = useRefMounted();
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get<{ projects: Project[] }>(
        '/api/projects'
      );

      if (isMountedRef.current) {
        setProjects(response.data.projects);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <ContentWrapper title="Projects - Management">
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
            <Results projects={projects} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default ManagementProjects;
