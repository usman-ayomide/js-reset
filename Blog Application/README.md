# Blog Application

A personal blog application built with Node.js, Express, and EJS.

The app allows a user to write blog posts, save unfinished posts as drafts, edit or delete drafts, publish posts to the homepage, and create a simple profile. Data is saved locally in a JSON file so posts, drafts, and profile information can survive a server restart.

## Features

- Homepage that displays published blog posts
- Write page for creating new posts
- Save to draft option
- Draft page that lists saved drafts
- Edit and delete draft functionality
- Publish drafts to the homepage
- Profile page with profile picture, username, country, and date of birth
- Edit profile functionality
- Local JSON data persistence
- Basic styling with CSS

## Tech Stack

- Node.js
- Express
- EJS
- HTML
- CSS
- JavaScript
- JSON file storage

## Project Structure

```text
Blog Application/
  data/
    blog.json
  public/
    main.css
    styles.css
  views/
    partials/
      header.ejs
      footer.ejs
    index.ejs
    write.ejs
    draft.ejs
    profile.ejs
  index.js
  package.json
  README.md
```

## Main Routes

```text
GET  /                 Show published posts
GET  /write            Show the write page
POST /post             Publish a new post
GET  /draft            Show saved drafts
POST /draft            Save a new draft
GET  /draft/:id/edit   Edit a draft
POST /draft/:id/edit   Save draft changes
POST /draft/:id/post   Publish an edited draft
POST /draft/:id        Delete a draft
GET  /profile          Show profile
GET  /profile/edit     Edit profile
POST /profile/submit   Create profile
POST /profile/update   Update profile
```

## How To Run

1. Open the project folder in your terminal:

```powershell
cd "C:\Users\HP\.vscode\maleficboss\Learning\coding\udemy\js-reset\Blog Application"
```

2. Install dependencies:

```powershell
npm install
```

3. Start the server:

```powershell
node index.js
```

Or, if you use nodemon:

```powershell
nodemon index.js
```

4. Open the app in your browser:

```text
http://localhost:3000
```

## Data Storage

The app stores data in:

```text
data/blog.json
```

This file keeps:

- Published posts
- Drafts
- Profile information

Because the app uses local JSON storage, the data remains available after restarting the server. However, this is still a local development setup, not a production database.

## Current Limitations

- No user authentication yet
- Images are added through image URLs, not file uploads
- Data is saved locally, so it is not shared across devices unless the app is hosted
- Not ready for public production use without adding login, validation, and a real database

## Future Improvements

- Add user login and authentication
- Add real image upload support
- Move data storage from JSON to a database
- Add post detail pages
- Add categories or tags
- Add search functionality
- Improve mobile responsiveness

## Author

Built by Usman3801 as part of a JavaScript, Express, and EJS learning project.
