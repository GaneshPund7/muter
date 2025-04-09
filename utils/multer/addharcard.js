const multer = require('multer');
const fs = require('fs')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './folder/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.split('.')[0] + '.' + file.originalname.split('.').pop());
    }
});
exports.filename = multer({ storage: storage }).array('file', 2);
 