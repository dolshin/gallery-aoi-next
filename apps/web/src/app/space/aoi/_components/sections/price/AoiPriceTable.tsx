import {
  Table,
  TableBody,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from '@/components/Table';

export const AoiPriceTable = () => {
  return (
    <div>
      <p style={{ marginBottom: '2em' }}>レンタル時間：10:00～18:00</p>
      <Table>
        <TableBody>
          <TableHeaderRow>
            <TableHeaderCell>プラン</TableHeaderCell>
            <TableHeaderCell>料金（税込）</TableHeaderCell>
          </TableHeaderRow>
          <TableRow>
            <TableCell>1時間レンタル</TableCell>
            <TableCell>1,500円</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1日レンタル</TableCell>
            <TableCell>
              <span style={{ marginLeft: '18px' }}>
                8,000円（土日9,000円 ）
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1週間レンタル</TableCell>
            <TableCell>
              <span style={{ textDecoration: 'line-through' }}>58,000円</span>
              <span style={{ margin: '0 0.4em' }}> → </span>
              <span style={{ color: 'red' }}>40,000円 </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
