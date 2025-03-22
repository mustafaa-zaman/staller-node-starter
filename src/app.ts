import express from "express";
import { setupSwagger, registerRoutes } from "staller-plugin";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(registerRoutes({ rootDir: __dirname }));

if(process.env.NODE_ENV === 'development'){
  app.use(setupSwagger({ rootDir: __dirname }));
}

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);