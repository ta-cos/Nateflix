from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Profile
from random import randint

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

    imgs = [
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550447/images/turkey_vlsflp.png',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550421/images/snail_lz76r2.png',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550335/images/racoon_l2p1m2.jpg',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550328/images/giraffe_gpqoxn.png',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550320/images/fox_wlkxvq.jpg',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550309/images/penguin_skj24k.png',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550299/images/kitty_k6qbgi.jpg',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550282/images/turtle_talups.png',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550275/images/tiger_bxmogy.png',
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550270/images/cow_lg1gfz.png',
    ]

    name = request.json['name']
    image = imgs[randint(0, 10)]

    print()
    print(image)

    profile = Profile(user_id=id, name=name, img=image)
    db.session.add(profile)
    db.session.commit()
    return profile.to_dict()
