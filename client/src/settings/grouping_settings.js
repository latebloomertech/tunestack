const grouping_options = [
    {
        value: 'year',
        type: 'date_added',
        label: 'The year I saved the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }, {
        value: 'quarter',
        type: 'date_added',
        label: 'The quarter I saved the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }, {
        value: 'month',
        type: 'date_added',
        label: 'The month I saved the song',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/1200px-Simple_Music.svg.png?20110615130507'
    }, {
        value: 'energy',
        type: 'attribute_range',
        label: 'The energy level of the song',
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
        type: 'attribute_range',
        label: 'The instrumentalness of the song',
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
        type: 'attribute_range',
        label: 'The popularity of the song',
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
    },

]

const quarter_definitions = {
    Q1: [1, 2, 3],
    Q2: [4, 5, 6],
    Q3: [7, 8, 9],
    Q4: [10, 11, 12]
}

export {grouping_options, quarter_definitions}