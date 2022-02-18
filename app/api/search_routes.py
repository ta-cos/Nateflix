from flask import Blueprint, jsonify
from app.models import db, Video


search_routes = Blueprint("search", __name__)


@search_routes.route("/")
def load_search():
    targets = Video.query.filter(Video.title).all
    return targets.to_dict()
