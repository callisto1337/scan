export type SourceBarcodes = string;

export type NormalizedBarcode = Record<'barcode' | 'value', string>;

export function getNormalizedBarcodes(
  sourceBarcodes: SourceBarcodes
): NormalizedBarcode[] {
  const result: NormalizedBarcode[] = [];

  sourceBarcodes.split('\n').map((str) => {
    const [value, barcode]: any = str.split(';');

    if (value && barcode) {
      result.push({
        barcode,
        value,
      });
    }
  });

  return result;
}
