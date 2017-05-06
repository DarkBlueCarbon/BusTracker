function add_stops() {

    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Stadium PickUp</strong><p>Route that picks up at this location: 42 Blue. To view a complete list of times please click  <a href=\"http://lawrencetransit.org/routes#ku\" target=\"_blank\" title=\"Opens in a new window\"> Here.</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.24646, 38.96406]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Kansas Union</strong><p>Routes that pick up at this location: 10, 11, 27, 29, 30, 36, 38. To view a complete list of times please click  <a href=\"http://lawrencetransit.org/routes#ku\" target=\"_blank\" title=\"Opens in a new window\"> Here.</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.243, 38.95903]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Oswald</strong><p>Route that picks up at this location: 43 Red. To view a complete list of times please click  <a href=\"http://lawrencetransit.org/routes#ku\" target=\"_blank\" title=\"Opens in a new window\"> Here.</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.25991, 38.95495]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>GSP</strong><p>Route that picks up at this location: 43 Red. To view a complete list of times please click  <a href=\"http://lawrencetransit.org/routes#ku\" target=\"_blank\" title=\"Opens in a new window\"> Here.</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.24173, 38.96493]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>18th Street</strong><p>Route that picks up at this location: 42 Blue. To view a complete list of times please click  <a href=\"http://lawrencetransit.org/routes#ku\" target=\"_blank\" title=\"Opens in a new window\"> Here.</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.25089, 38.95014]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Rec Center</strong><p>Route that picks up at this location: 42 Blue. To view a complete list of times please click  <a href=\"http://lawrencetransit.org/routes#ku\" target=\"_blank\" title=\"Opens in a new window\"> Here.</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.24879, 38.95237]
                    }
                },  {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Snow Hall</strong><p>Routes that pick up at this location: 27 & 42 Blue. To view a complete list of times please click  <a href=\"http://lawrencetransit.org/routes#ku\" target=\"_blank\" title=\"Opens in a new window\"> Here.</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-95.24935, 38.95864]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    map.on('click', 'places', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });

}