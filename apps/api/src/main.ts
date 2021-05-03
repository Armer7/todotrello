import * as express from 'express';
import  {addTodoRouters} from './app/todos';
const app = express();

addTodoRouters(app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
