let personality = ['confidant', 'prudent', 'firm', 'loyal']
let occupation = ['pirate', 'dentist', 'fire-fighter', 'plumber', 'monster-hunter']
let salary = ['55k', '28k', '100k', '72k', '250k', '1M']

const careerPredictor = () => {
    let randomPersonality = personality[Math.floor(Math.random() * personality.length)];
    let randomOccupation = occupation[Math.floor(Math.random() * occupation.length)];
    let randomSalary = salary[Math.floor(Math.random() * salary.length)]
    return `Your fortune tells me you will become a ${randomPersonality} ${randomOccupation} next year. Your starting salary will be $${randomSalary}!`;
}

console.log(careerPredictor());