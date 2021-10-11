import mongoose from 'mongoose';

const panelSchema = mongoose.Schema({
    name: String,
    rating: String,
    kd: String,
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

var Panel = mongoose.model('Panel', panelSchema);

export default Panel;