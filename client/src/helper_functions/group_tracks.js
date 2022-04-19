import { grouping_options, quarter_definitions } from "../settings/grouping_settings"

export function group_tracks(tracks, grouping_selection) {
    const options = grouping_options
    const grouping_selection_settings = options.filter(o => o.value == grouping_selection)[0]
    let grouping_result = {}

    if (grouping_selection_settings.type === 'date_added') {
        switch (grouping_selection) {
            case 'year': 
                grouping_result = group_by_year(tracks)
                break
            case 'quarter': 
                grouping_result = group_by_quarter(tracks)
                break
            case 'month': 
                grouping_result = group_by_month(tracks)
                break
            default: 
                console.log("Date added grouping option not found")
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
        const key = year
        const title = `Added in ${year}`
        if (!grouping_result[key]) { grouping_result[key] = create_playlist(title) }
        add_track(grouping_result[key], track)
    }
    return grouping_result
}

function group_by_quarter(tracks) {
    let grouping_result = {}
    for (const track of tracks) {
        const month = track.added_at.getMonth() + 1
        let quarter = ''
        for (const [key, value] of Object.entries(quarter_definitions)) {
            if (value.includes(month)) { quarter = key }
        }
        const year = track.added_at.getFullYear()
        const key = quarter + '_' + year
        const title = `Added in ${quarter} ${year}`
        if (!grouping_result[key]) { grouping_result[key] = create_playlist(title) }
        add_track(grouping_result[key], track)
    }
    return grouping_result
}

function group_by_month(tracks) {
    let grouping_result = {}
    for (const track of tracks) {
        const month = track.added_at.getMonth() + 1
        const year = track.added_at.getFullYear()
        const key = month + '_' + year
        const title = `Added in ${month}/${year}`
        if (!grouping_result[key]) { grouping_result[key] = create_playlist(title) }
        add_track(grouping_result[key], track)
    }
    return grouping_result
}

function add_track(playlist, track) {
    playlist.included_tracks.push(track)
}

function create_playlist(title) {
    return {
        title: title,
        included_tracks: []
    }
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
                const title = `${grouping_selection_settings.label}: ${option.label}`
                if (!grouping_result[key]) { grouping_result[key] = create_playlist(title) }
                add_track(grouping_result[key], track)
            }
        }
    }
    return grouping_result
}