import { useState, useCallback, ChangeEvent, useEffect } from 'react';

import ContentWrapper from 'src/components/ContentWrapper';
import Footer from 'src/components/Footer';

import { Container, Tabs, Tab, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import type { User } from 'src/models/user';
import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import Feed from './Feed';
import PopularTags from './PopularTags';
import MyCards from './MyCards';
import Addresses from './Addresses';
import ActivityTab from './ActivityTab';
import EditProfileTab from './EditProfileTab';
import NotificationsTab from './NotificationsTab';
import SecurityTab from './SecurityTab';
import { experimentalStyled } from '@material-ui/core/styles';
import axios from 'src/utils/axios';

const TabsWrapper = experimentalStyled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementUsersView() {
  const isMountedRef = useRefMounted();
  const [user, setUser] = useState<User | null>(null);
  // @ts-ignore
  const { userId } = useParams();
  const { t }: { t: any } = useTranslation();

  const [currentTab, setCurrentTab] = useState<string>('activity');

  const tabs = [
    { value: 'activity', label: t('Activity') },
    { value: 'edit_profile', label: t('Edit Profile') },
    { value: 'notifications', label: t('Notifications') },
    { value: 'security', label: t('Passwords/Security') }
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get<{ user: User }>('/api/user', {
        params: {
          userId
        }
      });
      if (isMountedRef.current) {
        setUser(response.data.user);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userId, isMountedRef]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <ContentWrapper title="User Details - Management">
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
          <Grid item xs={12}>
            <TabsWrapper
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
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === 'activity' && <ActivityTab />}
            {currentTab === 'edit_profile' && <EditProfileTab />}
            {currentTab === 'notifications' && <NotificationsTab />}
            {currentTab === 'security' && <SecurityTab />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ContentWrapper>
  );
}

export default ManagementUsersView;
