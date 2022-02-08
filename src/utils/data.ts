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
      icon: '/assets/html.svg'
    },
    'css-3': {
      name: 'CSS3',
      icon: '/assets/css-3.svg'
    },
    'bootstrap': {
      name: 'Bootstrap',
      icon: '/assets/bootstrap.svg'
    },
    'express': {
      name: 'Express',
      icon: '/assets/express.svg'
    },
    'git': {
      name: 'Git',
      icon: '/assets/git-icon.svg'
    },
    'javascript': {
      name: 'JavaScript',
      icon: '/assets/javascript.svg'
    },
    'mongodb': {
      name: 'MongoDB',
      icon: '/assets/mongodb.svg'
    },
    'mysql': {
      name: 'MySQL',
      icon: '/assets/mysql.svg'
    },
    'npm': {
      name: 'NPM',
      icon: '/assets/npm.svg'
    },
    'postgresql': {
      name: 'PostgreSQL',
      icon: '/assets/postgresql.svg'
    },
    'python': {
      name: 'Python',
      icon: '/assets/python.svg'
    },
    'tailwindcss': {
      name: 'TailwindCSS',
      icon: '/assets/tailwindcss-icon.svg'
    },
    'typescript': {
      name: 'TypeScript',
      icon: '/assets/typescript-icon.svg'
    },
    'webpack': {
      name: 'Webpack',
      icon: '/assets/webpack.svg'
    }
  }
}

export const getProjects = () => {
  return [
    {
      name: 'Twitter 2.0',
      techStack: ['React', 'NextJS', 'TypeScript', 'TailwindCSS', 'Recoil', 'Firebase'],
      description: '',
      liveUrl: 'http://twitter-clone-curlos.vercel.app/',
      sourceCodeUrl: 'https://github.com/curlos/twitter-2.0'
    },
    {
      name: 'Sneaker Palace',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Redux', 'NodeJS', 'Express', 'MongoDB'],
      description: 'Sneaker Palace is a responsive e-commerce site where users can buy from over 20 of the most popular sneaker brands in the world such as Nike, Jordan, Adidas, New Balance. Users can register for an account, login and browse the collection of over 10,000 shoes to look from with different filters (brand, gender, price, size, sort types) to aid a users in their search. Users can add them to their favorites, to their cart and place an order to buy sneakers. Reviews can also be posted (with pictures and ability to verify if you purchased the sneaker) to let other people know your thoughts on the sneakers you bought.',
      liveUrl: 'https://sneaker-palace.vercel.app/',
      sourceCodeUrl: 'https://github.com/curlos/sneaker-palace'
    },
    {
      name: 'Netflix 2.0',
      techStack: ['React', 'JavaScript', 'Bootstrap', 'Redux', 'Firebase', 'Stripe'],
      description: 'Netflix 2.0 is a responsive Netflix clone which improves upon the original by having a collection of thousands of movies and TV shows using the TMDB API which would include movies that even Netflix doesn\'t have. Movies and TV Shows can be filtered by genres and years. They can also be sorted by several options like popularity, revenue and release date. There is also three subscription plans (basic, standard, and premium) which users can subscribe to using the Stripe API.',
      liveUrl: 'https://netflix-clone-e0edc.web.app/',
      sourceCodeUrl: 'https://github.com/curlos/netflix-clone'
    },
  ]
}