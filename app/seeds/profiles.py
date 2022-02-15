from app.models import db, Profile


def seed_profiles():
    profile1 = Profile(
        user_id=1, name="Batman")

    profile2 = Profile(
        user_id=2, name="Aquaman")

    profile3 = Profile(
        user_id=3, name="Superman")

    profile4 = Profile(
        user_id=1, name="Joker")

    profile5 = Profile(
        user_id=2, name="Black Manta")

    profile6 = Profile(
        user_id=3, name="Lex Luther")

    profile7 = Profile(
        user_id=1, name="Robin")

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
