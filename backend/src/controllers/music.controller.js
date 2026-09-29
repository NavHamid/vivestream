require("dotenv").config();
const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadImage } = require("../services/storage.service");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {





    const { title } = req.body;
    const file = req.file;


    const result = await uploadImage(file.buffer.toString("base64"));

    const music = await musicModel.create({
        title,
        uri: result.url,
        artist: req.user.id
    })

    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            title: music.title,
            uri: music.uri,
            artist: req.user.id
        }
    })

}



async function createAlbum(req, res) {

    const { title, musics } = req.body

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        musics: musics
    })

    res.status(201).json({
        message: "Album created successfully",
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics,
        }
    })
}



async function getAllMusics(req, res) {
    try {
        const musics = await musicModel
            .find()
            .limit(50)
            .populate("artist", "username email");
        res.status(200).json({
            message: "Musics fetched successfully",
            musics: musics
        });
    } catch (error) {
        console.error("Error in getAllMusics:", error);
        res.status(500).json({ message: "Error fetching musics" });
    }
}


async function getAllAlbums(req, res) {
    try {
        const albums = await albumModel.find().select("title artist").populate("artist", "username email");
        res.status(200).json({
            message: "Albums fetched successfully",
            albums: albums
        });
    } catch (error) {
        console.error("Error in getAllAlbums:", error);
        res.status(500).json({ message: "Error fetching albums" });
    }
}


async function getAlbumById(req, res) {
    try {
        const albumId = req.params.id; // Map to the ':id' parameter defined in routes
        const album = await albumModel.findById(albumId)
            .populate("artist", "username email")
            .populate({
                path: "musics",
                populate: { path: "artist", select: "username email" }
            });

        if (!album) {
            return res.status(404).json({
                message: "Album not found"
            });
        }

        res.status(200).json({
            message: "Album fetched successfully",
            album: album
        });
    } catch (error) {
        console.error("Error in getAlbumById:", error);
        res.status(500).json({ message: "Error fetching album details" });
    }
}

async function updateAlbum(req, res) {
    try {
        const albumId = req.params.id;
        const { title, musics } = req.body;

        // Find the album and ensure the artist matches the logged in user
        const album = await albumModel.findOne({ _id: albumId, artist: req.user.id });
        if (!album) {
            return res.status(404).json({ message: "Album not found or access denied" });
        }

        if (title !== undefined) album.title = title;
        if (musics !== undefined) album.musics = musics;

        await album.save();

        res.status(200).json({
            message: "Album updated successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics,
            }
        });
    } catch (error) {
        console.error("Error updating album:", error);
        res.status(500).json({ message: "Error updating album" });
    }
}

async function deleteAlbum(req, res) {
    try {
        const albumId = req.params.id;

        // Find and delete the album ensuring the artist matches the logged in user
        const result = await albumModel.findOneAndDelete({ _id: albumId, artist: req.user.id });
        if (!result) {
            return res.status(404).json({ message: "Album not found or access denied" });
        }

        res.status(200).json({
            message: "Album deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting album:", error);
        res.status(500).json({ message: "Error deleting album" });
    }
}


module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbums, getAlbumById, updateAlbum, deleteAlbum }
