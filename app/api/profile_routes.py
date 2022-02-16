from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Profile

profile_routes = Blueprint('profiles', __name__)


@profile_routes.route('/<int:user_id>')
@login_required
def all_user_profiles():
    profiles = Profile.query.all(user_id)
    return {'users': [profiles.to_dict() for profile in profiles]}
