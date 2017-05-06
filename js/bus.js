//Zack Gilchrist
var vm  = new Vue({
    el:'body',
    data:{
        coordinates:[38.957108, -95.254011],
        latitude:50.9430,
        longitude:-95.2810,
        r41: 0,
        r42: 0,
        r43: 0
    },
    methods: {
        set_route41: function () {
           if(this.r41==1)
           {
               this.r41 = 0; // turn off 41
               if(this.r42==1)
               {
                   if(this.r43 == 1)

                       // style = 42, 43
                       map.setStyle('mapbox://styles/cooldarkmetal/cj25qbbdm00132rnxt87c9ebl');
                   else
                       //style = 42
                    map.setStyle('mapbox://styles/cooldarkmetal/cj25oh6h200182rrp3pj5t8r4');
               }
               else if(this.r43 == 1)
                    // style = 43
                   map.setStyle('mapbox://styles/cooldarkmetal/cj25ni9bj003j2sohqwys6pbp');
               else{
                   // blank
                   map.setStyle('mapbox://styles/cooldarkmetal/cj1qotgzp002g2rmre33uxmvv');
                }
           }
           else{
               this.r41 = 1; // turn on 41
               if(this.r42==1)
               {
                   if(this.r43 == 1)
                   // style = 41, 42, 43
                       map.setStyle('mapbox://styles/cooldarkmetal/cj25ojncb001j2st2pim5s6h0');
                   else
                   //style = 41, 42
                       map.setStyle('mapbox://styles/cooldarkmetal/cj25p9gtp00122rnxagwtn3zg');
               }
               else if(this.r43 == 1)
               // style = 41, 43
                   map.setStyle('mapbox://styles/cooldarkmetal/cj25l6s8l00172rrprhrjmjid');
               else{
                   // 41
                   map.setStyle('mapbox://styles/cooldarkmetal/cj1qp7ot4001p2sqfus90u50y');
               }
           }
            add_stops();
        },

        set_route42: function () {
            if(this.r42==1)
            {
                this.r42 = 0; // turn off 42
                if(this.r41==1)
                {
                    if(this.r43 == 1)
                    // style = 41, 43
                        map.setStyle('mapbox://styles/cooldarkmetal/cj25l6s8l00172rrprhrjmjid');
                    else
                    //style = 41
                        map.setStyle('mapbox://styles/cooldarkmetal/cj1qp7ot4001p2sqfus90u50y');
                }
                else if(this.r43 == 1)
                // style = 43
                    map.setStyle('mapbox://styles/cooldarkmetal/cj25ni9bj003j2sohqwys6pbp');
                else{
                    // blank
                    map.setStyle('mapbox://styles/cooldarkmetal/cj1qotgzp002g2rmre33uxmvv');
                }
            }
            else{
                this.r42 = 1; // turn on 42
                if(this.r41==1)
                {

                    if(this.r43 == 1)
                    // style = 41, 42, 43
                        map.setStyle('mapbox://styles/cooldarkmetal/cj25ojncb001j2st2pim5s6h0');
                    else {
                        //style = 41, 42
                        map.setStyle('mapbox://styles/cooldarkmetal/cj25p9gtp00122rnxagwtn3zg');
                    }
                }
                else if(this.r43 == 1)
                // style = 42, 43
                    map.setStyle('mapbox://styles/cooldarkmetal/cj25qbbdm00132rnxt87c9ebl');
                else{
                    // 42
                    map.setStyle('mapbox://styles/cooldarkmetal/cj25oh6h200182rrp3pj5t8r4');
                }
            }
            add_stops();
        },

        set_route43: function () {

            if(this.r43==1)
            {
                this.r43 = 0; // turn off 43
                if(this.r41==1)
                {
                    if(this.r42 == 1)
                    // style = 41, 42
                        map.setStyle('mapbox://styles/cooldarkmetal/cj25p9gtp00122rnxagwtn3zg');
                    else
                    //style = 41
                        map.setStyle('mapbox://styles/cooldarkmetal/cj1qp7ot4001p2sqfus90u50y');
                }
                else if(this.r42 == 1)
                // style = 42
                    map.setStyle('mapbox://styles/cooldarkmetal/cj25oh6h200182rrp3pj5t8r4');
                else{
                    // blank
                    map.setStyle('mapbox://styles/cooldarkmetal/cj1qotgzp002g2rmre33uxmvv');
                }
            }
            else{
                this.r43 = 1; // turn on 43
                if(this.r41==1)
                {
                    if(this.r42 == 1)
                    // style = 41, 42, 43
                        map.setStyle('mapbox://styles/cooldarkmetal/cj25ojncb001j2st2pim5s6h0');
                    else
                    //style = 41, 43
                        map.setStyle('mapbox://styles/cooldarkmetal/cj25l6s8l00172rrprhrjmjid');
                }
                else if(this.r42 == 1)
                // style = 42, 43
                    map.setStyle('mapbox://styles/cooldarkmetal/cj25qbbdm00132rnxt87c9ebl');
                else{
                    // 43
                    map.setStyle('mapbox://styles/cooldarkmetal/cj25ni9bj003j2sohqwys6pbp');
                }
            }

            add_stops();
        }
    }

});

mapboxgl.accessToken = 'pk.eyJ1IjoiY29vbGRhcmttZXRhbCIsImEiOiJjajFsa2lwaDIwMDJtMzJuMWM4NWhibWlqIn0.E093IGLaCOvgeYfi28Kztw';
var map = new mapboxgl.Map({
    container: 'map',
    center: [vm.coordinates[1], vm.coordinates[0]],
    style: 'mapbox://styles/cooldarkmetal/cj25ojncb001j2st2pim5s6h0',
    zoom: 15
});

map.on('load', function () {
    map.addSource('point', {
        "type": "geojson",
        "data": {
            "type": "Point",
            "coordinates": [
                vm.coordinates[1],
                vm.coordinates[0]
            ]
        }
    });

    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "circle",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#f44242"
        }
    });

    //---------

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


    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });


    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });

    //---------------
    function animateMarker(timestamp) {

        map.getSource('point').setData(
            {
                "type": "Point",
                "coordinates": [
                    vm.coordinates[1],
                    vm.coordinates[0]
                ]
            }

        );

        requestAnimationFrame(animateMarker);
    }


    animateMarker(0);
});

var pubnub = new PubNub({

     // Saad's keys
       subscribeKey : "sub-c-205e8844-2119-11e7-b284-02ee2ddab7fe",
       publishKey : "pub-c-250cbe22-9f26-4867-8b55-f07564a80023"
});

pubnub.subscribe({
    channels: ['bus'],
    withPresence: true
});



pubnub.addListener({

    message: function(m) {

        var channelName = m.channel;
        var channelGroup = m.subscription;
        var pubTT = m.timetoken;

        vm.coordinates[0] = m.message[0];
        vm.coordinates[1] = m.message[1];
        vm.latitude = m.message[0];
        vm.longitude = m.message[1];

    },
    presence: function(p) {  },
    status: function(s) {   }
});


$("#route43").attr('checked', true);

function add_stops(map) {


    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "circle",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#f44242"
        }
    });

    alert("sd");
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

    alert("sd");

    map.on('click', 'places', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
    });


    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });


    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
    alert("sd");
}

add_stops(map);
