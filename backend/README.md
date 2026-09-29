# VibeStream - Backend API Server

This directory contains the REST API server powering VibeStream. It is built using Node.js, Express, MongoDB, and Mongoose.

## Architecture & File Structure

- **`server.js`**: Main entry point that sets DNS lookups, initializes the database connection, and starts the Express server.
- **`src/app.js`**: Configures middleware (CORS, JSON parsers, cookie parsing, upload parsers) and maps `/api/auth` and `/api/music` routers.
- **`src/db/`**: Handles MongoDB connection setup.
- **`src/models/`**:
  - `User.js`: User accounts representing user details, hashed password, and role (`user` or `artist`).
  - `Music.js`: Tracks containing title, file URI details, and reference to the artist.
  - `Album.js`: Album groups containing title, artist reference, and track array.
- **`src/controllers/`**:
  - `auth.controller.js`: User signup, login, session validation, and logout.
  - `music.controller.js`: Track uploads via ImageKit file storage, database registry, and album queries.
- **`src/middlewares/`**:
  - `auth.middleware.js`: Verifies JWT sessions and validates whether users have the `artist` role.

## API Endpoints

### Authentication Router (`/api/auth`)
- `POST /register`: Register a new Listener or Artist.
- `POST /login`: Log in a user and issue a JWT session cookie.
- `POST /logout`: Clear session cookies.

### Music Router (`/api/music`)
- `POST /upload` *(Artist Only)*: Uploads a track. Expects multipart form data (`music` audio file and `title`).
- `POST /album` *(Artist Only)*: Combines a set of tracks into a curated album.
- `PUT /albums/:id` *(Artist Only)*: Edit an album's title or tracks list.
- `DELETE /albums/:id` *(Artist Only)*: Remove a curated album from the database.
- `GET /`: Retrieve all trending songs.
- `GET /albums`: Retrieve all curated albums.
- `GET /albums/:id`: Fetch track data and details of a single album.
