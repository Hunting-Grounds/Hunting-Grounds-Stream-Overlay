import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
    fullName: String,
    displayName: String,
    tag: String,
    themeColour: String,
    players: [String],
    selectedFile: String,
    points: String,
    records: String,

    // points: {
    //     type: Number,
    //     default: 0,
    // },
    // records: {
    //     type: Number,
    //     default: 0,
    // },
})

var Team = mongoose.model('Team', teamSchema);

export default Team;