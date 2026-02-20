'use client';
import { useState } from 'react';
import type { FaqListProps } from './FaqListProps';
import { FaqListItem } from './item';

export const FaqList = ({ faqs }: FaqListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <FaqListItem
            item={faq}
            isOpen={isOpen}
            index={index}
            toggle={toggle}
            key={index}
          />
        );
      })}
    </ul>
  );
};
