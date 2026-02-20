import { Phone } from '@dolshin/icons/ui';
import type { TelephoneProps } from './TelephoneProps';

export const Telephone = ({ phoneNumber }: TelephoneProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
      }}
    >
      <Phone style={{ fontSize: 16 }} />
      <div>
        <a
          style={{
            display: 'inline-block',
            fontSize: 18,
            letterSpacing: '0.12em',
            textAlign: 'left',
          }}
          href={`tel:${phoneNumber}`}
        >
          {phoneNumber}
          <span style={{ fontSize: '16px' }}>（担当者：上村）</span>
        </a>
      </div>
    </div>
  );
};
