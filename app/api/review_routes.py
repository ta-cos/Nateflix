from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Review

review_routes = Blueprint('review', __name__)


@review_routes.route('/<int:profile_id>')
@login_required
def get_review(profile_id):
    reviews = Review.query.filter(Review.profile_id == profile_id).all()
    return jsonify([review.to_dict() for review in reviews])


@review_routes.route('/create', methods=['POST'])
@login_required
def create_review():
    object = request.json

    isNotNew = Review.query.filter(
        Review.profile_id == object['profile_id'], Review.video_id == object['video_id']).first()

    if(isNotNew):
        isNotNew.rating = object['rating']
        db.session.commit()
        return isNotNew.to_dict()
    else:
        review = Review(
            profile_id=object['profile_id'], video_id=object['video_id'], rating=object['rating']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()


@review_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()
