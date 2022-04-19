








// METHOD 1*******

import {grouping_options, quarter_definitions } from "../settings/grouping_settings"

export function group_tracks(tracks, grouping_selection) {
    const options = grouping_options
    const grouping_selection_settings = options.filter(o => o.value == grouping_selection)[0]
    console.log('grouping_selection_settings', grouping_selection_settings)
    let grouping_result = {}

    if (grouping_selection_settings.type === 'date_added') {
        switch (grouping_selection) {
            case 'year': grouping_result = group_by_year(tracks)
            case 'quarter': grouping_result = group_by_quarter(tracks)
            case 'month': grouping_result = group_by_month(tracks)
            default: console.log("Date added grouping option not found")
        }
    }
    else if (grouping_selection_settings.type === 'attribute_range') {
        grouping_result = group_by_attribute_range(tracks, grouping_selection_settings)
    }
    return grouping_result
}

function group_by_year(tracks) {
    let grouping_result = {}
    for (const track of tracks) {
        const year = track.added_at.getFullYear()
        if (grouping_result[year]) {
            grouping_result[year].included_tracks.push(track)
        } else {
            grouping_result[year] = {
                title: `Added in ${year}`,
                included_tracks: [].push(track)
            }
        }
    }
    return grouping_result
}

function group_by_quarter(tracks) {
    let grouping_result = {}
    for (const track of tracks) {
        const month = track.added_at.getMonth() + 1
        let quarter = ''
        quarter_definitions.forEach( (key, value) => {
            if (value.includes(month)) {quarter = key}
        })
        const year = track.added_at.getFullYear()
        const key = quarter + '_' + year
        if (grouping_result[key]) {
            grouping_result[key].included_tracks.push(track)
        } else {
            grouping_result[key] = {
                title: `Added in ${quarter} ${year}`,
                included_tracks: [].push(track)
            }
        }
    }
    return grouping_result
}

function group_by_month(tracks) {
    let grouping_result = {}
    for (const track of tracks) {
        const month = track.added_at.getMonth() + 1
        const year = track.added_at.getFullYear()
        const key = month + '_' + year
        if (grouping_result[key]) {
            grouping_result[key].included_tracks.push(track)
        } else {
            grouping_result[key] = {
                title: `Added in ${month}/${year}`,
                included_tracks: [].push(track)
            }
        }
    }
    return grouping_result
}

function group_by_attribute_range(tracks, grouping_selection_settings) {
    let grouping_result = {}
    const grouping_selection = grouping_selection_settings.value
    const options = grouping_selection_settings.options
    for (const track of tracks) {
        const attribute_value = track[grouping_selection]
        for (const option of options) {
            const range = option.range
            if (attribute_value > range[0] && attribute_value <= range[1]) {
                const key = grouping_selection + '_' + option.value
                if (grouping_result[key]) {
                    grouping_result[key].included_tracks.push(track)
                } else {
                    grouping_result[key] = {
                        title: `${grouping_selection_settings.label}: ${option.label}`,
                        included_tracks: [].push(track)
                    }
                }
            }
        }
    }   
    return grouping_result
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



