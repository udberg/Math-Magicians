import calculate from '../../logic/calculate';

describe('tests for calculate', () => {
  test('should clean display mirror when "AC" pressed', () => {
    const data = {
      total: '',
      next: '',
      operation: null,
    };

    const newData = calculate(data, 'AC');
    expect(newData).toEqual(data);
  });

  test('should show btnName when the operators given', () => {
    const data = { total: 16, next: '', operation: '+' };
    const newData = calculate(data, '+');
    expect(newData.operation).toEqual('+');
    expect(newData.next).toEqual('');
  });

  test('should show minus or plus number when "+/-" pressed', () => {
    const data = { total: 6, next: '', operation: 'x' };
    const newData = calculate(data, '+/-');

    expect(newData.total).toEqual('-6');
  });

  test('should calculate output when "=" pressed', () => {
    const data = { total: 7, next: 5, operation: 'x' };
    const newData = calculate(data, '=');

    expect(newData.total).toEqual('35');
    expect(newData.next).toEqual('');
    expect(newData.operation).toEqual(null);
  });

  test('should show total if there is no operation', () => {
    const data = { total: 7, next: 5, operation: '' };
    const newData = calculate(data, '');

    expect(newData.total).toEqual('7');
  });

  test('should show next if there is  operation', () => {
    const data = { total: 7, next: 5, operation: '/' };
    const newData = calculate(data, '/');

    expect(newData.next).toEqual(5);
  });
});
