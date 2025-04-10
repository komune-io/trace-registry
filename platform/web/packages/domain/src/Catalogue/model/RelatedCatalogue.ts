import {Catalogue, CatalogueRef} from "./index";

interface RelatedCataloguesOptions {
  [key: string]: Catalogue[] | CatalogueRef[];
}

interface RelatedCatalogueIds {
  [key: string]: string[];
}

export function convertRelatedCataloguesToIds(relatedCatalogues: RelatedCataloguesOptions): RelatedCatalogueIds {
  const relatedCatalogueIds: RelatedCatalogueIds = {};

  for (const catalogueType in relatedCatalogues) {
    if (relatedCatalogues.hasOwnProperty(catalogueType)) {
      relatedCatalogueIds[catalogueType] = relatedCatalogues[catalogueType].map(item => {
        return item.id
      });
    }
  }

  return relatedCatalogueIds;
}

