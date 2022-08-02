import { ChangeEvent, useState } from 'react';
import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import { Container, Grid, Tab, Tabs } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TeamOverview from './TeamOverview';
import TasksAnalytics from './TasksAnalytics';
import Performance from './Performance';
import Projects from './Projects';
import Checklist from './Checklist';
import Profile from './Profile';
import TaskSearch from './TaskSearch';
import { useTranslation } from 'react-i18next';

function DashboardTasks() {
  const { t }: { t: any } = useTranslation();

  const [currentTab, setCurrentTab] = useState<string>('analytics');

  const tabs = [
    { value: 'analytics', label: t('Analytics Overview') },
    { value: 'taskSearch', label: t('Task Search') }
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <ContentWrapper title="Tasks Dashboard">
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
            <Tabs
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
              <Tab
                component={RouterLink}
                label={t('Projects Board')}
                to="/preview/applications/projects-board"
              />
            </Tabs>
          </Grid>
          {currentTab === 'analytics' && (
            <>
              <Grid item xs={12}>
                <TeamOverview />
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <TasksAnalytics />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Performance />
              </Grid>
              <Grid item xs={12}>
                <Projects />
              </Grid>
              <Grid item xs={12} md={6}>
                <Checklist />
              </Grid>
              <Grid item xs={12} md={6}>
                <Profile />
              </Grid>
            </>
          )}
          {currentTab === 'taskSearch' && (
            <Grid item xs={12}>
              <TaskSearch />
            </Grid>
          )}
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default DashboardTasks;
