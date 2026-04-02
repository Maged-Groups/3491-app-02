export const fullFemaleName = nameArr => {
    const properArr = nameArr.map(name => proper(name));

    return properArr.reduce((name1, name2) => `${name1} ${name2}`, 'Ms.');
}

export const fullMaleName = nameArr => {
    const properArr = nameArr.map(name => proper(name));

    return properArr.reduce((name1, name2) => `${name1} ${name2}`, 'Mr.');
}