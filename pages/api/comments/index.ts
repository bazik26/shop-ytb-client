import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// URL вашего NestJS API
const API_URL = 'http://localhost:3000/comments';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get(API_URL);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch comments' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, body, time } = req.body;
      const response = await axios.post(API_URL, { name, body, time });
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add comment' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}