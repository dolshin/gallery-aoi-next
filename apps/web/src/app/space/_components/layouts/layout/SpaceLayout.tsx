import { Sidebar } from '../sidebar';
import { Footer } from '../footer';
import { Main } from '../main';
import { Wrapper } from '../wrapper';
import type { SpaceLayoutProps } from './SpaceLayoutProps';
import { ScrollTopButton } from '@/components/Button/ScrollTopButton';
import ReactLenis from 'lenis/react';
import { Container } from '../container';

export const SpaceLayout = ({ children }: SpaceLayoutProps) => {
  return (
    <>
      <ReactLenis root />
      <Container>
        <Sidebar />
        <Wrapper>
          <Main>{children}</Main>
        </Wrapper>
        <ScrollTopButton />
        <Footer />
      </Container>
    </>
  );
};
