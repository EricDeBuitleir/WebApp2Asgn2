# Assignment 2 - Web API.

Name: Eric Butler

## Features.

[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 

 + Feature 1 - 2 new API routes, attempted parameterised URL

 + Feature 2 - Mongo Integration

 + Feature 3 - Minimal React integration(GET and POST data to API)

 

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/EricDeBuitleir/WebApp2Asgn2.git
```

followed by installation

```bat
git install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:

```bat
REACT_APP_TMDB_KEY=ca646c6ab32f1e36d71c42181780732c
FAST_REFRESH=false 
MONGO_DB=mongodb+srv://<Username:<Password>@<ClusterName>/test
SEED_DB=True

# API env
NODE_ENV=development
PORT=3000
HOST=localhost
SECRET=ilikecake
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A | N/A |(Showing unauthorized due to login not working)
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A | (Showing unauthorized due to login not working)
| /api/actors | Showing 404 not found | N/A | N/A | N/A  
| /api/tvs | Showing 404 not found | N/A | N/A | N/A

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected. **REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB**

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  // Copy and pasted from labs and added what I needed 
  export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcomingMovies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getPopularMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTVs = () => {
    return fetch(
       '/api/tvs',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getActors = () => {
    return fetch(
       '/api/actors',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getPopularActors = () => {
    return fetch(
       '/api/actors',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
