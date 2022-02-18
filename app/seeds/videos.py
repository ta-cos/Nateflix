#
from turtle import title
from unicodedata import category
from app.models import db, Video


def seed_videos():

    vid1 = Video(
        title="Step Brothers", category="Comedy", vid="https://www.youtube.com/embed/CewglxElBK0"
    )

    vid2 = Video(
        title="Talladega Knights", category='Comedy', vid="https://www.youtube.com/embed/YfGRg0FLxtE"
    )
    vid3 = Video(
        title="vid3", category="Comedy", vid="https://www.youtube.com/embed/CewglxElBK0"
    )

    vid4 = Video(
        title="vid4", category='Comedy', vid="https://www.youtube.com/embed/YfGRg0FLxtE"
    )
    vid5 = Video(
        title="vid5", category="Comedy", vid="https://www.youtube.com/embed/CewglxElBK0"
    )

    vid6 = Video(
        title="vid6", category='Comedy', vid="https://www.youtube.com/embed/YfGRg0FLxtE"
    )
    vid7 = Video(
        title="vid7", category="Comedy", vid="https://www.youtube.com/embed/CewglxElBK0"
    )

    vid8 = Video(
        title="vid8", category='Comedy', vid="https://www.youtube.com/embed/YfGRg0FLxtE"
    )

    vid9 = Video(
        title="vid9", category="Drama", vid="https://www.youtube.com/embed/YfGRg0FLxtE"
    )

    db.session.add(vid1)
    db.session.add(vid2)
    db.session.add(vid3)
    db.session.add(vid4)
    db.session.add(vid5)
    db.session.add(vid6)
    db.session.add(vid7)
    db.session.add(vid8)
    db.session.add(vid9)

    db.session.commit()
