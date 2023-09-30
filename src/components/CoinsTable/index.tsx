import { FC } from 'react';
import { Table } from 'react-bootstrap';
import { Coin } from '../../types/types';
import { SparkLine } from '../SparkLine';

interface CoinsTableProps {
  data: Coin[] | undefined;
}

export const CoinsTable: FC<CoinsTableProps> = ({ data }: CoinsTableProps) => {
  if (!data) {
    return <h2 style={{ textAlign: 'center' }}>Data is empty...</h2>
  }

  return (
    <Table bordered hover responsive="sm">
      <thead>
        <tr>
          <th>№</th>
          <th>Coin</th>
          <th>Name</th>
          <th>Price</th>
          <th>Price change (1w &#8260; 1d &#8260; 1h)</th>
          <th>Website URL</th>
        </tr>
      </thead>
      <tbody>
          {data.map(({ id, rank, icon, symbol, name, price, websiteUrl, priceChange1w, priceChange1d, priceChange1h }) =>
            <tr key={id}>
              <td>{rank}</td>
              <td>
                <img src={icon} width={20} style={{ marginRight: 10 }} alt={symbol} />
                {symbol}
              </td>
              <td>{name}</td>
              <td>${price}</td>
              <td>
                <div style={{ display: 'flex', gap: 8 }}>
                <SparkLine price={priceChange1w} />
                &#8260;
                <SparkLine price={priceChange1d} />
                &#8260;
                <SparkLine price={priceChange1h} />
                </div>
              </td>
              <td>
                <a href={websiteUrl} target="_blank" rel="noreferrer noopener nofollow" title={`Go to ${websiteUrl}`}>{websiteUrl}</a>
              </td>
            </tr>
          )}
      </tbody>
    </Table>
  );
}
