import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
  Group, Code, ScrollArea,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Image from 'next/image';
import { LinksGroup } from './NavbarLinksGroup'
import { UserButton } from './UserButton'
import LightDarkModeButton from './LightDarkButton';
import {
  IconSun,
  IconMoonStars,
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Pesquisar',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Oportunidade do dia', link: '/' },
      { label: 'Historico de pregões', link: '/' },
      { label: 'Contratos', link: '/' },
      { label: 'Planejamento e Gerenciamento de Contratações', link: '/' },
    ],
  },
  {
    label: 'Análises',
    icon: IconCalendarStats,
    links: [
      { label: 'Mercado', link: '/' },
      { label: 'Concorrência', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Monitorar Chat', icon: IconPresentationAnalytics },
  { label: 'Juridico', icon: IconFileAnalytics },
  { label: 'Comunidade', icon: IconAdjustments },
  {
    label: 'Departamento Online',
    icon: IconLock,
    links: [
      { label: 'Gerenciamento', link: '/' },
      { label: 'Emissor de Declarações', link: '/' },
      { label: 'Documentos', link: '/' },
    ],
  },
  { label: 'Configurações', icon: IconAdjustments },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
  
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },
}));



 function LiciteiLayout({children}) {

  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
        
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar  p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
         <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Areth Alves"
          email="Aretha@haxn.com.br"
        />
      </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Side bar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer  height={60} p="md" >
          <Text >Haxn Empreendimentos Ltda - 40.030.641/0001-03. Todos os direitos reservados. </Text>
        </Footer>
      }
      header={
        <Header  height={{ base: 50, md: 70 }} p="md">
          <div  style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

             <Group position="apart" spacing='xl'>
              <Image
              width={150}
              height={150}
              alt='logo licitei'
              src='/logo.svg'/>
              <LightDarkModeButton/>
             </Group>
            
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
export default LiciteiLayout;
