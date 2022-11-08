import mongoose from 'mongoose'

interface IUser {
    _id: String;
    username: String;
    password: String;
    password2: String;
}

interface UserDoc extends mongoose.Document {
    _id: String;
    username: String;
    password: String;
    password2: String;
}

interface UserModelInterface extends mongoose.Model<UserDoc> {
    build(attr: IUser): UserDoc
}

const UserScheme = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    username: String,
    password: String,
    password2: String
});

UserScheme.statics.build = (attr: IUser) => {
    return new User(attr)
}

const User = mongoose.model<UserDoc, UserModelInterface>('user', UserScheme, 'user')

export default User
