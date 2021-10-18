import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },
    fileParent: {
        type: String,
        required: false
    },
}, {timestamps: true});

var singlefile = mongoose.model('SingleFile', singleFileSchema);

export default singlefile;