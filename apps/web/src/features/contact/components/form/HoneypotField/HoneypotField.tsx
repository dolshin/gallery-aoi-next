import type { HoneypotFieldProps } from './HoneypotFieldProps';

/**
 * 簡易ボット対策のためのハニーポットフィールドコンポーネント
 */
export function HoneypotField({ name = 'website' }: HoneypotFieldProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <label htmlFor={name}>Website</label>
      <input
        id={name}
        name={name}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
