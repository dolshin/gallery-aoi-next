import { style } from '@vanilla-extract/css';

/* ============================================================
 * Tokens（仮：後で color / spacing / typography に昇格）
 * ============================================================ */

const TABLE = {
  border: '#afafaf',
  bg: '#f9f9f9',
  headerBg: '#f0f0f0',

  radius: '4px',
  fontSize: '1.05rem',

  header: {
    paddingY: '15px',
    letterSpacing: '0.15em',
    firstWidth: '30%',
  },

  cell: {
    paddingY: '17px',
    fontSize: '16px',
    letterSpacing: '0.05em',
    first: {
      fontSize: '15px',
      letterSpacing: '0.19em',
    },
  },
};

/* ============================================================
 * Table
 * ============================================================ */

export const table = style({
  width: '100%',
  marginBottom: '8px',

  border: `1px solid ${TABLE.border}`,
  borderRadius: TABLE.radius,
  borderCollapse: 'collapse',

  textAlign: 'center',
  fontSize: TABLE.fontSize,
  backgroundColor: TABLE.bg,
});

/* ============================================================
 * Table Body
 * ============================================================ */

export const tableBody = style({});

/* ============================================================
 * Header Row
 * ============================================================ */

export const tableHeaderRow = style({
  backgroundColor: TABLE.headerBg,
  borderBottom: `1px solid ${TABLE.border}`,
  fontWeight: 'bold',
});

/* ============================================================
 * Header Cell
 * ============================================================ */

export const tableHeaderCell = style({
  borderRight: `1px dotted ${TABLE.border}`,
  padding: `${TABLE.header.paddingY} 0`,
  fontWeight: 'normal',
  letterSpacing: TABLE.header.letterSpacing,

  selectors: {
    '&:first-child': {
      width: TABLE.header.firstWidth,
    },
  },
});

/* ============================================================
 * Row
 * ============================================================ */

export const tableRow = style({
  borderBottom: `1px solid ${TABLE.border}`,
});

/* ============================================================
 * Cell
 * ============================================================ */

export const tableCell = style({
  borderRight: `1px dotted ${TABLE.border}`,
  padding: `${TABLE.cell.paddingY} 0`,
  fontSize: TABLE.cell.fontSize,
  letterSpacing: TABLE.cell.letterSpacing,

  selectors: {
    '&:first-child': {
      fontSize: TABLE.cell.first.fontSize,
      letterSpacing: TABLE.cell.first.letterSpacing,
    },
  },
});
