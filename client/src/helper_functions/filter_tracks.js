import filters from "../settings/filter_values"


function filter_tracks(tracks, filter_selections) {
    let filtered_tracks_result = []

    for (filter in filter_selections) {

    }

    for (track in tracks) {
        let is_included = false
        for (filter in filter_selections) {
            const filter_options_array = filters.filter(f => f.value == filter.value)[0].options
            for (selected_option in filter.selected_options) {
                const value_range = filter_values_object[selected_option]
                if (track[filter] > value_range[0] && track[filter] < value_range[1]) {
                    is_included = true
                } 
            }
        }
    }
}