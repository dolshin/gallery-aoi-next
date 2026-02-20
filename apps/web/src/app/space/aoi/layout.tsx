import '@dolshin/ui/theme';
import { SpaceClientShell } from '../_components/layouts';

/**
 * AOI スペースレイアウト
 */
export default function AoiSpaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SpaceClientShell spaceId="aoi">{children}</SpaceClientShell>;
}
