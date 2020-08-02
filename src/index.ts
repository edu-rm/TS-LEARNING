import express from 'express';

const app = express();

import { helloWorld } from './routes';

app.get('/', helloWorld);

app.listen(3333);