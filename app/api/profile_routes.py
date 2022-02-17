from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Profile

profile_routes = Blueprint('profiles', __name__)


@profile_routes.route('/<int:user_id>')
@login_required
def all_user_profiles(user_id):
    profiles = Profile.query.filter(Profile.user_id == user_id).all()
    return jsonify([profile.to_dict() for profile in profiles])


@profile_routes.route('/<int:profile_id>/edit', methods=['PUT'])
@login_required
def change_profile_name(profile_id):
    object = request.json
    profile = Profile.query.get(profile_id)
    profile.name = object['newName']
    db.session.add(profile)
    db.session.commit()
    return profile.to_dict()


@profile_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_profile(id):
    profile = Profile.query.get(id)
    db.session.delete(profile)
    db.session.commit()
    return profile.to_dict()


@profile_routes.route('/<int:id>/create', methods=['POST'])
@login_required
def create_profile(id):
    name = request.json['name']
    profile = Profile(user_id=id, name=name)
    db.session.add(profile)
    db.session.commit()
    return profile.to_dict()
