var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrata-e",
      "name": "Entrata E",
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
          "yaw": 0.3904145174274962,
          "pitch": 0.3044630336903289,
          "rotation": 0,
          "target": "1-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrata",
      "name": "Entrata",
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
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-galeria-1"
        },
        {
          "yaw": 1.9650672364096184,
          "pitch": 0.5427274892608054,
          "rotation": 0,
          "target": "0-entrata-e"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-galeria-1",
      "name": "Galeria 1",
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
          "yaw": 1.4535980410457015,
          "pitch": 0.29447027347726795,
          "rotation": 0,
          "target": "3-galeria-sala-pranzo"
        },
        {
          "yaw": -1.2637307471623735,
          "pitch": 0.2916528967627272,
          "rotation": 0,
          "target": "4-galeria-salone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-galeria-sala-pranzo",
      "name": "Galeria sala pranzo",
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
          "yaw": 1.5034815564419217,
          "pitch": 0.15606996403086626,
          "rotation": 0,
          "target": "11-piscina"
        },
        {
          "yaw": -1.2229568436270384,
          "pitch": 0.35505484138009535,
          "rotation": 0,
          "target": "2-galeria-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-galeria-salone",
      "name": "Galeria salone",
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
          "yaw": 1.2681497517759386,
          "pitch": 0.2922994626514175,
          "rotation": 0,
          "target": "2-galeria-1"
        },
        {
          "yaw": -1.143628032747161,
          "pitch": 0.26839307405233725,
          "rotation": 0,
          "target": "10-galeria-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-salone-1",
      "name": "Salone 1",
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
          "yaw": -1.2424081463570928,
          "pitch": -0.2502052666284733,
          "rotation": 0,
          "target": "33-corridoio-pp"
        },
        {
          "yaw": 0.026926186356140747,
          "pitch": 0.16471768358933403,
          "rotation": 0,
          "target": "35-salone-2"
        },
        {
          "yaw": -0.886735133398119,
          "pitch": 0.09158264174625508,
          "rotation": 0,
          "target": "6-cucina-serv"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cucina-serv",
      "name": "Cucina Serv",
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
          "yaw": -0.6407301714742921,
          "pitch": 0.2673617456947852,
          "rotation": 0,
          "target": "7-giardino-int"
        },
        {
          "yaw": -2.4306366824716026,
          "pitch": 0.5570774678588428,
          "rotation": 0,
          "target": "5-salone-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-giardino-int",
      "name": "Giardino int",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-sala-pranzo",
      "name": "Sala pranzo",
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
          "yaw": 0.5878126103151047,
          "pitch": 0.12347295220956589,
          "rotation": 0,
          "target": "9-cucina-p"
        },
        {
          "yaw": -1.5007457297173552,
          "pitch": 0.26835813556378163,
          "rotation": 0,
          "target": "35-salone-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cucina-p",
      "name": "Cucina p",
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
          "yaw": 0.033967244152727005,
          "pitch": 0.15164982063673627,
          "rotation": 0,
          "target": "8-sala-pranzo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-galeria-entrata",
      "name": "Galeria entrata",
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
          "yaw": -0.7837738671912255,
          "pitch": 0.09597114360024683,
          "rotation": 0,
          "target": "12-giardino-entrata"
        },
        {
          "yaw": 0.7214931831900309,
          "pitch": 0.31513661939303894,
          "rotation": 0,
          "target": "4-galeria-salone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-piscina",
      "name": "Piscina",
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
          "yaw": 1.914919776621863,
          "pitch": 0.2900933558525409,
          "rotation": 0,
          "target": "14-barbacue"
        },
        {
          "yaw": 0.10330134153843495,
          "pitch": 0.1909256993254349,
          "rotation": 0,
          "target": "3-galeria-sala-pranzo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-giardino-entrata",
      "name": "Giardino entrata",
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
          "yaw": 1.213838924150421,
          "pitch": 0.23402447736025955,
          "rotation": 0,
          "target": "5-salone-1"
        },
        {
          "yaw": 1.475772026420339,
          "pitch": 0.11357259475411219,
          "rotation": 0,
          "target": "10-galeria-entrata"
        },
        {
          "yaw": 0.036904141183688566,
          "pitch": -0.06749750605305493,
          "rotation": 0,
          "target": "13-esc-giardino"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-esc-giardino",
      "name": "Esc giardino",
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
          "yaw": 0.27419667042491724,
          "pitch": -0.025436315941153254,
          "rotation": 0,
          "target": "15-terrazzo-verde-2"
        },
        {
          "yaw": -2.0161113430085695,
          "pitch": 0.3425505420168591,
          "rotation": 0,
          "target": "12-giardino-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-barbacue",
      "name": "Barbacue",
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
          "yaw": -0.981876164750318,
          "pitch": 0.29520891899217006,
          "rotation": 0,
          "target": "11-piscina"
        },
        {
          "yaw": 1.478779231548807,
          "pitch": 0.2529819178916881,
          "rotation": 0,
          "target": "36-esc-terrazzo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-terrazzo-verde-2",
      "name": "Terrazzo verde 2",
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
          "yaw": 0.09411089894283009,
          "pitch": 0.4665955785743243,
          "rotation": 0,
          "target": "13-esc-giardino"
        },
        {
          "yaw": -2.769005278408496,
          "pitch": 0.2658836246988763,
          "rotation": 0,
          "target": "37-terrazzo-verde-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-giardino-3",
      "name": "Giardino 3",
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
          "yaw": 0.3423361716263784,
          "pitch": -0.03139273082411975,
          "rotation": 0,
          "target": "15-terrazzo-verde-2"
        },
        {
          "yaw": -1.978731802322656,
          "pitch": 0.36443414166106614,
          "rotation": 0,
          "target": "10-galeria-entrata"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-camera-principale",
      "name": "Camera Principale",
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
          "yaw": 0.6516413248467785,
          "pitch": 0.34614182136702887,
          "rotation": 0,
          "target": "18-cabina-armadio-p"
        },
        {
          "yaw": -1.171885850925074,
          "pitch": 0.3826607450985833,
          "rotation": 0,
          "target": "21-balcone-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-cabina-armadio-p",
      "name": "Cabina armadio p",
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
          "yaw": 1.249528128206645,
          "pitch": 0.283946914045476,
          "rotation": 0,
          "target": "19-bagno-1"
        },
        {
          "yaw": 1.7285508444564401,
          "pitch": 0.34141463088762514,
          "rotation": 0,
          "target": "33-corridoio-pp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bagno-1",
      "name": "Bagno 1",
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
          "yaw": 0.06785630990569302,
          "pitch": 0.5932517844846323,
          "rotation": 0,
          "target": "20-bagno-p"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bagno-p",
      "name": "Bagno p",
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
          "yaw": 3.021770632427293,
          "pitch": 0.7392357535444791,
          "rotation": 0,
          "target": "18-cabina-armadio-p"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-balcone-0",
      "name": "Balcone 0",
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
          "yaw": 0.8450420012375695,
          "pitch": 0.38454794969749173,
          "rotation": 0,
          "target": "17-camera-principale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-camera-1",
      "name": "Camera 1",
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
          "yaw": 2.1403929142440123,
          "pitch": 0.7527045194282422,
          "rotation": 0,
          "target": "23-cabina-armadio-1"
        },
        {
          "yaw": 2.2009439652997695,
          "pitch": 0.11847167567139394,
          "rotation": 0,
          "target": "33-corridoio-pp"
        },
        {
          "yaw": -2.482314421957293,
          "pitch": 0.5969290232915192,
          "rotation": 0,
          "target": "26-bagno-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-cabina-armadio-1",
      "name": "Cabina armadio 1",
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
          "yaw": 1.4984131643991265,
          "pitch": 0.2833089295807145,
          "rotation": 0,
          "target": "33-corridoio-pp"
        },
        {
          "yaw": -1.2292870807823881,
          "pitch": 0.35707255651812275,
          "rotation": 0,
          "target": "22-camera-1"
        },
        {
          "yaw": -1.499998720141603,
          "pitch": 0.5301408225557971,
          "rotation": 0,
          "target": "26-bagno-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-cabina-armadio-2",
      "name": "Cabina armadio 2",
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
          "yaw": -1.0171687887589478,
          "pitch": 0.20739666447702554,
          "rotation": 0,
          "target": "31-studio"
        },
        {
          "yaw": 1.1128891514519843,
          "pitch": 0.2715586919007027,
          "rotation": 0,
          "target": "25-camera-2"
        },
        {
          "yaw": 2.0219611380061755,
          "pitch": 0.48656103154922725,
          "rotation": 0,
          "target": "26-bagno-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-camera-2",
      "name": "Camera 2",
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
          "yaw": -0.34939638110980376,
          "pitch": 0.12178198101668158,
          "rotation": 0,
          "target": "26-bagno-2"
        },
        {
          "yaw": -0.1947316910236392,
          "pitch": 0.21458784829328792,
          "rotation": 0,
          "target": "24-cabina-armadio-2"
        },
        {
          "yaw": -1.0540857093557463,
          "pitch": 0.38893386070672875,
          "rotation": 0,
          "target": "27-balcone-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bagno-2",
      "name": "Bagno 2",
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
          "yaw": -1.0326471370118977,
          "pitch": 0.4077651405948579,
          "rotation": 0,
          "target": "22-camera-1"
        },
        {
          "yaw": 2.6298462505245075,
          "pitch": 0.3013331251063498,
          "rotation": 0,
          "target": "25-camera-2"
        },
        {
          "yaw": 1.210172921575552,
          "pitch": 0.5616377820340972,
          "rotation": 0,
          "target": "24-cabina-armadio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-balcone-2",
      "name": "Balcone 2",
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
          "yaw": 0.6493721639178673,
          "pitch": 0.26629039505431606,
          "rotation": 0,
          "target": "30-balcone-3"
        },
        {
          "yaw": 0.003820483595744051,
          "pitch": 0.3156663117269183,
          "rotation": 0,
          "target": "25-camera-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-camera-3",
      "name": "Camera 3",
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
          "yaw": 0.9371597016066495,
          "pitch": 0.24952993183138972,
          "rotation": 0,
          "target": "30-balcone-3"
        },
        {
          "yaw": -0.6942573496350057,
          "pitch": 0.3505114410174386,
          "rotation": 0,
          "target": "29-bagno-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-bagno-3",
      "name": "Bagno 3",
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
          "yaw": 1.6469254725728657,
          "pitch": 0.37280517362169263,
          "rotation": 0,
          "target": "28-camera-3"
        },
        {
          "yaw": -1.5676494020734815,
          "pitch": 0.462162735302865,
          "rotation": 0,
          "target": "31-studio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-balcone-3",
      "name": "Balcone 3",
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
          "yaw": -0.12113777461307507,
          "pitch": 0.2849442330913323,
          "rotation": 0,
          "target": "27-balcone-2"
        },
        {
          "yaw": 1.570189275124374,
          "pitch": 0.22849290268194444,
          "rotation": 0,
          "target": "32-balcone-studio"
        },
        {
          "yaw": 0.44732600036599734,
          "pitch": 0.3327062649881505,
          "rotation": 0,
          "target": "28-camera-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-studio",
      "name": "Studio",
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
          "yaw": 0.382024015343454,
          "pitch": 0.14859273183489918,
          "rotation": 0,
          "target": "32-balcone-studio"
        },
        {
          "yaw": 0.6178492540863676,
          "pitch": 0.1626731978203093,
          "rotation": 0,
          "target": "29-bagno-3"
        },
        {
          "yaw": 2.5228109537891257,
          "pitch": 0.3134452261536502,
          "rotation": 0,
          "target": "24-cabina-armadio-2"
        },
        {
          "yaw": -2.6240740360091195,
          "pitch": 0.43424804297675834,
          "rotation": 0,
          "target": "33-corridoio-pp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-balcone-studio",
      "name": "Balcone studio",
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
          "yaw": -2.4122790347364322,
          "pitch": 0.2042602955047652,
          "rotation": 0,
          "target": "30-balcone-3"
        },
        {
          "yaw": -0.8507831056679898,
          "pitch": 0.3020772047621385,
          "rotation": 0,
          "target": "31-studio"
        },
        {
          "yaw": 0.6703806414221987,
          "pitch": 0.2643663692972833,
          "rotation": 0,
          "target": "37-terrazzo-verde-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-corridoio-pp",
      "name": "Corridoio PP",
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
          "yaw": -0.19568190252498852,
          "pitch": 0.13436448687190783,
          "rotation": 0,
          "target": "18-cabina-armadio-p"
        },
        {
          "yaw": 0.5442558928982457,
          "pitch": 0.6496015585566148,
          "rotation": 0,
          "target": "5-salone-1"
        },
        {
          "yaw": -1.4007735673663877,
          "pitch": 0.3982554217552554,
          "rotation": 0,
          "target": "22-camera-1"
        },
        {
          "yaw": 3.1383214577891527,
          "pitch": 0.2791651037048979,
          "rotation": 0,
          "target": "31-studio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-entrata-da-garage",
      "name": "Entrata da Garage",
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
          "yaw": 0.530893846852738,
          "pitch": 0.17877429600217098,
          "rotation": 0,
          "target": "5-salone-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-salone-2",
      "name": "Salone 2",
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
          "yaw": 0.11013480204069559,
          "pitch": 0.12045858296129097,
          "rotation": 0,
          "target": "5-salone-1"
        },
        {
          "yaw": 2.464606846405542,
          "pitch": 0.2419241603675406,
          "rotation": 0,
          "target": "8-sala-pranzo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-esc-terrazzo",
      "name": "Esc terrazzo",
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
          "yaw": -2.732722340771627,
          "pitch": 0.3024155289883659,
          "rotation": 0,
          "target": "14-barbacue"
        },
        {
          "yaw": 0.3006847276817446,
          "pitch": -0.25151811277052083,
          "rotation": 0,
          "target": "37-terrazzo-verde-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-terrazzo-verde-1",
      "name": "Terrazzo verde 1",
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
          "yaw": -1.0797001960223547,
          "pitch": 0.18844615536966813,
          "rotation": 0,
          "target": "32-balcone-studio"
        },
        {
          "yaw": -2.5589943398384314,
          "pitch": 0.31464071910357383,
          "rotation": 0,
          "target": "36-esc-terrazzo"
        },
        {
          "yaw": 0.7646110467004501,
          "pitch": 0.19939789438692834,
          "rotation": 0,
          "target": "15-terrazzo-verde-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
