const express = require("express");
const musicController = require("../controllers/music.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");



const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})



const router = express.Router();


router.post("/upload", authMiddleware.authArtist, upload.single("music"), musicController.createMusic);
router.post("/album", authMiddleware.authArtist, musicController.createAlbum);
router.put("/albums/:id", authMiddleware.authArtist, musicController.updateAlbum);
router.delete("/albums/:id", authMiddleware.authArtist, musicController.deleteAlbum);

router.get("/", authMiddleware.authUser, musicController.getAllMusics);
router.get("/albums", authMiddleware.authUser, musicController.getAllAlbums);

router.get("/albums/:id", authMiddleware.authUser, musicController.getAlbumById);


module.exports = router;