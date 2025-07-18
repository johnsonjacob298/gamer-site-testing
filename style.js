:root {
  --bg-color: #0d0d0d;
  --text-color: #f5f5f5;
  --accent-color: #ff004c;
  --nav-bg: #111;
}

body.light-mode {
  --bg-color: #f5f5f5;
  --text-color: #111;
  --nav-bg: #ddd;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background 0.3s, color 0.3s;
}

.container {
  width: 90%;
  max-width: 960px;
  margin: auto;
  padding: 20px;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 0px;
}

.socials {
  display: flex;
  gap: 20px;
  align-items: center;
}

.main-nav {
  margin-top: 10px;
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid #333;
}

.main-nav a, .socials a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
}

.main-nav a:hover, .socials a:hover {
  color: var(--accent-color);
}

main section {
  margin: 40px 0;
}

main h2 {
  margin-bottom: 10px;
  color: var(--accent-color);
}

ul {
  list-style-type: none;
}

ul li {
  padding: 5px 0;
}

footer {
  text-align: center;
  padding: 20px;
  background: #1a1a1a;
  border-top: 2px solid #333;
  color: #888;
}
