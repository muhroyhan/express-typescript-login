import express, { Request, Response } from 'express';
import dbConfig from './config/db_config';
import routes from './routes'

const { PORT = 3000 } = process.env;

dbConfig()

const app = express();

app.get('/', (req: Request, res: Response) =>
  res.send({ message: 'home api' })
);

app.use('/api', routes);

if (require.main === module) { // true if file is executed
    app.listen(PORT, () => {
      console.log('server started at http://localhost:'+PORT);
    });
}

export default app;
