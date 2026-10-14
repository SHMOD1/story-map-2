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
      "type": "raster",
      "url": "cog://./layers/bangalore-dem-cog.tif#color:[\"#72b8ee\",\"#6ec8ea\",\"#64ddd0\",\"#57dca6\",\"#55dd84\",\"#6fe352\",\"#b0ee55\",\"#f7f05a\",\"#f6c35a\",\"#f0844f\",\"#ec5e5e\",\"#ee6b6b\",\"#f4a6a6\"],720,870,c",
      "tileSize": 256
    },
    "source-lakes-existing": {
      "type": "geojson",
      "data": "https://mod-foundation.github.io/download_center/data/json/lakes_existing.geojson"
    },
    "source-labels": {
      "type": "geojson",
      "data": "./layers/labels.geojson"
    },
    "source-boundary": {
      "type": "geojson",
      "data": "./layers/bbmp-boundary.geojson"
    },
    "source-roads": {
      "type": "geojson",
      "data": "./layers/roads.geojson"
    },
    "source-roads-primary": {
      "type": "geojson",
      "data": "./layers/roads-primary.geojson"
    },
    "source-roads-trunk": {
      "type": "geojson",
      "data": "./layers/roads-trunk.geojson"
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
      "id": "layer-lakes-existing-fill",
      "type": "fill",
      "source": "source-lakes-existing",
      "paint": {
        "fill-color": "#4a9fe8",
        "fill-opacity": 0.9
      }
    },
    {
      "id": "layer-lakes-existing-outline",
      "type": "line",
      "source": "source-lakes-existing",
      "paint": {
        "line-color": "#7cc0ff",
        "line-width": 1
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
      "filename": "bangalore-dem-cog.tif",
      "sourceId": "source-dem-cog"
    },
    {
      "id": "layer-lakes-existing",
      "name": "lakes_existing",
      "style": {
        "fillColor": "#4a9fe8",
        "fillOpacity": 0.9,
        "strokeColor": "#7cc0ff",
        "strokeWidth": 1
      },
      "category": "polygon",
      "filename": "lakes_existing.geojson",
      "sourceId": "source-lakes-existing",
      "remoteUrl": "https://mod-foundation.github.io/download_center/data/json/lakes_existing.geojson"
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
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) { module.exports = mapConfig; }
