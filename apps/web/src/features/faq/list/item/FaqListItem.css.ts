import { style } from '@vanilla-extract/css';

/*
 * Tokens（仮）
 */

const FAQ = {
  border: '#d9d9d9',
  question: {
    padding: '32px',
    fontSize: '15px',
    letterSpacing: '0.17em',
    color: '#111827',
    hoverBg: '#f3f4f6',
  },
  answer: {
    padding: '0 32px 24px',
    fontSize: '15px',
    letterSpacing: '0.17em',
    color: '#374151',
    lineHeight: 1.6,
  },
};

/*
 * FAQ Item（li）**/

export const faqItem = style({
  margin: 0,
  borderBottom: `1px solid ${FAQ.border}`,
  overflow: 'hidden',
  letterSpacing: '0.09em',
});

/*
 * Question Button**/

export const faqQuestionButton = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  textAlign: 'left',
  background: 'none',
  border: 'none',
  cursor: 'pointer',

  padding: FAQ.question.padding,
  fontSize: FAQ.question.fontSize,
  letterSpacing: FAQ.question.letterSpacing,
  color: FAQ.question.color,

  transition: 'background-color 0.2s ease',

  selectors: {
    '&:hover': {
      backgroundColor: FAQ.question.hoverBg,
    },
  },
});

/*
 * Answer**/

export const faqAnswer = style({
  padding: FAQ.answer.padding,
  fontSize: FAQ.answer.fontSize,
  letterSpacing: FAQ.answer.letterSpacing,
  color: FAQ.answer.color,
  lineHeight: FAQ.answer.lineHeight,
});
