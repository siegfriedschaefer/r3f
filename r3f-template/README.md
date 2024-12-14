# React + Typescript + Vite + Three + Fiber

This is a starter template to get comfortable with r3f, using Typescript and Vite.

## Setup Project environment

Make sure that you are useing the latest nodejs version with long term support.
I use the nodejs version manager for this.

```bash
nvm install --lts
```

Don't forget to activate this nodejs version before you start to develop.

```bash
nvm use --lts
```

## Setup React + TypeScript + Vite

We setup a new React project with Typescript support using Vite.

```bash
npm create vite@latest
```

You will be asked for a project name, than select the React variant with Typescript and SWC support.
With this selection you get proper javascript type support and a fast development environment.

After configurating the project, install the modules and make a test run.

```bash
npm i
npm run dev
```

You should see the following messages.

```bash
VITE v6.0.3 ready in 224 ms
...
```

You could exit the test run by pressing 'q' + 'Enter'
