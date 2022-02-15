from .db import db


class MyList(db.Model):
    __tablename__ = "my-list"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    profile_id = db.Column(db.Integer, db.ForeignKey("profiles.id"), nullable=False)
    video_id = db.Column(db.Integer, db.ForeignKey("videos.id"), nullable=False)

    profile3 = db.relationship("Profile", back_populates="myList_info")
    vid_info = db.relationship("Video", back_populates="vid")

    def to_dict(self):
        return {
            "id": self.id,
            "profile_id": self.profile_id,
            "video_id": self.video_id,
            "title": self.title
        }
