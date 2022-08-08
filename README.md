# Overview

This project is for Tokopedia senior frontend test. The finished project also can be seen on [https://web-engineering-test.vercel.app/](https://web-engineering-test.vercel.app/). I use [Vercel](https://vercel.com/) to deploy the project.

# Technologies

This project is built with several technologies:
* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Next JS](https://nextjs.org/)
* [emotion](https://emotion.sh/docs/introduction)
* [Apollo graphql](https://www.apollographql.com/)

# Usage

I will use pnpm for my package manager. The reason is pnpm will save disk space and boost installation speed. When using npm or Yarn, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on disk. You can read the complete motivation [here](https://pnpm.io/motivation). You can still use yarn and npm to run the project.

```bash
# install 
pnpm install

#or
npm install

# or
yarn install

# run development
pnpm run dev

#or
npm run dev

# or
yarn run dev

# run linter
pnpm lint
```

# Directory Structure
I use a features-based directory structure. Features-based directories separate specific features related components from generic UI components. [This blog](https://www.developerway.com/posts/react-project-structure) explains features-based structure with details.

```

public/ Next.js public directory, used for storing static assets.
|
pages/ Next.js pages. This folder includes the routes of our project
|
src/ The source code for the project
└── features/ contains every features on our app
    └── anime-collection/
        ├── anime-collection.component.tsx
        ├── anime-collection.hook.ts
        ├── anime-collection.context.ts
        ├── anime-collection.style.ts
        └── anime-collection-detail
            ├── anime-collection-detail.component.tsx
            └── anime-collection-detail.constant.ts
    components/ contains every shared component
    ├── layout/
        ├── layout.component.tsx
        └── layout.test.tsx
    lib/ contains shared lib or utilities for the app
    ├── use-debounce/
        ├── use-debounce.hook.ts
        └── use-debounce.test.ts
```
