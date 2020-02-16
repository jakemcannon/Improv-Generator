
from random import randint

from sqlalchemy import func
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345@localhost/improv_words'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Noun(db.Model):
	__tablename__ = 'noun'
	id = db.Column(db.Integer, primary_key=True)
	word = db.Column(db.String(50))

	def __init__(self, word):
		self.word = word


class Adjective(db.Model):
	__tablename__ = 'adjective'
	id = db.Column(db.Integer, primary_key=True)
	word = db.Column(db.String(50))

	def __init__(self, word):
		self.word = word


@app.route('/')
def index():
	return jsonify({'message': 'TEST'}), 200


@app.route('/noun')
def get_noun():

	query = db.session.query(Noun).filter_by(id=randint(1, 1200)).first()
	return query.word


@app.route('/adjective')
def get_adjective():

	query = db.session.query(Adjective).filter_by(id=randint(1, 1200)).first()
	return query.word


@app.route('/adjective_and_noun')
def get_adjective_and_noun():
	adj = db.session.query(Adjective).filter_by(id=randint(1, 1200)).first()
	noun = query = db.session.query(Noun).filter_by(id=randint(1, 1200)).first()
	return adj.word + " " + noun.word


if __name__ == '__main__':
	app.debug = True
	app.run()