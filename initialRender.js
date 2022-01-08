import {moves} from './moves.js';
import {getOracleList, getOracle} from './oracle.js';

export function initialRender () {
  
  let app = globalThis.app;

console.log(app)

  let moveOptions = Object.keys(moves)
    .map(m=>`<option value="${m}">${moves[m].name}</option>`)
    .join('\n');
  console.log(moveOptions);

  let oracleOptions = getOracleList()
    .map(o=>`<option value="${o}">${o}</option>`)
    .join('\n');
  console.log(oracleOptions);

  let moveCurrent = {}
  
  document.querySelector("#content").innerHTML = /*html*/`

    <div class="container">
      <label>Move</label>
      <select id="moveSelect" onchange="app.events.moveSelect(this)">
        <option value="blank">...chose a move</option>
        ${moveOptions}
      </select>

      <div id="moveText"></div>

      <div id="moveRollContainer">
        Adds: <input id="moveAdds" type="text" value=1></input><button id="moveExecute" onclick="app.events.moveExecute()">Roll move!</button>
      </div>
      <div id="moveResult"></div>
      
    </div>


    <div class="container">
    <label>Oracle</label>
    <select id="oracleSelect" onchange="app.events.oracleSelect(this)">
      <option value="blank">...chose an oracle</option>
      ${oracleOptions}
    </select>

    
      <button id="oracleExecute" onclick="app.events.oracleExecute()">Roll oracle!</button>
    
    <div id="oracleResult"></div>
    
  </div>


  `;
}