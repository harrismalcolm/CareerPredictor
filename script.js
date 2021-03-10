let personality = ['confidant', 'prudent', 'firm']
let occupation = ['pirate', 'dentist', 'fire-fighter']
let salary = ['55k', '28k', '100k']

const careerPredictor = (arr1, arr2, arr3) => {
    let randomPersonality = arr1[randomIndex];
    let randomOccupation = arr2[randomIndex];
    let randomSalary = arr3[randomIndex]
    let randomIndex = Math.floor(Math.random() * 3)
    console.log(randomIndex)

    console.log(`Your fortune tells me you will become a ${randomPersonality} ${randomOccupation} next year. Your starting salary will be $${randomSalary}!`);
}

console.log(careerPredictor(personality, occupation, salary));