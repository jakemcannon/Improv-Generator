
from random import randint

from sqlalchemy import func
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow, fields

app = Flask(__name__)
cors = CORS(app)
ma = Marshmallow(app)

app.config['CORS_HEADERS'] = 'Content-Type'
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

class NounSchema(ma.ModelSchema):
	class Meta:
		model = Noun

class AdjectiveSchema(ma.ModelSchema):
	class Meta:
		model = Adjective


@app.route('/')
def index():
	return jsonify({'message': 'TEST'}), 200


@app.route('/noun')
@cross_origin()
def get_noun():
	noun = db.session.query(Noun).filter_by(id=randint(1, 1200)).first()
	noun_schema = NounSchema()
	return noun_schema.dump(noun), 200


@app.route('/adjective')
@cross_origin()
def get_adjective():
	adj = db.session.query(Adjective).filter_by(id=randint(1, 1200)).first()
	adj_schema = AdjectiveSchema()
	return adj_schema.dump(adj), 200

## this one I am probably going to have to custom build with a dict
@app.route('/adjective_and_noun')
@cross_origin()
def get_adjective_and_noun():
	adj = db.session.query(Adjective).filter_by(id=randint(1, 1200)).first()
	noun = query = db.session.query(Noun).filter_by(id=randint(1, 1200)).first()
	result = adj.word + " " + noun.word
	noun_schema = NounSchema()
	return noun_schema.dump(result), 200


if __name__ == '__main__':
	app.debug = True
	app.run()