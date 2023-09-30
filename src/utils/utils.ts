import { FormatOptions } from '../types/types';

export const numberAbbr = (value: number, decimal?: number) => {
  const number = Math.round(value);
  const fix = !decimal || decimal < 0 ? 0 : decimal; // number of decimal places to show
  const b = number.toPrecision(2).split('e'); // get power
  const k = b.length === 1 ? 0 : Math.floor(Math.min(+b[1].slice(1), 14) / 3); // floor at decimals, ceiling at trillions
  const c = k < 1 ? number.toFixed(fix) : (number / 10 ** (k * 3)).toFixed(fix); // divide by power
  const d = +c < 0 ? Number(c) : Math.abs(+c); // enforce -0 is 0
  const f = d < 10 ? d : Math.round(d); // *** NEW LOGIC ***
  const e = f + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
};

export const formatPercent = (value: string | number, options: FormatOptions) => {
  const { format } = options;
  const decimal = options.decimal || 0;
  const number = Number(value);

  const percent = number * 100;
  const number_sign = Math.sign(number) === -1;

  switch (format) {
    case 'percent': {
      // determine nearest decimal with max decimal passed in
      // ex. decimals = 2, 12.02321 => 12.02%
      // ex. decimals = 2, 12.2 => 12.2%
      // ex. decimals = 2, 12.000003 => 12%
      const percent_rounded = Math.round(percent * Math.pow(10, decimal)) / Math.pow(10, decimal);
      return `${percent_rounded}%`;
    }
    case 'percent-abbreviated': {
      return `${numberAbbr(percent, decimal)}%`;
    }
    case 'percent-fixed': {
      if (number_sign) {
        return `-${String(percent.toFixed(decimal))}%`;
      }
      return `${String(percent.toFixed(decimal))}%`;
    }
    default:
      return value;
  }
};
