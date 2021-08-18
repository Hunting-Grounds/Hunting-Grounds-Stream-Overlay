import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
    fullName: String,
    displayName: String,
    tag: String,
    themeColour: String,
    players: [String],
    selectedFile: String,
    points: {
        type: Number,
        default: 0,
    },
    record: String,
});

var TeamInfo = mongoose.model('TeamInfo', teamSchema);

export default TeamInfo;