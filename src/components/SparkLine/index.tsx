import { FC, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faEquals } from '@fortawesome/free-solid-svg-icons';
import { formatPercent } from '../../utils/utils';
import { NEGATIVE_COLOR, POSITIVE_COLOR, EQUAL_COLOR } from '../../constants/constants';

interface SparkLineProps {
  price: number;
}

export const SparkLine: FC<SparkLineProps> = memo(({ price }: SparkLineProps) => {
  const is_positive = Number(price) > 0;
  const is_negative = Number(price) < 0;

  const color = is_positive ? POSITIVE_COLOR : is_negative ? NEGATIVE_COLOR : EQUAL_COLOR;
  const icon = is_positive ? faArrowUp : is_negative ? faArrowDown : faEquals;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <FontAwesomeIcon color={color} icon={icon} />
      <span style={{ color }}>{formatPercent(price / 100, { format: 'percent', replace: 'N/A', decimal: 2 })}</span>
    </div>
  );
});
