import Head from 'next/head';

import { Main } from './MainLayout.styled';

interface LayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const MainLayout = ({ title, description, children }: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>{children}</Main>
  </>
);

export default MainLayout;
