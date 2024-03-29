import Parser from "rss-parser"
import { ResponseDTO } from "../responseDTO.js"
import { Params } from "./validationSchema.js"
import { formatDates } from "../../utils/formatters.js"
import * as nodeCrypto from "node:crypto"

type Function = (params: Params) => Promise<ResponseDTO[]>
const parser = new Parser()

const rssURL = "https://www.mitti.se/rss-6.8.0.0.e70d15cb3c"

export const fetchMitti: Function = async({from = 0, to = 25}) => {
    const feed = await parser.parseURL(rssURL)

    return feed.items.map(obj => {
      return {
        id: nodeCrypto.randomUUID(),
        title: obj.title,
        description: obj.content,
        date: formatDates(obj.pubDate),
      }
    }).slice(from, to) as ResponseDTO[]
}