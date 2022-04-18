

// METHOD 1*******

function group_tracks(tracks, grouping_selection) {
    let groupResult = []

    if (grouping_selection.value === 'year' | 'quarter' | 'month') {
        groupResult = tracks.groupBy(dateCallBack(grouping_selection.value))
    }
    else {
        groupResult = tracks.groupBy(categoryCallBack(grouping_selection.value))
    }
    return groupResult
}


    // callback function if the chosen category is date
    // problem = date added was inadvertently not included in the AllTracksData array


function dateCallBack(value) {
    if (value == 'year') {
        return
        // date_added do something based on year
    }
    else if (value == 'quarter') {
        // date_added do something based on quarter
    }
    else if (value == 'month') {
        // date_added

    }
}

function categoryCallBack(value) {
    if (value >= .8) {
        return 'high'
    } else if (value >= .4 && value < .8) {
        return 'medium'
    } else {
        return 'low'
    }

}


// METHOD 2 ******

 function groupBy(list, keyGetter) {
     const map = new Map();
     list.forEach((item) => {
          const key = keyGetter(item);
          const collection = map.get(key);
          if (!collection) {
              map.set(key, [item]);
          } else {
              collection.push(item);
          }
     });
     return map;
 }


 // example usage

 const pets = [
     {type:"Dog", name:"Spot"},
     {type:"Cat", name:"Tiger"},
     {type:"Dog", name:"Rover"},
     {type:"Cat", name:"Leo"}
 ];

 const grouped = groupBy(pets, pet => pet.type);

 console.log(grouped.get("Dog")); // -> [{type:"Dog", name:"Spot"}, {type:"Dog", name:"Rover"}]
 console.log(grouped.get("Cat")); // -> [{type:"Cat", name:"Tiger"}, {type:"Cat", name:"Leo"}]

 const odd = Symbol();
 const even = Symbol();
 const numbers = [1,2,3,4,5,6,7];

 const oddEven = groupBy(numbers, x => (x % 2 === 1 ? odd : even));

 console.log(oddEven.get(odd)); // -> [1,3,5,7]
 console.log(oddEven.get(even)); // -> [2,4,6]



