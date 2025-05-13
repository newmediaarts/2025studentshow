
export function css(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    acc += str;
    if (i < values.length) {
      acc += values[i];
    }
    return acc;
  }, '');
}

export function html(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    acc += str;
    if (i < values.length) {
      acc += values[i];
    }
    return acc;
  }, '');
}


