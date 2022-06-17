export function convertCentsToReal(cents) {
  if (!cents) {
    return (0).toFixed(2).replace(".", ",");
  }

  const real = (cents / 100).toFixed(2).replace(".", ",");
  return real;
}
