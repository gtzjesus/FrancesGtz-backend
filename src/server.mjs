import express from 'express';
import cors from 'cors';

import supabaseRoute from './routes/supabaseRoute.mjs'; // Import your Supabase routes

const app = express();
const port = process.env.PORT || 3001;

// Update CORS configuration to allow requests from your frontend URL
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Handle preflight requests
app.options('/api/sendEmail', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).end();
});

// Use Supabase routes
app.use('/', supabaseRoute);

// Error Handling Middleware
// app.use((err, req, res, next) => {
//   res.status(500).send('Something broke!');
// });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('WorldHello!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
