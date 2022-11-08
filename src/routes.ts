import express, { Router, Request, Response } from 'express';
import signup from './api/signup';
const app = express();

const router: Router = express.Router()

router.route('/').get((req: Request, res: Response) =>
    res.send({ message: 'gate api' })
);
router.route('/user/create').get(signup.createUser)

export default router;
