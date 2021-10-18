'use strict';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.fileName);
    }
});
const filefilter = (req, file, cb) => {
    if (file.fileType === 'image/png' || file.fileType === 'image/jpg' 
        || file.fileType === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefilter});

export default upload;