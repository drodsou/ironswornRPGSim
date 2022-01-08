import { initialRender } from './initialRender.js';
import { getOracle, getOracleList } from './oracle.js';
import { roll, tripleRoll } from './helpers.js';
import {moves} from './moves.js';

let app  = globalThis.app = {
  stats : {
    edge:1,
    heart:1,
    iron:1,
    shadow:1,
    wits:1
  },
  state : {
    momentum: 2,
    health: 5,
    spirit: 5,
    supply: 5
  },
  events: {},
  moveCurrent : {},
  oracleCurrent : undefined

}

app.events.moveSelect = function (e) {
  let moveValue = e.value;
  app.moveCurrent = moves[moveValue] || {}
  document.querySelector("#moveText").innerHTML = `
    <p>${app.moveCurrent.text }</p>
  `;
  document.querySelector("#moveResult").innerHTML = `
    <ul>
      <li><b>Strong hit:</b> ${app.moveCurrent.strong}</li>
      <li><b>Weak hit:</b> ${app.moveCurrent.weak}</li>
      <li><b>Miss:</b> ${app.moveCurrent.miss}</li>
    </ul>
  `;
}

app.events.moveExecute = function () {
  let moveAdds = parseInt(document.querySelector("#moveAdds").value);
  let rolled = tripleRoll(moveAdds)
  // <p>${JSON.stringify(rolled)}</p>
  document.querySelector("#moveResult").innerHTML = !app.moveCurrent ? '' : `
    <p><b>Rolled ${rolled.d6 + rolled.stat} vs ${rolled.d10a} & ${rolled.d10b} : ${rolled.result + (rolled.match ? ' (match!)' : '')}</b></p>
    <ul>
      <li>${app.moveCurrent[rolled.result]}</li>
    </ul>
  `;
}

app.events.oracleSelect = function (e) {
  app.oracleCurrent = e.value;
  document.querySelector("#oracleResult").innerHTML = ``;
}

app.events.oracleExecute = function () {
  let oracleResult = getOracle(app.oracleCurrent);
  document.querySelector("#oracleResult").innerHTML = `
    <p>${oracleResult}</p>
  `;
}


// console.log('getOracleWaypoint', getOracleWaypoint());

// console.log('roll(10)', roll(10));
// console.log('tripleRoll', tripleRoll(3));


initialRender();