from email.policy import default
from tkinter import CASCADE
from random import randint
from .db import db


class Profile(db.Model):
    __tablename__ = "profiles"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(25), nullable=False)
    img = db.Column(db.String, nullable=False)

    user_info = db.relationship("User", back_populates="profile_info")
    review_info = db.relationship(
        "Review", back_populates="profile", cascade='all, delete-orphan')
    myList_info = db.relationship("MyList", back_populates="profile3", cascade='all, delete-orphan')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "img": self.img
        }
