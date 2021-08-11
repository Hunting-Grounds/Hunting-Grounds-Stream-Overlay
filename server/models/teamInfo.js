import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
    fullName: String,
    displayName: String,
    tag: String,
    themeColur: String,
    points: Number,
    Record: String,
    Logo: String,
});

var TeamInfo = mongoose.model('TeamInfo', teamSchema);

export default TeamInfo;