#
from itertools import count
from turtle import title
from unicodedata import category
from app.models import db, Video


def seed_videos():

    # COMEDY ----------------------------------------------------------------------------------------------------------------------------------
    vid1 = Video(
        title="Step Brothers", category="Comedy", vid="https://www.youtube.com/embed/CewglxElBK0"
    )

    vid2 = Video(
        title="Talladega Knights", category='Comedy', vid="https://www.youtube.com/embed/YfGRg0FLxtE"
    )

    vid3 = Video(
        title="Anchorman", category="Comedy", vid="https://www.youtube.com/embed/NJQ4qEWm9lU"
    )

    vid4 = Video(
        title="Bridesmaids", category='Comedy', vid="https://www.youtube.com/embed/FNppLrmdyug"
    )
    vid5 = Video(
        title="Groundhog Day", category="Comedy", vid="https://www.youtube.com/embed/GncQtURdcE4"
    )

    vid6 = Video(
        title="Hangover", category='Comedy', vid="https://www.youtube.com/embed/tcdUhdOlz9M"
    )
    vid7 = Video(
        title="Coming to America", category="Comedy", vid="https://www.youtube.com/embed/KFroCRDXw5E"
    )

    vid8 = Video(
        title="Mean Girls", category='Comedy', vid="https://www.youtube.com/embed/oDU84nmSDZY"
    )
    vid9 = Video(
        title="Free Guy", category="Comedy", vid="https://www.youtube.com/embed/X2m-08cOAbc"
    )

    vid10 = Video(
        title="Zoolander", category='Comedy', vid="https://www.youtube.com/embed/MaEeSJZYkpY"
    )

    vid11 = Video(
        title="School of Rock", category="Comedy", vid="https://www.youtube.com/embed/TExoc0MG4I4"
    )

    vid12 = Video(
        title="Gamenight", category="Comedy", vid="https://www.youtube.com/embed/qmxMAdV6s4U"
    )

    # DRAMA ----------------------------------------------------------------------------------------------------------------------------------

    vid13 = Video(
        title="Training Day", category="Drama", vid="https://www.youtube.com/embed/DXPJqRtkDP0"
    )

    vid14 = Video(
        title="The Count of Monte Cristo", category='Drama', vid="https://www.youtube.com/embed/qesn8pV9yu8"
    )
    vid15 = Video(
        title="A Beautiful Mind", category="Drama", vid="https://www.youtube.com/embed/YWwAOutgWBQ"
    )

    vid16 = Video(
        title="Fight Club", category="Drama", vid="https://www.youtube.com/embed/qtRKdVHc-cE"
    )

    vid17 = Video(
        title="Inception", category="Drama", vid="https://www.youtube.com/embed/YoHD9XEInc0"
    )

    vid18 = Video(
        title="Talladega Knights", category='Drama', vid="https://www.youtube.com/embed/YfGRg0FLxtE"
    )

    vid19 = Video(
        title="Jaws", category="Drama", vid="https://www.youtube.com/embed/U1fu_sA7XhE"
    )

    vid20 = Video(
        title="The Dark Knight", category='Drama', vid="https://www.youtube.com/embed/EXeTwQWrcwY"
    )

    vid21 = Video(
        title="The Black Panther", category="Drama", vid="https://www.youtube.com/embed/xjDjIWPwcPU"
    )

    vid22 = Video(
        title="Ghost Busters Afterlife", category='Drama', vid="https://www.youtube.com/embed/ahZFCF--uRY"
    )

    vid23 = Video(
        title="The Power of the Dog", category="Drama", vid="https://www.youtube.com/embed/LRDPo0CHrko"
    )

    vid24 = Video(
        title="Dune", category='Drama', vid="https://www.youtube.com/embed/8g18jFHCLXk"
    )

    vid25 = Video(
        title="The Wresteler", category="Drama", vid="https://www.youtube.com/embed/61-GFxjTyV0"
    )

    vid26 = Video(
        title="La La Land", category='Drama', vid="https://www.youtube.com/embed/0pdqf4P9MB8"
    )

    vid27 = Video(
        title="1917", category="Drama", vid="https://www.youtube.com/embed/YqNYrYUiMfg"
    )

    vid28 = Video(
        title="12 Years a Slave", category='Drama', vid="https://www.youtube.com/embed/z02Ie8wKKRg"
    )

    # Romance ----------------------------------------------------------------------------------------------------------------------------------

    vid29 = Video(
        title="St Elmos Fire", category='Romance', vid="https://www.youtube.com/embed/j9Z0Aq8VrN0"
    )

    vid30 = Video(
        title="The Notebook", category="Romance", vid="https://www.youtube.com/embed/yDJIcYE32NU"
    )

    vid31 = Video(
        title="The Princess Bride", category="Romance", vid="https://www.youtube.com/embed/O3CIXEAjcc8"
    )

    vid32 = Video(
        title="Pride & Prejudice", category='Romance', vid="https://www.youtube.com/embed/1dYv5u6v55Y"
    )
    vid33 = Video(
        title="Dirty Dancing", category="Romance", vid="https://www.youtube.com/embed/eIcmQNy9FsM"
    )

    vid34 = Video(
        title="Titanic", category='Romance', vid="https://www.youtube.com/embed/kVrqfYjkTdQ"
    )
    vid35 = Video(
        title="A Star is Born", category="Romance", vid="https://www.youtube.com/embed/0gWeEk2QjdY"
    )

    vid36 = Video(
        title="The Proposal", category='Romance', vid="https://www.youtube.com/embed/Z2lYA7L7PZY"
    )

    vid37 = Video(
        title="She's the Man", category="Romance", vid="https://www.youtube.com/embed/jf67WlthWXk"
    )

    vid38 = Video(
        title="Grease", category='Romance', vid="https://www.youtube.com/embed/qDKo8DNpwOw"
    )

    vid39 = Video(
        title="Me Before You", category="Romance", vid="https://www.youtube.com/embed/Eh993__rOxA"
    )

    vid40 = Video(
        title="13 Going On 30", category="Romance", vid="https://www.youtube.com/embed/5UrCaXLBN30"
    )

    # Action ----------------------------------------------------------------------------------------------------------------------------------

    vid41 = Video(
        title="John Wick 4", category='Action', vid="https://www.youtube.com/embed/56pvThSsoSE"
    )

    vid42 = Video(
        title="Matrix Resurrection", category='Action', vid="https://www.youtube.com/embed/9ix7TUGVYIo"
    )

    vid43 = Video(
        title="Jurassic World Dominion", category="Action", vid="https://www.youtube.com/embed/fb5ELWi-ekk"
    )

    vid44 = Video(
        title="Spider-Man Homecoming", category='Action', vid="https://www.youtube.com/embed/rk-dF1lIbIg"
    )
    vid45 = Video(
        title="Suicide Squad", category="Action", vid="https://www.youtube.com/embed/CmRih_VtVAs"
    )

    vid46 = Video(
        title="No Time to Die", category='Action', vid="https://www.youtube.com/embed/N_gD9-Oa0fg"
    )

    vid47 = Video(
        title="Doctor Strange 2", category="Action", vid="https://www.youtube.com/embed/b8CxjY04sk0"
    )

    vid48 = Video(
        title="Venom", category='Action', vid="https://www.youtube.com/embed/u9Mv98Gr5pY"
    )

    vid49 = Video(
        title="Deadpool", category="Action", vid="https://www.youtube.com/embed/ONHBaC-pfsk"
    )

    vid50 = Video(
        title="Black Widow", category="Action", vid="https://www.youtube.com/embed/ybji16u608U"
    )

    # Horror ----------------------------------------------------------------------------------------------------------------------------------

    db.session.add(vid1)
    db.session.add(vid2)
    db.session.add(vid3)
    db.session.add(vid4)
    db.session.add(vid5)
    db.session.add(vid6)
    db.session.add(vid7)
    db.session.add(vid8)
    db.session.add(vid9)
    db.session.add(vid10)
    db.session.add(vid11)
    db.session.add(vid12)
    db.session.add(vid13)
    db.session.add(vid14)
    db.session.add(vid15)
    db.session.add(vid16)
    db.session.add(vid17)
    db.session.add(vid18)
    db.session.add(vid19)
    db.session.add(vid20)
    db.session.add(vid21)
    db.session.add(vid22)
    db.session.add(vid23)
    db.session.add(vid24)
    db.session.add(vid25)
    db.session.add(vid26)
    db.session.add(vid27)
    db.session.add(vid28)
    db.session.add(vid29)
    db.session.add(vid30)
    db.session.add(vid31)
    db.session.add(vid32)
    db.session.add(vid33)
    db.session.add(vid34)
    db.session.add(vid35)
    db.session.add(vid36)
    db.session.add(vid37)
    db.session.add(vid38)
    db.session.add(vid39)
    db.session.add(vid40)
    db.session.add(vid41)
    db.session.add(vid42)
    db.session.add(vid43)
    db.session.add(vid44)
    db.session.add(vid45)
    db.session.add(vid46)
    db.session.add(vid47)
    db.session.add(vid48)
    db.session.add(vid49)
    db.session.add(vid50)

    db.session.commit()
