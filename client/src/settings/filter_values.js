const filter_values = [
    {
      value: 'danceability',
      label: 'Danceability',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
      options: [{
        value: 'high',
        label: 'High',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0.8, 1],
      },{
        value: 'medium',
        label: 'Medium',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0.4, 0.8],
      },{
        value: 'low',
        label: 'Low',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0, 0.4],
      }]
    }, {
      value: 'tempo',
      label: 'Tempo',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
      options: [{
        value: 'high',
        label: 'High',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0.8, 1],
      },{
        value: 'medium',
        label: 'Medium',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0.4, 0.8],
      },{
        value: 'low',
        label: 'Low',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0, 0.4],
      }]
    }, {
      value: 'energy',
      label: 'Energy',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
      options: [{
        value: 'high',
        label: 'High',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0.8, 1],
      },{
        value: 'medium',
        label: 'Medium',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0.4, 0.8],
      },{
        value: 'low',
        label: 'Low',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0, 0.4],
      }]
    }, {
      value: 'instrumentalness',
      label: 'Instrumentalness',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
      options: [{
        value: 'high',
        label: 'High',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0.8, 1],
      },{
        value: 'medium',
        label: 'Medium',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0.4, 0.8],
      },{
        value: 'low',
        label: 'Low',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0, 0.4],
      }]
    }, {
      value: 'popularity',
      label: 'Popularity',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507',
      options: [{
        value: 'high',
        label: 'High',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [80, 100],
      },{
        value: 'medium',
        label: 'Medium',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [40, 80],
      },{
        value: 'low',
        label: 'Low',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507', 
        range: [0, 40],
      }]
    }
  
  ]
// const filter_values = {
//     danceability: {
//         high: [0.8, 1],
//         medium: [0.4, 0.8],
//         low: [0, 0.4]
//     }, 
//     tempo: {
//         high: [0.8, 1],
//         medium: [0.4, 0.8],
//         low: [0, 0.4]
//     }, 
//     energy: {
//         high: [0.8, 1],
//         medium: [0.4, 0.8],
//         low: [0, 0.4]
//     }, 
//     instrumentalness: {
//         high: [0.8, 1],
//         medium: [0.4, 0.8],
//         low: [0, 0.4]
//     }, 
//     popularity: {
//         high: [80, 100],
//         medium: [40, 80],
//         low: [0, 40]
//     }
// }

export default filter_values