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

If you enter the localhost url into your browser, you will see the default React + Vite Webapp.

### Adding Three.js + React Fiber

We add the three.js and react fiber packages with the following command.

```bash
npm install three @types/three @react-three/fiber
```

Than we need the react-three/drei module.

```bash
npm install @react-three/drei
```

# Adopting the template's source code

We want to build a minimalistic Nexus Lumina template.

The template should show a stage with a cube.
We start with adding the favicon of Nexus Lumina at index.html.

We define a component called Stage which is the base for our 3D - experience.

Than we have to adopt the App.tsx file accordingly.
