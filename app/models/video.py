from .db import db


class Video(db.Model):
    __tablename__ = "videos"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    img = db.Column(db.String, nullable=False)
    vid = db.Column(db.String, nullable=False)

    review = db.relationship("Review", back_populates="video")
    vid = db.relationship("MyList", back_populates="vid_info")

    def to_dict(self):
        return {
            "id": self.id,
            "profile_id": self.profile_id,
            "video_id": self.video_id,
            "rating": self.rating
        }
