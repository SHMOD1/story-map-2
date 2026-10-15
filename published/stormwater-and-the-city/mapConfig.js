const MAPBOX_TOKEN = 'pk.eyJ1IjoibW9kLWZvdW5kYXRpb24iLCJhIjoiY21ncnNrcmx4MXdlOTJqc2FjNW85ZnR3NSJ9.0Ha_bpb4AJ-O2pvIumHu7A';

const mapConfig = {
  "initialView": {
    "zoom": 11.2,
    "center": [
      77.605,
      12.975
    ]
  },
  "defaultBasemap": "satellite",
  "basemaps": {
    "osm": {
      "tiles": [
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      ],
      "attribution": "© OpenStreetMap contributors"
    },
    "satellite": {
      "tiles": [
        "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.jpg90?access_token=pk.eyJ1IjoibW9kLWZvdW5kYXRpb24iLCJhIjoiY21ncnNrcmx4MXdlOTJqc2FjNW85ZnR3NSJ9.0Ha_bpb4AJ-O2pvIumHu7A"
      ],
      "maxzoom": 20,
      "attribution": "© <a href=\"https://www.mapbox.com/about/maps/\">Mapbox</a> © <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
    },
    "carto-dark": {
      "tiles": [
        "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"
      ],
      "attribution": "© Carto, © OpenStreetMap contributors"
    },
    "carto-positron": {
      "tiles": [
        "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png"
      ],
      "attribution": "© Carto, © OpenStreetMap contributors"
    }
  },
  "sources": {
    "source-dem-cog": {
      "type": "image",
      "url": "./images/dem-hills.png?1792059535",
      "coordinates": [
        [
          77.255859,
          13.239945
        ],
        [
          78.046875,
          13.239945
        ],
        [
          78.046875,
          12.554564
        ],
        [
          77.255859,
          12.554564
        ]
      ]
    },
    "source-labels": {
      "type": "geojson",
      "data": "./layers/labels.geojson?1792059535"
    },
    "source-boundary": {
      "type": "geojson",
      "data": "./layers/bbmp-boundary.geojson?1792059535"
    },
    "source-roads": {
      "type": "geojson",
      "data": "./layers/roads.geojson?1792059535"
    },
    "source-roads-primary": {
      "type": "geojson",
      "data": "./layers/roads-primary.geojson?1792059535"
    },
    "source-roads-trunk": {
      "type": "geojson",
      "data": "./layers/roads-trunk.geojson?1792059535"
    },
    "source-lakes": {
      "type": "geojson",
      "data": "./layers/lakes.geojson?1792059535"
    },
    "source-green": {
      "type": "geojson",
      "data": "./layers/green.geojson?1792059535"
    },
    "source-ridge-places": {
      "type": "geojson",
      "data": "./layers/ridge-places.geojson?1792059535"
    },
    "source-streams": {
      "type": "geojson",
      "data": "./layers/streams.geojson?1792059535"
    },
    "source-dem-red": {
      "type": "image",
      "url": "./images/dem-red.png?1792059535",
      "coordinates": [
        [
          77.255859,
          13.239945
        ],
        [
          78.046875,
          13.239945
        ],
        [
          78.046875,
          12.554564
        ],
        [
          77.255859,
          12.554564
        ]
      ]
    },
    "source-primary-drains": {
      "type": "geojson",
      "data": "./layers/primary-drains.geojson?1792059535"
    },
    "source-streams-fine": {
      "type": "geojson",
      "data": "./layers/streams-fine.geojson?1792059535"
    },
    "source-secondary-drains": {
      "type": "geojson",
      "data": "./layers/secondary-drains.geojson?1792059535"
    },
    "source-dim": {
      "type": "geojson",
      "data": {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -180,
                -85
              ],
              [
                180,
                -85
              ],
              [
                180,
                85
              ],
              [
                -180,
                85
              ],
              [
                -180,
                -85
              ]
            ]
          ]
        }
      }
    }
  },
  "layers": [
    {
      "id": "layer-dem-cog",
      "type": "raster",
      "source": "source-dem-cog",
      "paint": {
        "raster-opacity": 0.6
      }
    },
    {
      "id": "layer-dem-red",
      "type": "raster",
      "source": "source-dem-red",
      "paint": {
        "raster-opacity": 0.75
      }
    },
    {
      "id": "layer-dim",
      "type": "fill",
      "source": "source-dim",
      "paint": {
        "fill-color": "#3b2a33",
        "fill-opacity": 0.55
      }
    },
    {
      "id": "layer-green-fill",
      "type": "fill",
      "source": "source-green",
      "paint": {
        "fill-color": "#3fae49",
        "fill-opacity": 0.7
      }
    },
    {
      "id": "layer-lakes-fill",
      "type": "fill",
      "source": "source-lakes",
      "paint": {
        "fill-color": "#2f8cff",
        "fill-opacity": 1
      }
    },
    {
      "id": "layer-lakes-outline",
      "type": "line",
      "source": "source-lakes",
      "paint": {
        "line-color": "#ffffff",
        "line-width": 1.5
      }
    },
    {
      "id": "layer-streams-fine",
      "type": "line",
      "source": "source-streams-fine",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#7cc4f5",
        "line-width": [
          "match",
          [
            "get",
            "order"
          ],
          4,
          1.2,
          0.7
        ],
        "line-opacity": 0.85
      }
    },
    {
      "id": "layer-secondary-drains",
      "type": "line",
      "source": "source-secondary-drains",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#a9dcff",
        "line-width": 1
      }
    },
    {
      "id": "layer-primary-drains",
      "type": "line",
      "source": "source-primary-drains",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#7cc4f5",
        "line-width": 2
      }
    },
    {
      "id": "layer-kc-secondary",
      "type": "line",
      "source": "source-secondary-drains",
      "filter": [
        "==",
        [
          "get",
          "kc"
        ],
        1
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#86eef5",
        "line-width": 1.4
      }
    },
    {
      "id": "layer-kc-primary",
      "type": "line",
      "source": "source-primary-drains",
      "filter": [
        "==",
        [
          "get",
          "kc"
        ],
        1
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#86eef5",
        "line-width": 3
      }
    },
    {
      "id": "layer-streams",
      "type": "line",
      "source": "source-streams",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#4ff0f0",
        "line-width": [
          "interpolate",
          [
            "linear"
          ],
          [
            "get",
            "order"
          ],
          5,
          3,
          6,
          5,
          7,
          8
        ]
      }
    },
    {
      "id": "layer-roads-primary",
      "type": "line",
      "source": "source-roads-primary",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": 0.8,
        "line-opacity": 0.7
      }
    },
    {
      "id": "layer-roads",
      "type": "line",
      "source": "source-roads",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": 1.5,
        "line-opacity": 0.9
      }
    },
    {
      "id": "layer-roads-trunk",
      "type": "line",
      "source": "source-roads-trunk",
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ffffff",
        "line-width": 2.5,
        "line-opacity": 1
      }
    },
    {
      "id": "layer-roads-trunk-names",
      "type": "symbol",
      "source": "source-roads-trunk",
      "filter": [
        "!=",
        [
          "get",
          "name"
        ],
        ""
      ],
      "layout": {
        "symbol-placement": "line",
        "text-field": [
          "get",
          "name"
        ],
        "text-font": [
          "Open Sans Bold"
        ],
        "text-size": 10,
        "text-transform": "uppercase",
        "text-letter-spacing": 0.05,
        "symbol-spacing": 400
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-color": "#333333",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "layer-streams-arrows",
      "type": "symbol",
      "source": "source-streams",
      "filter": [
        ">=",
        [
          "get",
          "order"
        ],
        6
      ],
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 120,
        "icon-image": "flow-arrow",
        "icon-size": [
          "interpolate",
          [
            "linear"
          ],
          [
            "get",
            "order"
          ],
          6,
          0.9,
          7,
          1.2
        ],
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
      },
      "paint": {}
    },
    {
      "id": "layer-boundary-outline",
      "type": "line",
      "source": "source-boundary",
      "paint": {
        "line-color": "#ffd400",
        "line-width": 3,
        "line-dasharray": [
          3,
          1.5
        ]
      }
    },
    {
      "id": "layer-ridge-places-dots",
      "type": "circle",
      "source": "source-ridge-places",
      "paint": {
        "circle-radius": 6,
        "circle-color": "#ffffff",
        "circle-stroke-color": "#333333",
        "circle-stroke-width": 1
      }
    },
    {
      "id": "layer-ridge-places-names",
      "type": "symbol",
      "source": "source-ridge-places",
      "layout": {
        "text-field": [
          "get",
          "name"
        ],
        "text-font": [
          "Open Sans Bold"
        ],
        "text-size": 13,
        "text-transform": "uppercase",
        "text-anchor": [
          "get",
          "anchor"
        ],
        "text-radial-offset": 0.9,
        "text-justify": "auto",
        "text-allow-overlap": true
      },
      "paint": {
        "text-color": "#ffffff",
        "text-halo-color": "rgba(0,0,0,0.5)",
        "text-halo-width": 1
      }
    },
    {
      "id": "layer-labels",
      "type": "symbol",
      "source": "source-labels",
      "layout": {
        "text-field": [
          "get",
          "name"
        ],
        "text-font": [
          "Open Sans Bold"
        ],
        "text-size": 13,
        "text-anchor": "top",
        "text-offset": [
          0,
          0.8
        ],
        "text-transform": "uppercase",
        "text-letter-spacing": 0.1,
        "text-allow-overlap": true
      },
      "paint": {
        "text-color": "#f2b632",
        "text-halo-color": "#1a1a1a",
        "text-halo-width": 1.5
      }
    }
  ],
  "userLayersMeta": [
    {
      "id": "layer-dem-cog",
      "name": "bangalore dem clipped",
      "style": null,
      "category": "raster",
      "filename": "dem-hills.png",
      "sourceId": "source-dem-cog"
    },
    {
      "id": "layer-labels",
      "name": "labels",
      "style": null,
      "category": "labels",
      "filename": "labels.geojson",
      "sourceId": "source-labels"
    },
    {
      "id": "layer-boundary",
      "name": "BBMP boundary",
      "style": {
        "fillColor": "#ffffff",
        "fillOpacity": 0,
        "strokeColor": "#ffd400",
        "strokeWidth": 3
      },
      "category": "polygon",
      "filename": "bbmp-boundary.geojson",
      "sourceId": "source-boundary"
    },
    {
      "id": "layer-roads",
      "name": "roads",
      "style": {
        "strokeColor": "#ffffff",
        "strokeWidth": 1.5
      },
      "category": "line",
      "filename": "roads.geojson",
      "sourceId": "source-roads"
    },
    {
      "id": "layer-roads-primary",
      "name": "roads primary",
      "style": {
        "strokeColor": "#ffffff",
        "strokeWidth": 0.8
      },
      "category": "line",
      "filename": "roads-primary.geojson",
      "sourceId": "source-roads-primary"
    },
    {
      "id": "layer-roads-trunk",
      "name": "roads trunk",
      "style": {
        "strokeColor": "#ffffff",
        "strokeWidth": 2.5
      },
      "category": "line",
      "filename": "roads-trunk.geojson",
      "sourceId": "source-roads-trunk"
    },
    {
      "id": "layer-lakes",
      "name": "Lakes",
      "style": {
        "fillColor": "#2f8cff",
        "fillOpacity": 1,
        "strokeColor": "#ffffff",
        "strokeWidth": 1.5
      },
      "category": "polygon",
      "filename": "lakes.geojson",
      "sourceId": "source-lakes"
    },
    {
      "id": "layer-green",
      "name": "BBMP green",
      "style": {
        "fillColor": "#3fae49",
        "fillOpacity": 0.7
      },
      "category": "polygon",
      "filename": "green.geojson",
      "sourceId": "source-green"
    },
    {
      "id": "layer-ridge-places",
      "name": "ridge places",
      "style": {
        "fillColor": "#ffffff",
        "strokeColor": "#333333",
        "radius": 6
      },
      "category": "point",
      "filename": "ridge-places.geojson",
      "sourceId": "source-ridge-places"
    },
    {
      "id": "layer-streams",
      "name": "stream order 5+",
      "style": {
        "strokeColor": "#4ff0f0"
      },
      "category": "line",
      "filename": "streams.geojson",
      "sourceId": "source-streams"
    },
    {
      "id": "layer-primary-drains",
      "name": "primary drains",
      "style": {
        "strokeColor": "#7cc4f5",
        "strokeWidth": 2
      },
      "category": "line",
      "filename": "primary-drains.geojson",
      "sourceId": "source-primary-drains"
    },
    {
      "id": "layer-streams-fine",
      "name": "stream order 3-4",
      "style": {
        "strokeColor": "#7cc4f5"
      },
      "category": "line",
      "filename": "streams-fine.geojson",
      "sourceId": "source-streams-fine"
    },
    {
      "id": "layer-secondary-drains",
      "name": "secondary drains",
      "style": {
        "strokeColor": "#a9dcff",
        "strokeWidth": 1
      },
      "category": "line",
      "filename": "secondary-drains.geojson",
      "sourceId": "source-secondary-drains"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) { module.exports = mapConfig; }
