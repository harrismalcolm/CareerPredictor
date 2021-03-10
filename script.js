let personality = ['confidant', 'prudent', 'firm', 'loyal']
let occupation = ['pirate', 'dentist', 'fire-fighter', 'plumber', 'monster-hunter']
let salary = ['55k', '28k', '100k', '72k', '250k', '1M']

const careerPredictor = (arr1, arr2, arr3) => {
    let randomPersonality = arr1[Math.floor(Math.random() * arr1.length)];
    let randomOccupation = arr2[Math.floor(Math.random() * arr2.length)];
    let randomSalary = arr3[Math.floor(Math.random() * arr3.length)]
    return `Your fortune tells me you will become a ${randomPersonality} ${randomOccupation} next year. Your starting salary will be $${randomSalary}!`;
}

console.log(careerPredictor(personality, occupation, salary));