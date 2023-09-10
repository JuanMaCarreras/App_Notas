import { Router } from 'express'
import Note from '../models/notes'

const router = Router()

router.get('/', async (req, res) => {
    const note = await Note.find().lean()

    res.render('index', { note: note })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.post('/note/add', async (req, res) => {
    try {
        const note = Note(req.body)

        await note.save()

        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

export default router
