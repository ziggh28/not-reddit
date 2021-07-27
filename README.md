# MEN Stack with OAuth Template

This is a MEN Stack template that includes OAuth.

Use this to go build things! 🚀

## To Use This Template

__Replace `<name-of-your-app-here>` in the commands below with the name of your app!__

```bash
git clone https://github.com/SEI-Remote/men-stack-oauth-template.git <name-of-your-app-here>
cd <name-of-your-app-here>
```

Once you are in the project directory:

```bash
rm -rf .git
```

Here's what your command line output should like after this step (note that the indicator that we are in a git repository is gone!)

<img src="https://i.imgur.com/L47kNOZ.png" alt="The command line before and after running the rm -rf .git command. Before git:(main) is visible indiating that the directory contains a git repository, after the command it is not.">

Re-initialize a git repository:

```bash
git init
```

Use the GitHub CLI to create a new project repository on GitHub:

```bash
gh repo create <name-of-your-app-here>
```

Run npm i to fetch the template's dependencies:

```bash
npm i
```

Then, make an initial commit:

```bash
git add .
git commit -m "initial commit"
git push -u origin main
```

touch a .env file:

```bash
touch .env
```

Fill it with the following:

```
DATABASE_URL=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GOOGLE_CALLBACK=https://localhost:3000/auth/google/oauth2callback
GOOGLE_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GOOGLE_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
SESSION_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Replace the `DATABASE_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_SECRET`, and `SESSION_SECRET` with values that you provide.

Delete this README.md

You're done!

<main>
  <h1 class="my-3"><%= title %></h1>
  <h1>hello, <%= user ? user.profile.name : "friend" %></h1>
  <% if (user?.profile.avatar) { %>
    <div>
      <img 
        src="<%= user.profile.avatar %>" 
        alt="<%= user.profile.name %> avatar"
      >
    </div>
  <% } %>
  <li class="d-flex align-items-center ms-3 mb-2 mb-lg-0">
    <a href="/posts" class="text-light text-decoration-none">
      post
    </a>
</main>



html {
  box-sizing: border-box
}

/* The Universal Selector */
*, /* All elements*/
*::before, /* All ::before pseudo-elements */
*::after { /* All ::after pseudo-elements */
  /* height & width will now include border & padding by default
     but can be over-ridden as needed */
  box-sizing: inherit;
}

/* resets font size to be 62.5% of the user preference - 
     in most browser configurations this will be 10px */
:root {
    font-size: 62.5%
}

body {
  background-color: gray;
  /* Use a system font, if none are available use an available sans-sarif font */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin: 0;
}

nav {
  background-color: white;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  font-size: 3.6rem;
}
