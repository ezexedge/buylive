import { Container, Typography, Grid } from '@material-ui/core';

import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function ThemesCustomization() {
  const themeDir = `📦theme
  ┣ 📂schemes
  ┃ ┣ 📜DarkSpacesTheme.ts
  ┃ ┣ 📜GreyGooseTheme.ts
  ┃ ┣ 📜LightBloomTheme.ts
  ┃ ┣ 📜NebulaFighterTheme.ts
  ┃ ┗ 📜PureLightTheme.ts
  ┣ 📜base.ts
  ┗ 📜ThemeProvider.tsx`;

  const themeCustom = `const themeColors = {
    primary: '#1975FF',
    secondary: '#6E759F',
    success: '#44D600',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#223354',
    white: '#ffffff',
    primaryAlt: '#000C57'
  };
  
  const colors = {
    layout: {
      sidebar: {
        background: themeColors.primaryAlt,
        textColor: themeColors.secondary,
        dividerBg: '#353E7A',
        menuItemColor: '#CCCEDD',
        menuItemColorActive: '#ffffff',
        menuItemBg: 'transparent',
        menuItemBgActive: '#242E6F',
        menuItemIconColor: themeColors.secondary,
        menuItemIconColorActive: '#ffffff',
        menuItemHeadingColor: themeColors.secondary
      }
    }
  };
  
  export const LightBloomTheme = createMuiTheme({
    direction: i18n.dir(),
    colors: {
    sidebar: {
      background: colors.layout.sidebar.background,
      textColor: colors.layout.sidebar.textColor,
      dividerBg: colors.layout.sidebar.dividerBg,
      menuItemColor: colors.layout.sidebar.menuItemColor,
      menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
      menuItemBg: colors.layout.sidebar.menuItemBg,
      menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
      menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
      menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
      menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
      boxShadow: 'none',
      width: '280px'
    },`;

  return (
    <ContentWrapper title="Themes Customization - Tokyo React Admin Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader
              heading="Themes Customization"
              subheading=""
            ></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              Tokyo React Admin Dashboard come with 5 predefined color schemes.
            </Typography>
            <Typography paragraph>
              Three of them are 'light' color schemes: <code>Pure Light</code>,{' '}
              <code>Light Bloom</code> and <code>Grey Goose</code>. The other
              two are 'dark' color schemes: <code>Nebula Fighter</code> and{' '}
              <code>Dark Spaces</code>.
            </Typography>
            <Typography paragraph>
              If you're looking to use only a single color scheme, then take a
              look at the starter kit we've bundled with the downloaded zip
              archive.
            </Typography>
            <br />
            <Typography paragraph>
              You can find all the theme logic inside the{' '}
              <code>/src/theme/</code> folder. Switch between themes using the
              top right 'cog' menu.
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {themeDir}
            </Prism>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Custom Schemes
            </Typography>
            <Typography paragraph>
              Each color scheme has it's individual file making it easy to
              create new ones or modify existing.
            </Typography>
            <Typography paragraph>
              For example, if you were to modify the sidebar style for the{' '}
              <code>Light Bloom</code> theme you would have to edit sidebar
              colors section inside{' '}
              <code>src\theme\schemes\LightBloomTheme.ts</code>:
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {themeCustom}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </ContentWrapper>
  );
}

export default ThemesCustomization;
