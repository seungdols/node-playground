'use strict'

//https://futurestud.io/tutorials/node-js-how-to-run-an-asynchronous-function-in-array-map
const Axios = require('axios')

async function fetchRepoInfos() {
  const repos = [
    {
      url: 'https://api.github.com/repos/fs-opensource/futureflix-starter-kit'
    },
    {
      url: 'https://api.github.com/repos/fs-opensource/android-tutorials-glide'
    }
  ]

  const promises = repos.map(async repo => {
    const reponse = await Axios({
      url: repo.url,
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })

    return {
      url: repo.url,
      name: reponse.data.name,
      description: reponse.data.description
    }

  })

  const results = await Promise.all(promises)
  console.log(results)
}

fetchRepoInfos()

