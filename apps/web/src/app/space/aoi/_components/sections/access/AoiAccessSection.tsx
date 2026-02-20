import { PageSection } from '@/app/_components';
import { Telephone } from '../../../../../_components/access/Telephone/Telephone';
import { GalleryAoiGroupAccessMap } from '../../../../../_components/access/AccessMap';
import * as styles from './AoiAccessSection.css';
import { ParkingSquare } from '@dolshin/icons/ui';

export const AoiAccessSection = () => (
  <PageSection id="Access" title="アクセス" subTitle="Access">
    <p style={{ letterSpacing: '0.18em', lineHeight: 2.5, margin: 0 }}>
      近鉄『大和西大寺』駅から徒歩7分
      <br />
      奈良県奈良市西大寺新田町1-11
      <br />
    </p>{' '}
    <p
      style={{
        display: 'flex',
        //justifyContent: "center",
        alignItems: 'center',
        gap: '0.8rem',
        margin: '0.4em 0',
        letterSpacing: '0.18em',
        lineHeight: 2.5,

        verticalAlign: 'middle',
      }}
    >
      {' '}
      <ParkingSquare size={17} />
      駐車場：10台（無料）
    </p>
    <Telephone phoneNumber="090-5066-5882" />
    <div className={styles.mapLayout}>
      <GalleryAoiGroupAccessMap />
    </div>
  </PageSection>
);
