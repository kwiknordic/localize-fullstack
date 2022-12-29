import express from "express"
import { notFoundError } from "../middleware/error/errors.js"
import { sendPosts } from "../middleware/sendPosts.js"
import { validateQuery } from "../middleware/validateQuery.js"
import { fetchBrottsplatskartan as fetchBPK } from "../services/brottsplatskartan/fetchBrottsplatskartan.js"
import { validationSchema as BPK } from "../services/brottsplatskartan/validationSchema.js"
import { fetchMitti } from "../services/mitti/fetchMitti.js"
import { validationSchema as mitti } from "../services/mitti/validationSchema.js"
const router = express.Router()

router.get("/brottsplatskartan", validateQuery(BPK), sendPosts(fetchBPK))
router.get("/mitti", validateQuery(mitti), sendPosts(fetchMitti))

router.use(() => {
throw new notFoundError()
})

export default router