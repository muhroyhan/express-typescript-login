import mongoose from 'mongoose'

const DB_LINK = 'mongodb+srv://master:master123@first-cluster.dstrspb.mongodb.net/login_test'

const dbConfig = async () => {
    try {
        await mongoose.connect(DB_LINK)
        console.log('Database is Connected')
    } catch(_) {
        console.log('Database connection error')
    }    
}

export default dbConfig