from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Video

video_routes = Blueprint('videos', __name__)


@video_routes.route('/')
@login_required
def all_videos():
    videos = Video.query.all()
    return jsonify([video.to_dict() for video in videos])
