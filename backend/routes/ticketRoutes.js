const express = require('express')
const router = express.Router()
const {
    getTickets,
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket,
} = require('../controllers/ticketController')

const { protect } = require('../middelware/authMiddleware')

// re-route into note router


router.route('/').get(protect, getTickets).post(protect, createTicket)

router
    .route('/')
    .get(protect, getTicket)
    .delete(protect, deleteTicket)
    .put(protect, updateTicket)

module.exports = router