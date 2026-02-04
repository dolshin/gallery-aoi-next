import type { NavigationSeed } from '../../_config/navigation';

export type AoiSectionId =
  | 'Top'
  | 'Facility'
  | 'Price'
  | 'Faq'
  | 'Event'
  | 'Access'
  | 'Contact';

export const AoiNavigationItems = [
  { sectionId: 'Top', label: 'トップ' },
  {
    sectionId: 'Facility',
    label: '施設情報',
  },
  { sectionId: 'Price', label: '料金' },
  { sectionId: 'Faq', label: 'よくある質問' },
  { sectionId: 'Event', label: 'イベント' },
  { sectionId: 'Access', label: 'アクセス' },
  {
    sectionId: 'Contact',
    label: 'お問い合わせ',
  },
] as const satisfies NavigationSeed[];
