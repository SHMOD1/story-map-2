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
      "url": "cog://https://mod-foundation.github.io/download_center/data/geotiff/DEM_cog.tif#color:[\"#72b8ee\",\"#6ec8ea\",\"#64ddd0\",\"#57dca6\",\"#55dd84\",\"#6fe352\",\"#b0ee55\",\"#f7f05a\",\"#f6c35a\",\"#f0844f\",\"#ec5e5e\",\"#ee6b6b\",\"#f4a6a6\"],805,954,c",
      "tileSize": 256
    },
    "source-lakes-existing": {
      "type": "geojson",
      "data": "https://mod-foundation.github.io/download_center/data/json/lakes_existing.geojson"
    },
    "source-labels": {
      "type": "geojson",
      "data": "./layers/labels.geojson"
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
      "name": "DEM_cog",
      "style": null,
      "category": "raster",
      "filename": "DEM_cog.tif",
      "sourceId": "source-dem-cog",
      "remoteUrl": "https://mod-foundation.github.io/download_center/data/geotiff/DEM_cog.tif"
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
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) { module.exports = mapConfig; }
