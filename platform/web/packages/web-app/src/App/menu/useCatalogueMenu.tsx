import {CatalogueRefTree, sortCatalogues, useCatalogueRefGetTreeQuery} from "domain-components";
import {CatalogueAll, config, Icon, useRoutesDefinition} from "components";
import {Location} from "history";
import {useLocation} from "react-router";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {getMenu, MenuItem} from "./index";

function asMenu(item: CatalogueRefTree, cataloguesAll: CatalogueAll, location: Location<any>): MenuItem[] {
  if (isMenu(item)) {
    return item.catalogues
      ?.sort(sortCatalogues)
      ?.flatMap( (it) => asMenu(it, cataloguesAll, location)) ?? []
  }

  const catalogue = isAlias(item) ? item.relatedCatalogues?.["menu"]?.[0] : item
  if (!catalogue) return []

  const catalogueLink = cataloguesAll(catalogue.id)
  // const catalogueLink = cataloguesAll(catalogue?.id!)

  const items = isLeaf(item)
    ? []
    : isBranch(catalogue)
      ? item.catalogues?.flatMap( (it) => asMenu(it, cataloguesAll, location)) ?? []
      : catalogue.catalogues?.map(mapCatalogueRef([catalogue.id], cataloguesAll))

  return [{
    key: catalogue.id,
    // to: isTransient(item) ? undefined : catalogueLink,
    to: catalogueLink,
    label: item.title,
    icon: <BackEndIcon url={item.img}/>,
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
  const newPath = [...currentPaths, item.id]
  const ref = cataloguesAll(...currentPaths, item.id)
  const pathWithoutTab = location.pathname
  return {
    key: item.id,
    to: ref,
    label: item.title,
    isSelected: pathWithoutTab === ref,
    items: item.catalogues?.map(mapCatalogueRef(newPath, cataloguesAll))
  } as MenuItem
}


const isMenu = (catalogue: CatalogueRefTree) => catalogue.structure?.type == "MENU"

const isBranch = (catalogue: CatalogueRefTree) => catalogue.structure?.type == "MENU_BRANCH"

const isLeaf = (catalogue: CatalogueRefTree) => catalogue.structure?.type == "MENU_LEAF"

const isAlias = (catalogue: CatalogueRefTree) => catalogue.structure?.alias ?? false

// const isTransient = (catalogue: CatalogueRefTree) => catalogue.structure?.transient ?? false

export const BackEndIcon = ({url}) => {
  const { platform } = config()
  const baseUrl = platform.url.endsWith('/')
    ? platform.url.slice(0, -1) // remove trailing slash
    : platform.url
  const path = url?.startsWith("/")
    ? url
    : `/${url}`
  return url ? <Icon src={`${baseUrl}${path}`}/> : undefined
}
