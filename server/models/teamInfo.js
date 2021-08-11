import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
    fullName: String,
    displayName: String,
    tag: String,
    themeColour: String,
    points: Number,
    record: String,
});

var TeamInfo = mongoose.model('TeamInfo', teamSchema);

export default TeamInfo;