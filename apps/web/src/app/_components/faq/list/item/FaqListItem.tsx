'use client';
import type { FaqListItemProps } from './FaqListItemProps';
import * as styles from './FaqListItem.css';
import { ChevronDown, ChevronUp } from '@dolshin/icons/ui';

export const FaqListItem = ({
  item,
  isOpen,
  toggle,
  index,
}: FaqListItemProps) => {
  return (
    <li className={styles.faqItem}>
      <button
        className={styles.faqQuestionButton}
        onClick={() => toggle(index)}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              marginRight: '10px',
              color: '#406193',
            }}
          >
            Q.{' '}
          </span>{' '}
          {item.question}
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <span
            style={{
              display: 'inline-block',
              margin: '0 18px 0 2px',
              color: 'rgb(199 38 38)',
            }}
          >
            A.{' '}
          </span>
          {item.answer}
        </div>
      )}
    </li>
  );
};
