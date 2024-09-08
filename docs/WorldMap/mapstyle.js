var mapstyle_layers = [
  {
    id: "osmcarto",
    type: "raster",
    source: "osmcarto",
  },
  {
    id: "allFeatures",
    type: "line",
    paint: {
      "line-color": "#000000",
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
         9, 0.5,
        10, 1,
        13, 2
      ],
    },
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    source: "WAMap",
    "source-layer": "osm",
  },
  {
    id: "allFeatures-node",
    type: "circle",
    paint: {
      "circle-color": "#000000",
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        11, 0.9,
        14, 3
      ],
    },
    "layout": {
      "visibility": "visible"
    },
    source: "WAMap",
    "source-layer": "osm",
    filter: ["==", "$type", "Point"],
  },
  {
    id: "highlight",
    type: "line",
    paint: {
      "line-color":  "#f5812f",
      "line-width": 5,
    },
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    source: "highlight"
  },
  {
    id: "voronoi",
    type: "line",
    paint: {
      "line-color":  "#000000",
      "line-width": 5,
    },
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    source: "voronoi"
  }
];
