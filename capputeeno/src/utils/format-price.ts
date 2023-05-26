export function formattedValue(centsValue: number) {
  const valueFormatted = centsValue / 100;
  return valueFormatted.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
