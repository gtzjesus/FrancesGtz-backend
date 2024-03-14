import express from 'express';
import cors from 'cors';

import supabaseRoute from './routes/supabaseRoute.mjs'; // Import your Supabase routes

const app = express();
const PORT = process.env.PORT || 3001;

// Update cors configuration to allow requests from URLs
app.use(
  cors({
    origin: '*',
    methods: ['GET'], // Only allow GET requests
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Call supabase route
app.use('/', supabaseRoute);

// Middleware to handle error handling
app.use((err, req, res, next) => {
  res.status(500).send('Something broke');
});

// Listen to port
app.listen(PORT, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
