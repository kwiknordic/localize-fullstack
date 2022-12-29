import Parser from "rss-parser"
import { ResponseDTO } from "../responseDTO.js"
import { Params } from "./validationSchema.js"
import { formatDates } from "../../utils/formatters.js"

type Function = (params: Params) => Promise<ResponseDTO[]>
const parser = new Parser()

const rssURL = "https://www.mitti.se/rss-6.8.0.0.e70d15cb3c"

export const fetchMitti: Function = async({from, to}) => {
    const feed = await parser.parseURL(rssURL)

    return feed.items.map(obj => {
      return {
        title: obj.title,
        description: obj.description,
        date: formatDates(obj.pubDate),
      }
    }).slice(from, to) as ResponseDTO[]
}