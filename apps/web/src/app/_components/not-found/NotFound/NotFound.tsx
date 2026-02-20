import * as styles from './NotFound.css';
import type { NotFoundProps } from './NotFoundProps';
import { LinkButton } from '@/components/Button';

/**
 * ギャラリーアオイグループの404コンポーネント
 */
export const NotFound = ({ href }: NotFoundProps) => {
  return (
    <div className={styles.notFound}>
      <h1>404 Not Found</h1>
      <p className={styles.paragraph}>
        申し訳ございません。お探しのページは見つかりませんでした。
        <br />
        URLが間違っている、もしくはページのURLが変更された可能性があります。
        <br />
        お手数ですが、メニューからご覧になりたいページをお探しください。
      </p>
      <LinkButton href={href}> ホームに戻る </LinkButton>
    </div>
  );
};
