import express, { Router, Request, Response } from 'express';
import user from './api/user';
const app = express();

const router: Router = express.Router()

router.route('/').get((req: Request, res: Response) =>
    res.send({ message: 'gate api' })
);

router.route('/users').get(user.getUsers)
router.route('/user').get(user.getUser)
router.route('/user/create').post(user.createUser)

export default router;
