export const getSkills = () => {
  return {
    'Front-end': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SASS/SCSS', 'Bootstrap', 'TailwindCSS', 'ChakraUI', 'styled-components', 'Figma'],
    'Back-end': ['NodeJS', 'Python', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL'],
    'Miscalleneous': ['Git', 'Webpack', 'NPM']
  }
}

export const getTechTools = () => {

  return {
    'html-5': {
      name: 'HTML5',
      icon: 'devicon-html5-plain colored',
      categories: ['front-end']
    },
    'css-3': {
      name: 'CSS3',
      icon: 'devicon-css3-plain colored',
      categories: ['front-end']
    },
    'bootstrap': {
      name: 'Bootstrap',
      icon: 'devicon-bootstrap-plain colored',
      categories: ['front-end']
    },
    'express': {
      name: 'Express',
      icon: 'devicon-express-original colored',
      categories: ['back-end']
    },
    'git': {
      name: 'Git',
      icon: 'devicon-git-plain colored',
      categories: ['misc']
    },
    'javascript': {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain colored',
      categories: ['front-end', 'back-end']
    },
    'react': {
      name: 'React',
      icon: 'devicon-react-original colored',
      categories: ['front-end']
    },
    'nextjs': {
      name: 'Next.js',
      icon: 'devicon-nextjs-original-wordmark',
      categories: ['front-end', 'back-end']
    },
    'redux': {
      name: 'React Redux',
      icon: 'devicon-redux-original colored',
      categories: ['front-end']
    },
    'vue': {
      name: 'VueJS',
      icon: 'devicon-vuejs-plain colored',
      categories: ['front-end']
    },
    'mongodb': {
      name: 'MongoDB',
      icon: 'devicon-mongodb-plain colored',
      categories: ['back-end']
    },
    'mysql': {
      name: 'MySQL',
      icon: 'devicon-mysql-plain colored',
      categories: ['back-end']
    },
    'npm': {
      name: 'NPM',
      icon: 'devicon-npm-original-wordmark colored',
      categories: ['misc']
    },
    'postgresql': {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain colored',
      categories: ['back-end']
    },
    'firebase': {
      name: 'Firebase',
      icon: 'devicon-firebase-plain colored',
      categories: ['back-end']
    },
    'nodejs': {
      name: 'NodeJS',
      icon: 'devicon-nodejs-plain colored',
      categories: ['back-end']
    },
    'python': {
      name: 'Python',
      icon: 'devicon-python-plain colored',
      categories: ['back-end']
    },
    'tailwindcss': {
      name: 'TailwindCSS',
      icon: 'devicon-tailwindcss-plain colored',
      categories: ['front-end']
    },
    'typescript': {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored',
      categories: ['front-end', 'back-end']
    },
    'webpack': {
      name: 'Webpack',
      icon: 'devicon-webpack-plain colored',
      categories: ['misc']
    }
  }
}

export const getProjects = () => {
  return [
    {
      name: 'Sneaker Palace',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Redux', 'NodeJS', 'Express', 'MongoDB'],
      description: 'Sneaker Palace is a responsive e-commerce site where users can buy from over 20 of the most popular sneaker brands in the world such as Nike, Jordan, Adidas, New Balance. Users can register for an account, login and browse the collection of over 10,000 shoes to look from with different filters (brand, gender, price, size, sort types) to aid a users in their search. Users can add them to their favorites, to their cart and place an order to buy sneakers. Reviews can also be posted (with pictures and ability to verify if you purchased the sneaker) to let other people know your thoughts on the sneakers you bought.',
      liveUrl: 'https://sneaker-palace.vercel.app/',
      sourceCodeUrl: 'https://github.com/curlos/sneaker-palace',
      screenshots: ['/assets/sneaker_palace.png']
    },
    {
      name: 'Netflix 2.0',
      techStack: ['React', 'JavaScript', 'Bootstrap', 'Redux', 'Firebase', 'Stripe'],
      description: 'Netflix 2.0 is a responsive Netflix clone which improves upon the original by having a collection of thousands of movies and TV shows using the TMDB API which would include movies that even Netflix doesn\'t have. Movies and TV Shows can be filtered by genres and years. They can also be sorted by several options like popularity, revenue and release date. There is also three subscription plans (basic, standard, and premium) which users can subscribe to using the Stripe API.',
      liveUrl: 'https://netflix-clone-e0edc.web.app/',
      sourceCodeUrl: 'https://github.com/curlos/netflix-clone',
      screenshots: ['/assets/netflix_clone_v2.png']
    },
    {
      name: 'Twitter 2.0',
      techStack: ['React', 'NextJS', 'TypeScript', 'TailwindCSS', 'Recoil', 'Firebase'],
      description: '',
      liveUrl: 'http://twitter-clone-curlos.vercel.app/',
      sourceCodeUrl: 'https://github.com/curlos/twitter-2.0',
      screenshots: ['/assets/3.png']
    },
  ]
}