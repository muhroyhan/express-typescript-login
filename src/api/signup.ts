import { Request, Response } from 'express';
import models from '../models'

const signup = {
    createUser: async (req: Request, res: Response) => {
        const { User } = models

        const datas = await User.build({
            _id: '3',
            username: 'muhroyhan1',
            password: 'muhroyhan1',
            password2: 'mahmah'
        }).save()
        
        return res.json({
            status: 200,
            data: datas
        })
    }
}

export default signup
