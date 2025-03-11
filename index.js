// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

 
const superbowlWin = (record) => {
    const winningGame = record.find(game => game.result === "W");
    return winningGame ? winningGame.year : undefined;
};