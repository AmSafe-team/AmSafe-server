import express from 'express';
import cors from 'cors';

import auth_router from './routes/auth.routes';
import user_router from './routes/user.routes';
import contact_router from './routes/contact.routes';

const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/auth", auth_router);
app.use("/api/user", user_router);
app.use("/api/contact", contact_router);

export default app;