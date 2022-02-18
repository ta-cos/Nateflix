from .db import db


class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey(
        "profiles.id"), nullable=False)
    video_id = db.Column(db.Integer, db.ForeignKey(
        "videos.id"), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    profile = db.relationship("Profile", back_populates="review_info")
    video = db.relationship("Video", back_populates="review")

    def to_dict(self):
        return {
            "id": self.id,
            "profile_id": self.profile_id,
            "video_id": self.video_id,
            "rating": self.rating
        }
