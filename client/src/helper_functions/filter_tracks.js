import filter_settings from "../settings/filter_values"


function filter_tracks(tracks, filter_selections) {
    let filtered_tracks_result = []

    // go through each track
    for (const track of tracks) {
        let filtered_out = false

        // go through each filter
        for (const filter of filter_selections) {
            // break out of loop if track is filtered out
            if (filtered_out) {break}
            const options_for_filter = filter_settings.filter(f => f.value == filter.value)[0].options
            // go through each option
            for (const option in filter.selected_options) {
                // check if option is set to false 
                if (!filter.selected_options[option]) {
                    // get the range for the option
                    const range = options_for_filter.filter(o => o.value == option)[0].range
                    // determine whether the track is within that range
                    if (track[filter.value] >= range[0] && track[filter.value] <= range[1]) {
                        // filter out the track if it's in the range
                        filtered_out = true
                        // break out of for loop once song is filtered out
                        break
                    } 
                }
            }
        }

        // if track doesn't get filtered out add it to the results
        if (!filtered_out) {filtered_tracks_result.push(track)}
    }
    return filtered_tracks_result
}

export default filter_tracks
