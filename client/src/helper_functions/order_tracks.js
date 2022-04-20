

export function order_tracks(trackArray, songOrderSelection) {
    if (songOrderSelection == "name") {
            trackArray.sort(function (a, b) {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

    } else if (songOrderSelection == "duration") {
        trackArray.sort(function (a, b) {
            return a.duration_ms - b.duration_ms;
        });

    } else if (songOrderSelection == "popularity") {
        trackArray.sort(function (a, b) {
            return b.popularity - a.popularity;
        });

    } else {
        return trackArray
    }
    return trackArray
}
