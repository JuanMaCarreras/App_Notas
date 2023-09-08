import { Router } from 'express'
import Note from '../models/notes'

const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.post('/note/add', (req, res) => {
    // const { name, description } = req.body

    // const note = Note(req.body)

    // console.log(note)

    res.send('todo OK')
})

export default router
