'use client';
import type { SpaceId } from '../config';
import { createContext, useContext } from 'react';

const SpaceContext = createContext<SpaceId | null>(null);

/**
 * スペースコンテキストプロバイダーコンポーネント
 */
export const SpaceProvider = ({
  spaceId,
  children,
}: {
  spaceId: SpaceId;
  children: React.ReactNode;
}) => {
  return (
    <SpaceContext.Provider value={spaceId}>{children}</SpaceContext.Provider>
  );
};

export const useSpaceId = (): SpaceId => {
  const spaceId = useContext(SpaceContext);

  if (!spaceId) {
    throw new Error('useSpace must be used within a SpaceProvider');
  }

  return spaceId;
};
