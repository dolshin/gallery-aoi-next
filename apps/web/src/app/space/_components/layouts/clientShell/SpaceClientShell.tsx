'use client';

import { defaultThemeClass } from '@dolshin/ui/theme';
import { useRef } from 'react';
import { PortalRootProvider } from '@dolshin/ui';
import { SpaceLayout } from '../layout';
import type { SpaceClientShellProps } from './SpaceClientShellProps';
import { SpaceProvider } from '@/features/space/providers';

/**
 * スペースクライアントシェルコンポーネント
 */
export const SpaceClientShell = ({
  spaceId,
  children,
}: SpaceClientShellProps) => {
  const portalRootRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className={defaultThemeClass}>
      <PortalRootProvider value={portalRootRef}>
        <SpaceProvider spaceId={spaceId}>
          <SpaceLayout>{children}</SpaceLayout>
        </SpaceProvider>
      </PortalRootProvider>
      {/* ポータルのルート要素 */}
      <div ref={portalRootRef} />
    </div>
  );
};
