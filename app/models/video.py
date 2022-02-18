from .db import db


class Video(db.Model):
    __tablename__ = "videos"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    img = db.Column(db.String(255), nullable=True)
    vid = db.Column(db.String(255), nullable=False)

    review = db.relationship("Review", back_populates="video")
    # vids = db.relationship("MyList", back_populates="vid_info")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "category": self.category,
            "img": self.category,
            "vid": self.vid
        }
