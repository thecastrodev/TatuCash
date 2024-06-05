import express from "express";

import { routes } from "./routes";

// import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use(routes);

// app.use(errorMiddleware);

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
