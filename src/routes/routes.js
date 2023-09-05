import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('Hola Mundo desde routes')
})

export default router
