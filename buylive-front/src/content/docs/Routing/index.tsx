import { Container, Typography, Grid } from '@material-ui/core';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function Routing() {
  const routingExample = `const routes: Routes = [
    {
      path: '/preview',
      guard: Authenticated,
      layout: SidebarLayout,
      routes: [
        {
          exact: true,
          path: '/preview/dashboards/analytics',
          component: lazy(() => import('src/content/dashboards/Analytics'))
        },
        {
          exact: true,
          path: '/preview/dashboards/banking',
          component: lazy(() => import('src/content/dashboards/Banking'))
        },
        {
          component: () => <Redirect to="/status/404" />
        }
      ]
    },
    {
      exact: true,
      path: '/overview',
      component: () => <Redirect to="/" />
    },
    {
      exact: true,
      guard: Guest,
      path: '/login',
      component: lazy(() => import('src/content/pages/Auth/Login/Cover'))
    },
    {
      exact: true,
      path: '/status/404',
      component: lazy(() => import('src/content/pages/Status/Status404'))
    },
    {
      path: '*',
      layout: BaseLayout,
      routes: [
        {
          exact: true,
          path: '/',
          component: Overview
        },
        {
          component: () => <Redirect to="/" />
        }
      ]
    }
  ];`;
  const sidebarExample = `import { ReactNode } from 'react';

  import AnalyticsTwoToneIcon from '@material-ui/icons/AnalyticsTwoTone';
  
  export interface MenuItem {
    link?: string;
    icon?: ReactNode;
    badge?: string;
    items?: MenuItem[];
    name: string;
  }
  
  export interface MenuItems {
    items: MenuItem[];
    heading: string;
  }
  
  const menuItems: MenuItems[] = [
    {
      heading: 'Dashboards',
      items: [
        {
          name: 'Analytics',
          icon: AnalyticsTwoToneIcon,
          link: '/preview/dashboards/analytics'
        },
        {
          name: 'Healthcare',
          icon: AnalyticsTwoToneIcon,
          link: '/preview/dashboards/healthcare',
          items: [
            {
              name: 'Doctors Page',
              badge: 'Hot',
              link: '/preview/dashboards/healthcare/doctor'
            },
            {
              name: 'Hospital Overview',
              link: '/preview/dashboards/healthcare/hospital'
            }
          ]
        }
      ]
    },
    {
      heading: 'Applications',
      items: [
        {
          name: 'Calendar',
          icon: AnalyticsTwoToneIcon,
          link: '/preview/applications/calendar'
        }
      ]
    }
  ];
  
  export default menuItems;
  `;
  
  return (
    <ContentWrapper title="Routing - Tokyo React Admin Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader heading="Routing" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              The routing in Tokyo React Admin Dashboad uses{' '}
              <code>react-router@^5.2.0</code> and can be configured inside this
              file: <code>src\router.tsx</code>
            </Typography>
            <Typography paragraph>
              Below you'll find a code snippet extracted from the router.tsx
              file:
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {routingExample}
            </Prism>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Sidebar Navigation
            </Typography>
            <Typography paragraph>
              To modify the current sidebar navigation, edit the following file{' '}
              <code>
                src\layouts\SidebarLayout\Sidebar\SidebarMenu\items.ts
              </code>
              . It contains an items array used for building the sidebar menu
              tree. The 'link' parameter represents the entry from{' '}
              <code>router.tsx</code>
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {sidebarExample}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
}

export default Routing;
