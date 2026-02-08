import { Sidebar } from '../sidebar';
import { Footer } from '../footer';
import { Main } from '../main';
import { ContentsWrapper } from '../wrapper';
import type { SpaceLayoutProps } from './SpaceLayoutProps';
import { ScrollTopButton } from '@/components/Button/ScrollTopButton';
import ReactLenis from 'lenis/react';
import * as styles from './SpaceLayout.css';

export const SpaceLayout = ({ children }: SpaceLayoutProps) => {
  return (
    <>
      <ReactLenis root />
      <div className={styles.container}>
        <ContentsWrapper>
          <Sidebar />
          <Main>{children}</Main>
        </ContentsWrapper>
        <ScrollTopButton />
        <Footer />
      </div>
    </>
  );
};
