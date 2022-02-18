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

    isNew = Review.query.filter(
        Review.profile_id == object['profile_id'] and Review.video_id == object['video_id']
    ).first()

    if(isNew):
        print()
        print()
        print()
        print(isNew.rating)
        print()
        print()
        print()
        isNew.rating = object['rating']
        print()
        print()
        print()
        print(isNew.rating)
        db.session.add(isNew)
        db.session.commit()
        return isNew.to_dict()
    else:
        review = Review(
            profile_id=object['profile_id'], video_id=object['video_id'], rating=object['rating']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()


# @review_routes.route('/<int:review_id>/edit', methods=['PUT'])
# @login_required
# def edit_review(review_id):
#     object = request.json

#     review = Review.query.get(review_id)
#     review.rating = object['rating']
#     db.session.add(review)
#     db.session.commit()
#     return review.to_dict()


@review_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()
