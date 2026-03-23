import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = Flask(__name__)
# Allow CORS for the frontend origin
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}})

# MongoDB Configuration
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/bhairavi_homestay")

try:
    client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=2000)
    # Trigger a connectivity check
    client.server_info()
    db = client.get_default_database() or client["bhairavi_homestay"]
    rooms_collection = db["rooms"]
    bookings_collection = db["bookings"]
    print("Successfully connected to MongoDB.")
except Exception as e:
    print(f"Warning: Could not connect to MongoDB ({e}). Falling back to mock data.")
    # Local mock storage if DB connection fails
    class MockCollection:
        def __init__(self, data=None):
            self.data = data or []
        def find(self, query=None, projection=None):
            return self.data
        def count_documents(self, query):
            return len(self.data)
        def insert_many(self, items):
            self.data.extend(items)
        def insert_one(self, item):
            self.data.append(item)
            item['_id'] = len(self.data)
            return type('obj', (object,), {'inserted_id': item['_id']})
            
    rooms_collection = MockCollection()
    bookings_collection = MockCollection()

# Mock Initial Rooms if collection is empty
if rooms_collection.count_documents({}) == 0:
    rooms_collection.insert_many([
        {"id": 1, "name": "Bhairavi Room", "category": "Classic"},
        {"id": 2, "name": "Shakti Room", "category": "Premium"},
        {"id": 3, "name": "Surya Room", "category": "Sun-facing"},
        {"id": 4, "name": "Chandra Room", "category": "Quiet/Cool"},
        {"id": 5, "name": "Agni Room", "category": "Traditional"},
        {"id": 6, "name": "Vayu Room", "category": "Airy"},
        {"id": 7, "name": "Akasha Room", "category": "Spacious"},
    ])

@app.route('/api/rooms', methods=['GET'])
def get_rooms():
    try:
        rooms = list(rooms_collection.find({}, {'_id': 0}))
        return jsonify(rooms), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/book', methods=['POST'])
def book_room():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "No booking data provided"}), 400
        
        # Add timestamp and status
        data['created_at'] = datetime.utcnow()
        data['status'] = 'pending'
        
        # Basic validation
        if not data.get('name') or not data.get('phone'):
             return jsonify({"error": "Name and Phone are required"}), 400

        result = bookings_collection.insert_one(data)
        
        # Note: If this was a real app, we might trigger a WhatsApp/Email notification here
        print(f"Booking registered: ID={result.inserted_id}")

        return jsonify({"message": "Booking request received successfully", "id": str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
