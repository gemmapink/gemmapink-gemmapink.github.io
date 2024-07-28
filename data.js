var APP_DATA = {
  "scenes": [
    {
      "id": "0-museum",
      "name": "museum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 832,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.992487492905167,
          "pitch": 0.28028489815937263,
          "rotation": 0,
          "target": "1-kay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.069047906666503,
          "pitch": 0,
          "title": "museum",
          "text": "Welcome to the historic residential district of West Bel Air Avenue! This virtual tour was begun by a volunteer intern at the Aberdeen Historical Museum. It features information and pictures of various houses and other structures. The tour aims to inform you about the history of these buildings and the people who lived and worked in them. Please note that the tour is still a work in progress, and more buildings and details will be added over time. However, the  information provided in this tour is just a small percentage of the history of West Bel Air Avenue and greater Aberdeen. If you would like to contribute to the tour by providing feedback, reporting bugs or glitches, or sharing additional knowledge about these places on West Bel Air Avenue, please fill out this form. To learn more about Aberdeen, please visit our website. We hope you enjoy the tour!"
        }
      ]
    },
    {
      "id": "1-kay",
      "name": "kay",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0096431302777447,
          "pitch": 0.117909292881194,
          "rotation": 0,
          "target": "2-orion"
        },
        {
          "yaw": -0.32555316640704035,
          "pitch": 0.8362599263516728,
          "rotation": 0,
          "target": "0-museum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.464036955665911,
          "pitch": 0.17639538874157346,
          "title": "kay house",
          "text": "ring ring"
        }
      ]
    },
    {
      "id": "2-orion",
      "name": "orion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8911952755398875,
          "pitch": 0.22148641978154515,
          "rotation": 0,
          "target": "0-museum"
        },
        {
          "yaw": 1.9774598637924186,
          "pitch": 0.10561048357118707,
          "rotation": 0,
          "target": "1-kay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.436059191979795,
          "pitch": -0.13198257214868647,
          "title": "orion",
          "text": ""
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
   // viewer.controls().enableMethodGroup('arrowKeys');

  }
};
