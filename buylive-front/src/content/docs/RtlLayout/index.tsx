import { Container, Typography, Grid } from '@material-ui/core';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function RtlLayout() {
  const intDir = `// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';
// import rtlPlugin from 'stylis-plugin-rtl';

// const cacheRtl = createCache({
//   key: 'bloom-ui'
     // @ts-ignore
//   stylisPlugins: [rtlPlugin]
// });

return (
  
    {/* <CacheProvider value={cacheRtl}> */}
      
    {/* </CacheProvider> */}
  
);`;

  return (
    <ContentWrapper title="Right-to-Left Layout - Tokyo React Admin Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader
              heading="Right-to-Left Layout"
              subheading=""
            ></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              Tokyo React Admin Dashboard fully supports right-to-left layouts.
              By default, the RTL support is disabled, but it's easy to enable
              it.
            </Typography>
            <Typography paragraph>
              Uncomment the lines in the below example, inside{' '}
              <code>src\theme\ThemeProvider.tsx</code>
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {intDir}
            </Prism>
            <br />
            <Typography paragraph>
              When using a RTL layout, in <code>public\index.html</code> you
              will have to add <code>dir="rtl"</code> to the <code>body</code>{' '}
              or <code>html</code> tag.
            </Typography>
            <Typography paragraph>
              Also, inside the used theme (eg.{' '}
              <code>src\theme\schemes\PureLightTheme.ts</code>) you will have to
              uncomment <code>direction: i18n.dir(),</code> and{' '}
              <code>import i18n from 'src/i18n/i18n';</code>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
}

export default RtlLayout;