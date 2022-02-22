from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, MyList

my_list_routes = Blueprint('mylist', __name__)


@my_list_routes.route('/<int:profile_id>')
@login_required
def all_list_items(profile_id):
    lists = MyList.query.filter(MyList.profile_id == profile_id).all()

    return jsonify([mylist.to_dict() for mylist in lists])


@my_list_routes.route('/<int:id>/create', methods=['POST'])
@login_required
def add_list_item(id):
    title = request.json['title']
    profileId = request.json['profileId']
    videoId = request.json['videoId']
    list = MyList(title=title, profile_id=profileId, video_id=videoId)
    db.session.add(list)
    db.session.commit()
    return list.to_dict()


@my_list_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_list_item(id):
    list = MyList.query.get(id)
    print()
    print(list)
    print()
    db.session.delete(list)
    db.session.commit()
    return list.to_dict()
