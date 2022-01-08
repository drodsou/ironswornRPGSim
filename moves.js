

// export function getMove(move, result) {
//   if (!moves[move]) {
//     return {error: `No such move ${move}`};
//   }
//   if (!result) {
//     return moves[move].text
//   }
// }


export const moves = {}

moves.SwearAnIronVow = {
  name: 'Swear an iron vow',

  text: `When you swear upon iron to complete a quest, write your vow and give the quest a rank. Then, roll <b>+heart</b>. If you make this vow to a person or community with whom you share a <b>bond, add +1</b>`,

  strong: `On a strong hit, you are emboldened and it is clear what you must do next (Ask the Oracle if unsure). Take <b>+2 momentum</b>`,

  weak: `On a weak hit, you are determined but begin your quest with more questions than answers. Take <b>+1 momentum</b>, and envision what you do to find a path forward.`,

  miss: `On a miss, you face a significant obstacle before you can begin your quest. Envision what stands in your way (Ask the Oracle if unsure), and choose one:
  <ul>
  <li>You press on: Suffer <b>-2 momentum</b>, and do what you must to overcome this obstacle.</li>
  <li>You give up: Forsake Your Vow.</li>`
};

moves.UndertakeAJourney ={
  name: 'Undertake a journey',
  
  text: `When you travel across hazardous or unfamiliar lands, set the rank of your journey.
  <ul>
    <li>Troublesome journey: 3 progress per waypoint.</li>
    <li>Dangerous journey: 2 progress per waypoint.</li>
    <li>Formidable journey: 1 progress per waypoint.</li>
    <li>Extreme journey: 2 ticks per waypoint.</li>
    <li>Epic journey: 1 tick per waypoint.</li>
  </ul>

  Then, for each segment of your journey, roll <b>+wits</b>. If you are setting off from a community with which you share a <b>bond, add +1</b> to your initial roll.`,

  strong: `On a strong hit, you reach a waypoint. If the waypoint is unknown to you, envision it (Ask the Oracle if unsure). Then, choose one:
  <ul>
  <li>You make good use of your resources: <b>Mark progress</b>.</li>
  <li>You move at speed: Mark progress and take +1 momentum, but suffer <b>-1 supply</b>.</li>
  </ul>`,

  weak: `On a weak hit, you reach a <u>waypoint</u> and <b>mark progress</b>, but suffer <b>-1 supply</b>.`,

  miss: `On a miss, you are waylaid by a perilous event. <u>Pay the Price.</u>`
};


