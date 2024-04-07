from flask import Flask , request , jsonify , send_from_directory
from flask_cors import CORS
import json
import os

app = Flask ( __name__ )
CORS(app)

users= []

#User Registration API Endpoint
@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if not username or not password or not email:
        return jsonify({'error': 'Username, password, and email are required'}), 400

    # Check if the username already exists
    for user in users:
        if user['username'] == username:
            return jsonify({'error': 'Username already exists'}), 409

    # Add the user to the users list
    users.append({'username': username, 'password': password, 'email': email})
    return jsonify({'message': 'User registered successfully'}), 201

# User Authentication API endpoint
@app.route('/api/login', methods=['POST'])
def login_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    # Check if the username and password match
    for user in users:
        if user['username'] == username and user['password'] == password:
            return jsonify({'message': 'Login successful'}), 200

    return jsonify({'error': 'Incorrect username or password'}), 401

if __name__ == '__main__':
    app.run(debug=True)
