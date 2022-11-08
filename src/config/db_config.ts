import mongoose from 'mongoose'

const DB_LINK = 'mongodb+srv://master:master123@first-cluster.dstrspb.mongodb.net/login_test'

const dbConfig = () => {
    mongoose.connect(DB_LINK, {}, () => {
        console.log('Connected to Database')
    })
}

export default dbConfig