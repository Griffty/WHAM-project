# WIT CSAS 2000 WHAM Project

## Developing

1. Install the latest version of [Node.js](https://nodejs.org/en/download) for your operating system.

2. Run the following commands in a terminal window in a directory of your choosing for storing the files in your repository (recommended: create a "GitHub" folder at the root directory (e.g. C:/GitHub on Windows):
```
git clone https://github.com/<your_github_username>/witcsas2000.git
cd witcsas2000
npm i
```

3. Start the dev server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

# Svelte tips

1. How a `.svelte` file works

Every `.svelte` file is just a normal HTML file with three optional sections. You can write regular HTML right inside it: https://github.com/mattcroat/joy-of-code/blob/main/posts/svelte-for-beginners/svelte-for-beginners.md

```svelte
<script>
  // Optional: JavaScript goes here (variables, click functions, etc.)
  let teamName = "Group 4";
</script>

<h1>Welcome to {teamName}'s Project!</h1>
<p>This is just normal HTML.</p>

<style>
  /* Optional: CSS goes here. */
  /* BONUS: CSS written here ONLY applies to this specific file! */
  p {
    color: blue;
  }
</style>
```

2. Key Rules to Know

- Scoped CSS: Any CSS you write inside a `<style>` tag in a component will not accidentally break someone else's page. You don't have to worry about class name collisions.
- Interactive Tutorial: If you want to practice for 10 minutes in your browser without installing anything, check out the official Svelte Interactive Tutorial. 
https://svelte.dev/tutorial
https://github.com/mattcroat/joy-of-code/blob/main/posts/svelte-for-beginners/svelte-for-beginners.md
