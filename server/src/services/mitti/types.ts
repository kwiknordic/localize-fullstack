// not done

export interface Mitti {
  title: string,
  description: string,
  link: string,
  lastBuildDate: string,
  item: Item
}

interface Item {
  title: string,
  description: string,
  category: string,
  link: string,
  pubDate: string,
  guid: "string"
}