const { MongoClient } = require('mongodb');

const MONGO_URI = process.env.MONGO_URI;

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }
  
  if (!MONGO_URI) {
    return null;
  }

  const client = new MongoClient(MONGO_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

const mockRooms = [
  {"id": 1, "name": "Ganga Room", "category": "Classic"},
  {"id": 2, "name": "Godavari Room", "category": "Premium"},
  {"id": 3, "name": "Brahmaputra Room", "category": "Sun-facing"},
  {"id": 4, "name": "Yamuna Room", "category": "Quiet/Cool"},
  {"id": 5, "name": "Kaveri Room", "category": "Traditional"},
  {"id": 6, "name": "Narmada Room", "category": "Airy"},
  {"id": 7, "name": "Saraswati Room", "category": "Spacious"},
];

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const client = await connectToDatabase();
    if (!client) {
      // Fallback to mock data if no MongoDB is connected
      return res.status(200).json(mockRooms);
    }
    
    const db = client.db('bhairavi_homestay');
    const roomsCollection = db.collection('rooms');
    
    let rooms = await roomsCollection.find({}, { projection: { _id: 0 } }).toArray();
    
    if (rooms.length === 0) {
      await roomsCollection.insertMany(mockRooms);
      rooms = mockRooms;
    }
    
    return res.status(200).json(rooms);
  } catch (error) {
    console.error("MongoDB error", error);
    // Fallback to mock data
    return res.status(200).json(mockRooms);
  }
}
