var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "foyer",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.026207499361847297,
        "pitch": 0.024436838747973866,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.9398303187243577,
          "pitch": 0.32570740802337284,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -2.238866300405718,
          "pitch": 0.2299895736481936,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -1.2119829656940766,
          "pitch": 0.2074299395020205,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -1.4438494452615327,
          "pitch": -0.7753008268355046,
          "rotation": 0,
          "target": "4-stair"
        },
        {
          "yaw": -1.4631156514544585,
          "pitch": 0.05777757170288211,
          "rotation": 0,
          "target": "5-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "living",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.340165430190593,
          "pitch": 0.2961540712405739,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.7630535821270943,
          "pitch": 0.14506503560565243,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "dining",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.867144492054429,
          "pitch": 0.24139683354067287,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -1.013200771151503,
          "pitch": 0.22867169491272143,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -0.30631453499819195,
          "pitch": -0.9317305904201554,
          "rotation": 0,
          "target": "4-stair"
        },
        {
          "yaw": -0.2730940888288611,
          "pitch": 0.2556933601962008,
          "rotation": 0,
          "target": "3-courtyard"
        },
        {
          "yaw": 0.19276162895403282,
          "pitch": 0.04743431459244718,
          "rotation": 0,
          "target": "5-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-courtyard",
      "name": "courtyard",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6272789381146087,
          "pitch": 0.11845583735128073,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -0.9621454384593271,
          "pitch": 0.15742824992695503,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -0.6267268453080153,
          "pitch": 0.11760893930918392,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": 1.6163231533506472,
          "pitch": 0.241656470391705,
          "rotation": 0,
          "target": "5-patio"
        },
        {
          "yaw": -1.6033232597881302,
          "pitch": -0.9134762860264978,
          "rotation": 0,
          "target": "4-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stair",
      "name": "stair",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-patio",
      "name": "patio",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.041616032121004,
          "pitch": 0.36774947269511316,
          "rotation": 0,
          "target": "3-courtyard"
        },
        {
          "yaw": -1.9355258425712734,
          "pitch": 0.33583461275545545,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8099769533553882,
          "pitch": 0.32093949656998433,
          "rotation": 0,
          "target": "7-kitchen-2"
        },
        {
          "yaw": 1.2588948094149828,
          "pitch": 0.18963253608210273,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen-2",
      "name": "kitchen 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5521151803037503,
          "pitch": 0.32836318049931457,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": 2.8059984157162114,
          "pitch": 0.12463597969009399,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
