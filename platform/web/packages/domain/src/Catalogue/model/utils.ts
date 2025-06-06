import {Catalogue, CatalogueRefTree} from "./index";


export const sortCatalogues = (a: CatalogueRefTree | Catalogue, b: CatalogueRefTree | Catalogue): number => {
  // First compare by order if available
  const orderA = a.order;
  const orderB = b.order;

  if (orderA !== undefined && orderB !== undefined) {
    const numA = Number(orderA);
    const numB = Number(orderB);

    // Only use numeric comparison if both values convert to valid numbers
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
  }

  // Fall back to title comparison
  return a.title.localeCompare(b.title);
}
