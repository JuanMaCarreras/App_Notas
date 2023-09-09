import { Router } from 'express'
import Note from '../models/notes'

const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.post('/note/add', async (req, res) => {
    const note = Note(req.body)

    await note.save()

    res.redirect('/')
})

export default router
