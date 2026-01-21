'use client';
import {
  type RefObject,
  createContext,
  type ReactNode,
  useContext,
} from 'react';

type portalRootRef = RefObject<HTMLDivElement | null>;
const PortalRootContext = createContext<portalRootRef | null>(null);

/*
 * ポータル描画用のコンテキストプロバイダー
 */
export function PortalRootProvider({
  value,
  children,
}: {
  value: portalRootRef;
  children: ReactNode;
}) {
  return (
    <PortalRootContext.Provider value={value}>
      {children}
    </PortalRootContext.Provider>
  );
}

/*
 * ポータル描画用のコンテキストを取得するフック
 */
export function usePortalRootRef() {
  return useContext(PortalRootContext);
}
