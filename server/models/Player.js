import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
    name: String,
    rating: String,
    kd: String,
    //favops: [String],
    entry: String,
    maps: String,
    kost: String,
    kpr: String,
    srv: String,
    clutchwins: String,
    plant: String,
    disable: String,
    hs: String,
    atk: String,
    def: String,
    selectedFile: String,
})

var Player = mongoose.model('Player', playerSchema);

export default Player;