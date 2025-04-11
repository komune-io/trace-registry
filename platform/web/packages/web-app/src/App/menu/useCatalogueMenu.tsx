import {CatalogueRefTree, config, useCatalogueRefGetTreeQuery} from "domain-components";
import {CatalogueAll, Icon, useRoutesDefinition} from "components";
import {Location} from "history";
import {useLocation} from "react-router";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {getMenu, MenuItem} from "./index";
import {sortCatalogues} from "domain-components/src/Catalogue/model/utils";

function asMenu(item: CatalogueRefTree, cataloguesAll: CatalogueAll, location: Location<any>): MenuItem[] {
  const { platform } = config()
  if(isMenu(item)) {
    return item.catalogues
      ?.sort(sortCatalogues)
      ?.flatMap( (it) => asMenu(it, cataloguesAll, location)) ?? []
  }
  console.log("catalogue", item)
  const catalogue = isAlias(item) ? item.relatedCatalogues?.["menu"][0]! : item
  if(!catalogue) return []
  const catalogueLink = isBranch(catalogue)
    ? cataloguesAll(catalogue?.identifier!)
    : cataloguesAll(item?.identifier!, catalogue?.identifier!)
  // const catalogueLink = cataloguesAll(catalogue?.identifier!)
  const baseUrl = platform.url.endsWith('/')
    ? platform.url.slice(0, -1) // remove trailing slash
    : platform.url
  const path = item.img?.startsWith("/")
    ? item.img
    : `/${item.img}`
  const icon = item.img ?
    <Icon src={`${baseUrl}${path}`}/> : undefined
  const items = isLeaf(item)
    ? []
    : isBranch(catalogue)
      ? item.catalogues?.flatMap( (it) => asMenu(it, cataloguesAll, location)) ?? []
      : catalogue.catalogues?.map(mapCatalogueRef([catalogue.identifier], cataloguesAll))

  return [{
    key: catalogue.id,
    // to: isTransient(item) ? undefined : catalogueLink,
    to: catalogueLink,
    label: item.title,
    icon: icon,
    isSelected: location.pathname === catalogueLink,
    items: items
  }]
}

export const useCatalogueMenu = (identifier: string) => {
  const location = useLocation()
  const { i18n } = useTranslation()

  const catalogueRefGetTreeQuery = useCatalogueRefGetTreeQuery({
    query: {
      identifier: identifier,
      language: i18n.language
    },
    options: {
      enabled: true
    }
  })
  const { cataloguesAll } = useRoutesDefinition()

  const menu: MenuItem[] = useMemo(() => {
    const catalogue = catalogueRefGetTreeQuery.data?.item
    if(!catalogue) return []
    return asMenu(catalogue, cataloguesAll, location)

  }, [catalogueRefGetTreeQuery.data?.item, location.pathname, cataloguesAll])
  return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}

const mapCatalogueRef = (currentPaths: string[], cataloguesAll: (...objectIds: string[]) => string) => (item: CatalogueRefTree): MenuItem => {
  const newPath = [...currentPaths, item.identifier]
  const ref = cataloguesAll(...currentPaths, item.identifier)
  const pathWithoutTab = location.pathname
  return {
    key: item.identifier,
    to: ref,
    label: item.title,
    isSelected: pathWithoutTab === ref,
    items: item.catalogues?.map(mapCatalogueRef(newPath, cataloguesAll))
  } as MenuItem
}


const isMenu = (catalogue: CatalogueRefTree) =>
  catalogue.structure?.type == "menu"

const isBranch = (catalogue: CatalogueRefTree) =>
  catalogue.structure?.type == "menu-branch"

const isLeaf = (catalogue: CatalogueRefTree) =>
  catalogue.structure?.type == "menu-leaf"

const isAlias = (catalogue: CatalogueRefTree) =>
  catalogue.structure?.definitions["alias"] == "true"

// const isTransient = (catalogue: CatalogueRefTree) =>
//   catalogue.structure?.definitions["transient"] == "true"
