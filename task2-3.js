let player = [
  ["Andrey", 120, 700],
  ["Alex", 99, 1035],
  ["Alexey", 50, 650],
];
let choice = +prompt(
  "Show player's statistic: 1 - Andrey; 2 - Alex; 3 - Alexey"
);
if (choice == 1) {
  alert(
    `Player ${player[0][0]} has health ${player[0][1]}% and make a hit ${player[0][2]} points`
  );
} else if (choice == 2) {
  alert(
    `Player ${player[1][0]} has health ${player[1][1]}% and make a hit ${player[1][2]} points`
  );
} else if (choice == 3) {
  alert(
    `Player ${player[2][0]} has health ${player[2][1]}% and make a hit ${player[2][2]} points`
  );
} else {
  alert("Incorrect choice!");
}
