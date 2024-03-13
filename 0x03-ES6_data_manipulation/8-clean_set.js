export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const appendedValues = filteredValues.map((value) => value.substring(startString.length));
  return appendedValues.join('-');
}
