import { Request, Response } from 'express';
import models from '../models'

const createUser = async (req: Request, res: Response) => {
    const { User } = models

    try {
        const datas = await User.build(req.body).save()

        return res.json({
            status: 200,
            data: datas
        })
    } catch(err) {
        return Promise.reject({
            status: 404,
            errorMessage: err
        })
    }
}

const getUser = async (req: Request, res: Response) => {
    const { User } = models

    try {
        const user = await User.findOne(req.query)
        
        return res.json({
            status: 200,
            data: user
        })
    } catch(err) {
        console.log(err)
        return Promise.reject({
            status: 404,
            errorMessage: err
        })
    }
} 

const getUsers = async (req: Request, res: Response) => {
    const { User } = models

    try {
        const datas = await User.find({})
        
        return res.json({
            status: 200,
            data: {
                users: datas
            }
        })
    } catch(err) {
        console.log(err)
        return Promise.reject({
            status: 404,
            errorMessage: err
        })
    }
} 

export default { createUser, getUsers, getUser }
