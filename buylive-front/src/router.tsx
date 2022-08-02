import { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';
import SidebarLayout from 'src/layouts/SidebarLayout';
import DocsLayout from './layouts/DocsLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import Overview from 'src/content/overview';
import SuspenseLoader from 'src/components/SuspenseLoader';
import Guest from 'src/components/Guest';
import Authenticated from 'src/components/Authenticated';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<SuspenseLoader />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
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
        exact: true,
        path: '/preview/dashboards/commerce',
        component: lazy(() => import('src/content/dashboards/Commerce'))
      },
      {
        exact: true,
        path: '/preview/dashboards/crypto',
        component: lazy(() => import('src/content/dashboards/Crypto'))
      },
      {
        exact: true,
        path: '/preview/dashboards/finance',
        component: lazy(() => import('src/content/dashboards/Finance'))
      },
      {
        exact: true,
        path: '/preview/dashboards/fitness',
        component: lazy(() => import('src/content/dashboards/Fitness'))
      },
      {
        exact: true,
        path: '/preview/dashboards/healthcare/doctor',
        component: lazy(() => import('src/content/dashboards/Healthcare'))
      },
      {
        exact: true,
        path: '/preview/dashboards/healthcare',
        component: () => (
          <Redirect to="/preview/dashboards/healthcare/hospital" />
        )
      },
      {
        exact: true,
        path: '/preview/dashboards/healthcare/hospital',
        component: lazy(
          () => import('src/content/dashboards/Healthcare/HospitalView')
        )
      },
      {
        exact: true,
        path: '/preview/dashboards/helpdesk',
        component: lazy(() => import('src/content/dashboards/Helpdesk'))
      },
      {
        exact: true,
        path: '/preview/dashboards/learning',
        component: lazy(() => import('src/content/dashboards/Learning'))
      },
      {
        exact: true,
        path: '/preview/dashboards/monitoring',
        component: lazy(() => import('src/content/dashboards/Monitoring'))
      },
      {
        exact: true,
        path: '/preview/dashboards/tasks',
        component: lazy(() => import('src/content/dashboards/Tasks'))
      },

      {
        exact: true,
        path: '/preview/applications/file-manager',
        component: lazy(() => import('src/content/applications/FileManager'))
      },
      {
        exact: true,
        path: '/preview/applications/messenger',
        component: lazy(() => import('src/content/applications/Messenger'))
      },
      {
        exact: true,
        path: '/preview/applications/calendar',
        component: lazy(() => import('src/content/applications/Calendar'))
      },
      {
        exact: true,
        path: '/preview/applications/jobs-platform',
        component: lazy(() => import('src/content/applications/JobsPlatform'))
      },
      {
        exact: true,
        path: '/preview/applications/projects-board',
        component: lazy(() => import('src/content/applications/ProjectsBoard'))
      },
      {
        exact: true,
        path: [
          '/preview/applications/mailbox/tag/:labelTag/:mailboxCategory?',
          '/preview/applications/mailbox/:categoryTag/:mailboxCategory?'
        ],
        component: lazy(() => import('src/content/applications/Mailbox'))
      },
      {
        exact: true,
        path: '/preview/applications/mailbox',
        component: () => <Redirect to="/preview/applications/mailbox/inbox" />
      },
      {
        exact: true,
        path: '/preview/management/users',
        component: () => <Redirect to="/preview/management/users/list" />
      },
      {
        exact: true,
        path: '/preview/management/users/list',
        component: lazy(() => import('src/content/management/Users'))
      },
      {
        exact: true,
        path: '/preview/management/user/:userId',
        component: lazy(() => import('src/content/management/Users/single'))
      },
      {
        exact: true,
        path: '/preview/management/projects',
        component: () => <Redirect to="/preview/management/projects/list" />
      },
      {
        exact: true,
        path: '/preview/management/projects/list',
        component: lazy(() => import('src/content/management/Projects'))
      },
      {
        exact: true,
        path: '/preview/management/invoices',
        component: () => <Redirect to="/preview/management/invoices/list" />
      },
      {
        exact: true,
        path: '/preview/management/invoices/list',
        component: lazy(() => import('src/content/management/Invoices'))
      },
      {
        exact: true,
        path: '/preview/management/invoice/:invoiceId',
        component: lazy(() => import('src/content/management/Invoices/single'))
      },
      {
        exact: true,
        path: '/preview/management/commerce/products',
        component: () => (
          <Redirect to="/preview/management/commerce/products/list" />
        )
      },
      {
        exact: true,
        path: '/preview/management/commerce/products/list',
        component: lazy(() => import('src/content/management/Products'))
      },
      {
        exact: true,
        path: '/preview/management/commerce/products/create',
        component: lazy(() => import('src/content/management/Products/create'))
      },
      {
        exact: true,
        path: '/preview/management/commerce/products/shop',
        component: lazy(() => import('src/content/management/Products/shop'))
      },
      {
        exact: true,
        path: '/preview/management/commerce/product/:productId',
        component: lazy(() => import('src/content/management/Products/single'))
      },
      {
        component: () => <Redirect to="/status/404" />
      }
    ]
  },
  {
    path: '/accent-header',
    guard: Authenticated,
    layout: AccentHeaderLayout,
    routes: [
      {
        exact: true,
        path: '/accent-header/dashboards/analytics',
        component: lazy(() => import('src/content/dashboards/Analytics'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/banking',
        component: lazy(() => import('src/content/dashboards/Banking'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/commerce',
        component: lazy(() => import('src/content/dashboards/Commerce'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/crypto',
        component: lazy(() => import('src/content/dashboards/Crypto'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/finance',
        component: lazy(() => import('src/content/dashboards/Finance'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/fitness',
        component: lazy(() => import('src/content/dashboards/Fitness'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/healthcare/doctor',
        component: lazy(() => import('src/content/dashboards/Healthcare'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/healthcare',
        component: () => (
          <Redirect to="/accent-header/dashboards/healthcare/hospital" />
        )
      },
      {
        exact: true,
        path: '/accent-header/dashboards/healthcare/hospital',
        component: lazy(
          () => import('src/content/dashboards/Healthcare/HospitalView')
        )
      },
      {
        exact: true,
        path: '/accent-header/dashboards/helpdesk',
        component: lazy(() => import('src/content/dashboards/Helpdesk'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/learning',
        component: lazy(() => import('src/content/dashboards/Learning'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/monitoring',
        component: lazy(() => import('src/content/dashboards/Monitoring'))
      },
      {
        exact: true,
        path: '/accent-header/dashboards/tasks',
        component: lazy(() => import('src/content/dashboards/Tasks'))
      },
      {
        exact: true,
        path: '/accent-header/applications/file-manager',
        component: lazy(() => import('src/content/applications/FileManager'))
      },
      {
        exact: true,
        path: '/accent-header/applications/messenger',
        component: lazy(() => import('src/content/applications/Messenger'))
      },
      {
        exact: true,
        path: '/accent-header/applications/calendar',
        component: lazy(() => import('src/content/applications/Calendar'))
      },
      {
        exact: true,
        path: '/accent-header/applications/jobs-platform',
        component: lazy(() => import('src/content/applications/JobsPlatform'))
      },
      {
        exact: true,
        path: '/accent-header/applications/projects-board',
        component: lazy(() => import('src/content/applications/ProjectsBoard'))
      },
      {
        exact: true,
        path: [
          '/accent-header/applications/mailbox/tag/:labelTag/:mailboxCategory?',
          '/accent-header/applications/mailbox/:categoryTag/:mailboxCategory?'
        ],
        component: lazy(() => import('src/content/applications/Mailbox'))
      },
      {
        exact: true,
        path: '/accent-header/applications/mailbox',
        component: () => (
          <Redirect to="/accent-header/applications/mailbox/inbox" />
        )
      },
      {
        exact: true,
        path: '/accent-header/management/users',
        component: () => <Redirect to="/accent-header/management/users/list" />
      },
      {
        exact: true,
        path: '/accent-header/management/users/list',
        component: lazy(() => import('src/content/management/Users'))
      },
      {
        exact: true,
        path: '/accent-header/management/user/:userId',
        component: lazy(() => import('src/content/management/Users/single'))
      },
      {
        exact: true,
        path: '/accent-header/management/projects',
        component: () => (
          <Redirect to="/accent-header/management/projects/list" />
        )
      },
      {
        exact: true,
        path: '/accent-header/management/projects/list',
        component: lazy(() => import('src/content/management/Projects'))
      },
      {
        exact: true,
        path: '/accent-header/management/invoices',
        component: () => (
          <Redirect to="/accent-header/management/invoices/list" />
        )
      },
      {
        exact: true,
        path: '/accent-header/management/invoices/list',
        component: lazy(() => import('src/content/management/Invoices'))
      },
      {
        exact: true,
        path: '/accent-header/management/invoice/:invoiceId',
        component: lazy(() => import('src/content/management/Invoices/single'))
      },
      {
        exact: true,
        path: '/accent-header/management/commerce/products',
        component: () => (
          <Redirect to="/accent-header/management/commerce/products/list" />
        )
      },
      {
        exact: true,
        path: '/accent-header/management/commerce/products/list',
        component: lazy(() => import('src/content/management/Products'))
      },
      {
        exact: true,
        path: '/accent-header/management/commerce/products/create',
        component: lazy(() => import('src/content/management/Products/create'))
      },
      {
        exact: true,
        path: '/accent-header/management/commerce/products/shop',
        component: lazy(() => import('src/content/management/Products/shop'))
      },
      {
        exact: true,
        path: '/accent-header/management/commerce/product/:productId',
        component: lazy(() => import('src/content/management/Products/single'))
      },
      {
        component: () => <Redirect to="/status/404" />
      }
    ]
  },
  {
    path: '/accent-sidebar',
    guard: Authenticated,
    layout: AccentSidebarLayout,
    routes: [
      {
        exact: true,
        path: '/accent-sidebar/dashboards/analytics',
        component: lazy(() => import('src/content/dashboards/Analytics'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/banking',
        component: lazy(() => import('src/content/dashboards/Banking'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/commerce',
        component: lazy(() => import('src/content/dashboards/Commerce'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/crypto',
        component: lazy(() => import('src/content/dashboards/Crypto'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/finance',
        component: lazy(() => import('src/content/dashboards/Finance'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/fitness',
        component: lazy(() => import('src/content/dashboards/Fitness'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/healthcare/doctor',
        component: lazy(() => import('src/content/dashboards/Healthcare'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/healthcare',
        component: () => (
          <Redirect to="/accent-sidebar/dashboards/healthcare/hospital" />
        )
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/healthcare/hospital',
        component: lazy(
          () => import('src/content/dashboards/Healthcare/HospitalView')
        )
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/helpdesk',
        component: lazy(() => import('src/content/dashboards/Helpdesk'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/learning',
        component: lazy(() => import('src/content/dashboards/Learning'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/monitoring',
        component: lazy(() => import('src/content/dashboards/Monitoring'))
      },
      {
        exact: true,
        path: '/accent-sidebar/dashboards/tasks',
        component: lazy(() => import('src/content/dashboards/Tasks'))
      },
      {
        exact: true,
        path: '/accent-sidebar/applications/file-manager',
        component: lazy(() => import('src/content/applications/FileManager'))
      },
      {
        exact: true,
        path: '/accent-sidebar/applications/messenger',
        component: lazy(() => import('src/content/applications/Messenger'))
      },
      {
        exact: true,
        path: '/accent-sidebar/applications/calendar',
        component: lazy(() => import('src/content/applications/Calendar'))
      },
      {
        exact: true,
        path: '/accent-sidebar/applications/jobs-platform',
        component: lazy(() => import('src/content/applications/JobsPlatform'))
      },
      {
        exact: true,
        path: '/accent-sidebar/applications/projects-board',
        component: lazy(() => import('src/content/applications/ProjectsBoard'))
      },
      {
        exact: true,
        path: [
          '/accent-sidebar/applications/mailbox/tag/:labelTag/:mailboxCategory?',
          '/accent-sidebar/applications/mailbox/:categoryTag/:mailboxCategory?'
        ],
        component: lazy(() => import('src/content/applications/Mailbox'))
      },
      {
        exact: true,
        path: '/accent-sidebar/applications/mailbox',
        component: () => (
          <Redirect to="/accent-sidebar/applications/mailbox/inbox" />
        )
      },
      {
        exact: true,
        path: '/accent-sidebar/management/users',
        component: () => <Redirect to="/accent-sidebar/management/users/list" />
      },
      {
        exact: true,
        path: '/accent-sidebar/management/users/list',
        component: lazy(() => import('src/content/management/Users'))
      },
      {
        exact: true,
        path: '/accent-sidebar/management/user/:userId',
        component: lazy(() => import('src/content/management/Users/single'))
      },
      {
        exact: true,
        path: '/accent-sidebar/management/projects',
        component: () => (
          <Redirect to="/accent-sidebar/management/projects/list" />
        )
      },
      {
        exact: true,
        path: '/accent-sidebar/management/projects/list',
        component: lazy(() => import('src/content/management/Projects'))
      },
      {
        exact: true,
        path: '/accent-sidebar/management/invoices',
        component: () => (
          <Redirect to="/accent-sidebar/management/invoices/list" />
        )
      },
      {
        exact: true,
        path: '/accent-sidebar/management/invoices/list',
        component: lazy(() => import('src/content/management/Invoices'))
      },
      {
        exact: true,
        path: '/accent-sidebar/management/invoice/:invoiceId',
        component: lazy(() => import('src/content/management/Invoices/single'))
      },
      {
        exact: true,
        path: '/accent-sidebar/management/commerce/products',
        component: () => (
          <Redirect to="/accent-sidebar/management/commerce/products/list" />
        )
      },
      {
        exact: true,
        path: '/accent-sidebar/management/commerce/products/list',
        component: lazy(() => import('src/content/management/Products'))
      },
      {
        exact: true,
        path: '/accent-sidebar/management/commerce/products/create',
        component: lazy(() => import('src/content/management/Products/create'))
      },
      {
        exact: true,
        path: '/accent-sidebar/management/commerce/products/shop',
        component: lazy(() => import('src/content/management/Products/shop'))
      },
      {
        exact: true,
        path: '/accent-sidebar/management/commerce/product/:productId',
        component: lazy(() => import('src/content/management/Products/single'))
      },
      {
        component: () => <Redirect to="/status/404" />
      }
    ]
  },
  {
    path: '/docs',
    layout: DocsLayout,
    routes: [
      {
        exact: true,
        path: '/docs/introduction',
        component: lazy(() => import('src/content/docs/Introduction'))
      },
      {
        exact: true,
        path: '/docs',
        component: () => <Redirect to="/docs/introduction" />
      },
      {
        exact: true,
        path: '/docs/authentication',
        component: lazy(() => import('src/content/docs/Authentication'))
      },
      {
        exact: true,
        path: '/docs/changelog',
        component: lazy(() => import('src/content/docs/Changelog'))
      },
      {
        exact: true,
        path: '/docs/contact-support',
        component: lazy(() => import('src/content/docs/ContactSupport'))
      },
      {
        exact: true,
        path: '/docs/dependencies',
        component: lazy(() => import('src/content/docs/Dependencies'))
      },
      {
        exact: true,
        path: '/docs/installation',
        component: lazy(() => import('src/content/docs/Installation'))
      },
      {
        exact: true,
        path: '/docs/internationalization',
        component: lazy(() => import('src/content/docs/Internationalization'))
      },
      {
        exact: true,
        path: '/docs/routing',
        component: lazy(() => import('src/content/docs/Routing'))
      },
      {
        exact: true,
        path: '/docs/rtl-layout',
        component: lazy(() => import('src/content/docs/RtlLayout'))
      },
      {
        exact: true,
        path: '/docs/server-requests',
        component: lazy(() => import('src/content/docs/ServerRequests'))
      },
      {
        exact: true,
        path: '/docs/starter-kits',
        component: lazy(() => import('src/content/docs/StarterKits'))
      },
      {
        exact: true,
        path: '/docs/themes-customization',
        component: lazy(() => import('src/content/docs/ThemesCustomization'))
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
    guard: Guest,
    path: '/register',
    component: lazy(() => import('src/content/pages/Auth/Register/Cover'))
  },
  {
    exact: true,
    path: '/login-basic',
    component: lazy(() => import('src/content/pages/Auth/Login/Basic'))
  },
  {
    exact: true,
    path: '/login-cover',
    component: lazy(() => import('src/content/pages/Auth/Login/Cover'))
  },
  {
    exact: true,
    path: '/register-basic',
    component: lazy(() => import('src/content/pages/Auth/Register/Basic'))
  },
  {
    exact: true,
    path: '/register-cover',
    component: lazy(() => import('src/content/pages/Auth/Register/Cover'))
  },
  {
    exact: true,
    path: '/register-wizard',
    component: lazy(() => import('src/content/pages/Auth/Register/Wizard'))
  },
  {
    exact: true,
    path: '/recover-password',
    component: lazy(() => import('src/content/pages/Auth/RecoverPassword'))
  },
  {
    exact: true,
    path: '/status/404',
    component: lazy(() => import('src/content/pages/Status/Status404'))
  },
  {
    exact: true,
    path: '/status/500',
    component: lazy(() => import('src/content/pages/Status/Status500'))
  },
  {
    exact: true,
    path: '/status/coming-soon',
    component: lazy(() => import('src/content/pages/Status/ComingSoon'))
  },
  {
    exact: true,
    path: '/status/maintenance',
    component: lazy(() => import('src/content/pages/Status/Maintenance'))
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
];

export default routes;
