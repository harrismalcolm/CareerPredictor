let personality = ['confidant', 'prudent', 'firm']
let occupation = ['pirate', 'dentist', 'fire-fighter']
let salary = ['55k', '28k', '100k']

const careerPredictor = (arr1, arr2, arr3) => {
    let randomPersonality = arr1[Math.floor(Math.random() * 3)];
    let randomOccupation = arr2[Math.floor(Math.random() * 3)];
    let randomSalary = arr3[Math.floor(Math.random() * 3)]

    return `Your fortune tells me you will become a ${randomPersonality} ${randomOccupation} next year. Your starting salary will be $${randomSalary}!`;
}

console.log(careerPredictor(personality, occupation, salary));