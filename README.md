# "CF in the World" Website

:point_right: Live website at https://convergentfacilitation.org

Website status: [![Netlify Status](https://api.netlify.com/api/v1/badges/58a260b6-451e-425f-a42f-a08951756413/deploy-status)](https://app.netlify.com/sites/convergentfacilitation/deploys)

Sibling website "Grow CF Capacity" is live at https://grow.convergentfacilitation.org ([Grow CF Capacity Github Repository](https://github.com/Convergent-Facilitation/cf-website-learning-community).

## Making/suggesting edits/additions here on Github

If you want to suggest new content (e.g. your own case study) please sign up to github and then send your account email or username to tech@convergentfacilitation.org so that we can add you as contributor to this repository.

- **Case Study files are located here :point_right: [/case-studies](https://github.com/Convergent-Facilitation/convergentfacilitation.org/tree/main/case-studies)**
  - Bios of facilitators are located here (they can be inserted in any page) :point_right: [/src/pages/about](https://github.com/Convergent-Facilitation/convergentfacilitation.org/tree/main/src/pages/about)
  - Pictures of facilitators are by default located here: [/static/img](https://github.com/Convergent-Facilitation/convergentfacilitation.org/tree/main/static/img)
  - New facilitators/authors of case studies need to be added to the [facilitators.yml](https://github.com/Convergent-Facilitation/convergentfacilitation.org/blob/main/facilitators.yml) (including a link to their bio file)

- All other pages are located here :point_right: [/src/pages](https://github.com/Convergent-Facilitation/convergentfacilitation.org/tree/main/src/pages)
  - the landing page is created from this file: [/src/pages/index.tsx](https://github.com/Convergent-Facilitation/convergentfacilitation.org/blob/main/src/pages/index.tsx)
    - Text for quotes, features and appreciations, including some related images on the landing page are located here :point_right: [/src/data](https://github.com/Convergent-Facilitation/convergentfacilitation.org/tree/main/src/data)


## Setup for local development
This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```


This command generates static content into the `build` directory and can be served using any static contents hosting service.

