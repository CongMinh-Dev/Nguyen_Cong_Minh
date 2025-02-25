import express from 'express'

import studentRouter from './studentRouter';


const rootRouter = express.Router()




rootRouter.use("/",studentRouter)



export default rootRouter;