import { AoiAssets } from '../../../../_config/asset';
import { NextImage } from '@/components/Image/next';
import * as styles from './AoiFacilityInformation.css';

export const AoiFacilityInformation = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '80px',
          flexWrap: 'wrap',
          maxWidth: 'fit-content',
        }}
      >
        <ul
          style={{
            lineHeight: 2.5,
            marginLeft: '1.4em',
            textAlign: 'left',
          }}
        >
          <li
            style={{
              listStyle: 'disc',
              letterSpacing: '0.15em',
              fontSize: '16px',
            }}
          >
            会場面積：約67.2㎡{' '}
          </li>
          <li
            style={{
              listStyle: 'disc',
              letterSpacing: '0.15em',
              fontSize: '16px',
            }}
          >
            壁の長さ：約46.3m
          </li>
          <li
            style={{
              listStyle: 'disc',
              letterSpacing: '0.15em',
              fontSize: '16px',
            }}
          >
            天井高：2.7m
          </li>
        </ul>{' '}
        <NextImage
          src={AoiAssets.sketch}
          alt="ギャラリー見取り図"
          width={520}
          height={440}
          className={styles.wrapper}
        />
      </div>
    </>
  );
};
