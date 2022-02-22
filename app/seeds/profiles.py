from app.models import db, Profile
from random import randint


def seed_profiles():

    imgs = [
        'https://res.cloudinary.com/dzmdi0dms/image/upload/v1645550466/images/puppy_n09prf.png',
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

    image = imgs[randint(0, 10)]

    profile1 = Profile(
        user_id=1, name="Batman", img=image)

    image = imgs[randint(0, 10)]

    profile2 = Profile(
        user_id=2, name="Aquaman", img=image)

    image = imgs[randint(0, 10)]

    profile3 = Profile(
        user_id=3, name="Superman", img=image)

    image = imgs[randint(0, 10)]

    profile4 = Profile(
        user_id=1, name="Joker", img=image)

    image = imgs[randint(0, 10)]

    profile5 = Profile(
        user_id=2, name="Black Manta", img=image)

    image = imgs[randint(0, 10)]

    profile6 = Profile(
        user_id=3, name="Lex Luther", img=image)

    image = imgs[randint(0, 10)]

    profile7 = Profile(
        user_id=1, name="Robin", img=image)

    db.session.add(profile1)
    db.session.add(profile2)
    db.session.add(profile3)
    db.session.add(profile4)
    db.session.add(profile5)
    db.session.add(profile6)
    db.session.add(profile7)

    db.session.commit()


def undo_profiles():
    db.session.execute('TRUNCATE profiles RESTART IDENTITY CASCADE;')
    db.session.commit()
