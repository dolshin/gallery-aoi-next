export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl';

export type ResponsiveCols = number | Partial<Record<Breakpoint, number>>;
