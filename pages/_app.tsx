import { ThemeContext } from '@emotion/react';
import { ActionIcon, MantineProvider, ColorSchemeProvider, ColorScheme, Paper } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { LiciteiLayout } from '../components/AppShell';



export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
 
  
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            /** Put your mantine theme override here */
            colors: {
              p: [
                "#144963", //0   
                "#0B5B75", //1
                "#2E7E99", //2
                "#00A390", //3
                "#06C2AC", //4
                "#20D6C1", //5
                "#E57237", //6
                "#FF884B", //7
                "#FF884B", //8
              ],
              s: [
                "#4DC082", //0
                "#E45D55", //1
                "#F6D14C", //2
                "#304347", //3
                "#576F74", //4
                "#92AAAE", //5
                "#E6EFEF", //6
                "#FFFFFF", //7

              ],

            },
            loader: 'dots',
            
          }}

        >
          <LiciteiLayout>
          <Component {...pageProps} />
          </LiciteiLayout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}