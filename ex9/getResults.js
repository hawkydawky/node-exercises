function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
    try {
        const tinaResponse = await luckyDraw("Tina")
        console.log(tinaResponse);
        const jorgeResponse = await luckyDraw("Jorge")
        console.log(jorgeResponse);
        const julienResponse = await luckyDraw("Julien")
        console.log(julienResponse);
    } catch (error) {
        console.log(error.message)
    }
}

getResults();

// await the lucky draw results

// Create a getResults function that uses async and await. Inside of the function, call the luckyDraw function for each of the players: Tina, Jorge, Julien

// Log out the resolved value for each promise and handle any promise rejections.
