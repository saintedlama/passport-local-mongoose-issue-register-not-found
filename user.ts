import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({},{
    collection:'user',
    timestamps:true,
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model('user',userSchema);