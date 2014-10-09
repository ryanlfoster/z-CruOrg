//summer-missions-map.js
var map;

$(document).ready(function() {
    if ( $( '.summer-missions__map' ).length ) {
        function init() {
            // Create an array of styles.
            var styles = [
            {
              featureType: "water",
              elementType: "text",
              stylers: [
                { visibility: "off" }
              ]
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            },{
              featureType: "water",
              elementType: "geometry",
              stylers: [
                { visibility: "simplified"},
              ]
            }
          ];

          // Create a new StyledMapType object, passing it the array of styles,
          // as well as the name to be displayed on the map type control.
          var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});

          // Create a map object, and include the MapTypeId to add
          // to the map type control.
          var mapOptions = {
            zoom: 2,
            center: new google.maps.LatLng(35, -37),
            disableDefaultUI: !0,
            zoomControl: !1,
            scrollwheel: !1,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
          };
          map = new google.maps.Map(document.getElementById('map_canvas'),
            mapOptions);

          //Associate the styled map with the MapTypeId and set it to display.
          map.mapTypes.set('map_style', styledMap);
          map.setMapTypeId('map_style');
        }

        // Parse XML of project locations to create map markers
           function getMarkers() {
             $.ajax({
              url: "http://sp.campuscrusadeforchrist.com/projects/markers.js",
              success: function(markers){
                eval(markers);
              }
             });
           }

  	$(document).ready(init);
  	$(window).load(getMarkers);
    }
});
