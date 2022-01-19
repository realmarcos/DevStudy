import express from "express";
import routes from "./routes";
import { logger } from './utils/logger';

const app = express();
const port = 3000;
app.use(routes);

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the teste!');
});
app.listen(port, () => {
  return logger.info(`server is listening on ${port}`);
});