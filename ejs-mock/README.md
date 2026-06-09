# Project Task Manager EJS

A small full-stack project manager built with Node.js, Express, and EJS.

The app lets users manage projects and tasks with full CRUD-style behavior. It uses server-rendered EJS pages, Express routes, form submissions, dynamic route parameters, and JSON file persistence.

## Features

- View all projects on the homepage
- Add a new project
- View a single project by id
- Edit an existing project
- Delete a project
- View all tasks
- Add a new task
- Toggle a task between complete and incomplete
- Delete a task
- Save projects and tasks to `data.json`
- Load saved data when the server restarts

## Tech Stack

- Node.js
- Express
- EJS
- HTML
- CSS
- JavaScript
- JSON file storage

## What This Project Practices

This project was built to practice core backend and EJS concepts:

- Passing data from Express to EJS
- EJS conditionals
- EJS loops
- Forms and `req.body`
- Dynamic routes with `req.params`
- Finding one item from an array
- Creating new objects
- Editing existing objects
- Deleting with `.filter()`
- Toggling boolean values
- Reading from JSON with `fs.readFile`
- Saving to JSON with `fs.writeFile`

## Project Structure

```text
project-task-manager-ejs/
  public/
    styles.css
  views/
    edit.ejs
    index.ejs
    projects.ejs
    specific.ejs
    tasks.ejs
  data.json
  index.js
  package.json
  README.md
```

## Routes

### Project Routes

```text
GET  /                      Show homepage with all projects
GET  /projects              Show form to add a project
POST /projects              Create a new project
GET  /projects/:id          Show one project
GET  /projects/:id/edit     Show edit form for one project
POST /projects/:id/edit     Update one project
POST /projects/:id/delete   Delete one project
```

### Task Routes

```text
GET  /tasks                 Show all tasks
POST /tasks                 Create a new task
POST /tasks/:id/toggle      Toggle task completion
POST /tasks/:id/delete      Delete one task
```

## Data Format

Data is stored locally in `data.json`.

```json
{
  "projects": [
    {
      "title": "Blog App",
      "stack": "Express/EJS",
      "completed": true,
      "id": 1
    }
  ],
  "tasks": [
    {
      "id": 1,
      "title": "Review EJS routes",
      "completed": false
    }
  ]
}
```

## How To Run

1. Clone the repository.

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

Or with nodemon:

```bash
nodemon index.js
```

4. Open the app:

```text
http://localhost:3000
```

## Notes

- This app uses local JSON storage, not a database.
- Data will survive server restarts because changes are written to `data.json`.
- This is a learning project and not production-ready.
- There is no authentication yet.

## Future Improvements

- Add database storage
- Add user authentication
- Add project descriptions
- Add task editing
- Add due dates
- Add route-level error handling
- Improve layout with reusable EJS partials

## Author

Built by Usman Oyebamiji as part of Express and EJS practice.
