var APP_DATA = {
  "scenes": [
    {
      "id": "0-wash",
      "name": "Wash",
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
          "yaw": 1.1870745482140599,
          "pitch": 0.3223355733291502,
          "rotation": 0,
          "target": "6-work-area"
        },
        {
          "yaw": 1.3659036707798293,
          "pitch": 0.10857849965208999,
          "rotation": 0,
          "target": "3-kitchen-view_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-room",
      "name": "Dining Room",
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
          "yaw": 0.11679851599864222,
          "pitch": 0.17305098862613733,
          "rotation": 0,
          "target": "2-dining-table"
        },
        {
          "yaw": -1.7136639922879855,
          "pitch": 0.5517241398291137,
          "rotation": 0,
          "target": "5-wash-counter"
        },
        {
          "yaw": -1.5398182897961412,
          "pitch": 0.09760271401251508,
          "rotation": 0,
          "target": "4-kitchen-view_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-table",
      "name": "Dining Table",
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
          "yaw": -3.1363261499126978,
          "pitch": 0.18197984352850227,
          "rotation": 0,
          "target": "1-dining-room"
        },
        {
          "yaw": -2.601561325193522,
          "pitch": 0.25880757812223365,
          "rotation": 0,
          "target": "5-wash-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-view_01",
      "name": "Kitchen View_01",
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
          "yaw": -1.1409840386908563,
          "pitch": 0.31822760901534153,
          "rotation": 0,
          "target": "6-work-area"
        },
        {
          "yaw": 0.6132193945674338,
          "pitch": 0.2442311110755533,
          "rotation": 0,
          "target": "4-kitchen-view_02"
        },
        {
          "yaw": 1.4544958116416637,
          "pitch": 0.4090431085816668,
          "rotation": 0,
          "target": "5-wash-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-view_02",
      "name": "Kitchen View_02",
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
          "yaw": 1.976431714421981,
          "pitch": 0.31465820832334046,
          "rotation": 0,
          "target": "5-wash-counter"
        },
        {
          "yaw": 2.748439125830596,
          "pitch": 0.235049139158507,
          "rotation": 0,
          "target": "3-kitchen-view_01"
        },
        {
          "yaw": -3.04908858133118,
          "pitch": 0.14888049950681292,
          "rotation": 0,
          "target": "6-work-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wash-counter",
      "name": "Wash Counter",
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
          "yaw": 0.6264588437816982,
          "pitch": 0.10876249896992007,
          "rotation": 0,
          "target": "2-dining-table"
        },
        {
          "yaw": 1.5509701069967434,
          "pitch": 0.4836200351365143,
          "rotation": 0,
          "target": "1-dining-room"
        },
        {
          "yaw": -1.3256485845620425,
          "pitch": 0.1713444423411783,
          "rotation": 0,
          "target": "4-kitchen-view_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-work-area",
      "name": "Work Area",
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
          "yaw": 3.0080514638341453,
          "pitch": 0.3139766136613158,
          "rotation": 0,
          "target": "0-wash"
        },
        {
          "yaw": 1.2216377882406952,
          "pitch": 0.4359561381313526,
          "rotation": 0,
          "target": "3-kitchen-view_01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
