

from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/')
def index():
	return jsonify({'message': 'TEST'}), 200

@app.route('/noun')
def get_noun():
	pass

@app.route('/adjective')
def get_adjective():
	pass

@app.route('/adjective_and_noun')
def get_adjective_and_noun():
	pass

if __name__ == '__main__':
	app.debug = True
	app.run()