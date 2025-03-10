const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log(holidays);

// for文の場合
for (let holidays ="正月"; holidays <=15;holidays += 1) {
    console.log(holidays);
}

//　while文の場合
let index = 0;

while (holidays[index] !== "勤労感謝の日") {
    console.log(holidays[index]);
    index++;
}