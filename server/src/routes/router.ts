import express from "express"
import { notFoundError } from "../middleware/error/errors.js"
import { sendPosts } from "../middleware/sendPosts.js"
import { validateQuery } from "../middleware/validateQuery.js"
import { fetchBrottsplatskartan as fetchBPK } from "../services/brottsplatskartan/fetchBrottsplatskartan.js"
import { validationSchema as bpkSchema } from "../services/brottsplatskartan/validationSchema.js"
import { fetchMitti } from "../services/mitti/fetchMitti.js"
import { validationSchema as mittiSchema } from "../services/mitti/validationSchema.js"
import { validationSchema as ticketMaster } from "../services/ticketmaster/validationSchema.js"
import { fetchTicketmaster } from "../services/ticketmaster/fetchTicketmaster.js"
const router = express.Router()

router.get("/brottsplatskartan", validateQuery(bpkSchema), sendPosts(fetchBPK))
router.get("/mitti", validateQuery(mittiSchema), sendPosts(fetchMitti))
router.get("/events", validateQuery(ticketMaster), sendPosts(fetchTicketmaster))

router.use(() => {
throw new notFoundError()
})

export default router