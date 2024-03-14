import express from 'express';
import { getHouses } from '../controllers/dataController.mjs';

// Start with creating router to define routes for our API
const router = express.Router();

// Define our GET route to aquire houses
// Callback function gets executed
router.get('/api/houses', async (req, res) => {
  try {
    // Call our controller module to fetch our houses
    const houses = await getHouses();
    res.json(houses);
  } catch (error) {
    console.error('Error fetching houses', error);
  }

  // Send error back to client
  res.status(500).json({ error: 'Failed to fetch houses from Supabase' });
});

export default router;
