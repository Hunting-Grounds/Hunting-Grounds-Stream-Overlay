import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
    name: String,
    kd: String,
    hs: String,
    favops: [String],
    selectedFile: String,
})

var Player = mongoose.model('Player', playerSchema);

export default Player;