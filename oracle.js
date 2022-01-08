import {roll} from './helpers.js';

function getOracleTable(table) {
  if (!oracle[table]) {
    return {error: `No such oracle table ${table}`};
  }
  // let tableMax = oracle[table][oracle[table].length,1];
  let oTable = oracle[table];
  let oTableMax = oTable[oTable.length-1][1];
  let rolled = roll(oTableMax);
  let row = oTable.filter(r=>r[0] <= rolled && r[1] >= rolled)[0];
  let ret = {
    table, oTableMax, rolled, row,
    text: row[2]
  }
  //console.log(ret)
  return ret
}

export function getOracleList() {
  let oracleAll = Object.keys(oracleExtra).concat(Object.keys(oracle));
  return oracleAll;
}

export function getOracle(o) {
  let res = '';
  if (o.startsWith('_')) {
    res = oracleExtra[o]();
  }
  else {
    res = getOracleTable(o).text;
  }
  return res;
}

const oracleExtra = {
  _Waypoint: function () {
    return getOracleTable('LocationDescriptor')['text'] + ' ' + getOracleTable('Location')['text']
  }
}

var oracle = {}

oracle.Location = [
  [1,1,'Hideout'],
  [2,2,'Ruin'],
  [3,3,'Mine'],
  [4,4,'Waste'],
  [5,5,'Mystical Site'],
  [6,6,'Path'],
  [7,7,'Outpost'],
  [8,8,'Wall'],
  [9,9,'Battlefield'],
  [10,10,'Hovel'],
  [11,11,'Spring'],
  [12,12,'Lair'],
  [13,13,'Fort'],
  [14,14,'Bridge'],
  [15,15,'Camp'],
  [16,16,'Cairn/Grave'],
  [17,18,'Caravan'],
  [19,20,'Waterfall'],
  [21,22,'Cave'],
  [23,24,'Swamp'],
  [25,26,'Fen'],
  [27,28,'Ravine'],
  [29,30,'Road'],
  [31,32,'Tree'],
  [33,34,'Pond'],
  [35,36,'Fields'],
  [37,38,'Marsh'],
  [39,40,'Steading'],
  [41,42,'Rapids'],
  [43,44,'Pass'],
  [45,46,'Trail'],
  [47,48,'Glade'],
  [49,50,'Plain'],
  [51,52,'Ridge'],
  [53,54,'Cliff'],
  [55,56,'Grove'],
  [57,58,'Village'],
  [59,60,'Moor'],
  [59,60,'Moor'],
  [61,62,'Thicket'],
  [63,64,'River Ford'],
  [65,66,'Valley'],
  [67,68,'Bay/Fjord'],
  [69,70,'Foothills'],
  [71,72,'Lake'],
  [73,75,'River'],
  [76,79,'Forest'],
  [80,83,'Coast'],
  [84,88,'Hill'],
  [89,93,'Mountain'],
  [94,99,'Woods'],
  [100,100,'Anomaly'],
];



oracle.LocationDescriptor = [
  [1,2,'High'],
  [3,4,'Remote'],
  [5,6,'Exposed'],
  [7,8,'Small'],
  [9,10,'Broken'],
  [11,12,'Diverse'],
  [13,14,'Rough'],
  [15,16,'Dark'],
  [17,18,'Shadowy'],
  [19,20,'Contested'],
  [21,22,'Grim'],
  [23,24,'Wild'],
  [25,26,'Fertile'],
  [27,28,'Blocked'],
  [29,30,'Ancient'],
  [31,32,'Perilous'],
  [33,34,'Hidden'],
  [35,36,'Occupied'],
  [37,38,'Rich'],
  [39,40,'Big'],
  [41,42,'Savage'],
  [43,44,'Defended'],
  [45,46,'Withered'],
  [47,48,'Mystical'],
  [49,50,'Inaccessible'],
  [51,52,'Protected'],
  [53,54,'Abandoned'],
  [55,56,'Wide'],
  [57,58,'Foul'],
  [59,60,'Dead'],
  [61,62,'Ruined'],
  [63,64,'Barren'],
  [65,66,'Cold'],
  [67,68,'Blighted'],
  [69,70,'Low'],
  [71,72,'Beautiful'],
  [73,74,'Abundant'],
  [75,76,'Lush'],
  [77,78,'Flooded'],
  [79,80,'Empty'],
  [81,82,'Strange'],
  [83,84,'Corrupted'],
  [85,86,'Peaceful'],
  [87,88,'Forgotten'],
  [89,90,'Expansive'],
  [91,92,'Settled'],
  [93,94,'Dense'],
  [95,96,'Civilized'],
  [97,98,'Desolate'],
  [99,100,'Isolated'],

];