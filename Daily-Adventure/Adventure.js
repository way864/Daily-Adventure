const firstMsgSet = ['looking at an old castle', 'near a lazy river', 'flying on top of a dragon', 'at the edge of a cliff', 'next to the abyssal deep of a dark pool'];
const secondMsgSet = ['a troll', 'an owlbear', 'a fiersome goblin horde', 'a dire wolf', 'one of the dark young'];
const thirdMsgSet = ['give it what it wants so that it will go away', 'slay it with your mighty sword', 'knock it out with a swift blow', 'trick it into running away', 'seduce it and live happy never after'];

const randomSelector = () => {
    const rand1 = Math.floor(Math.random() * 5);
    const rand2 = Math.floor(Math.random() * 5);
    const rand3 = Math.floor(Math.random() * 5);

    return [firstMsgSet[rand1], secondMsgSet[rand2], thirdMsgSet[rand3]];
}

const msgGenerator = (msgArray) => {
    console.log(`You are ${msgArray[0]} when, suddenly, you see ${msgArray[1]}! You ${msgArray[2]}. Congratulations! You saved the day.`);
}

msgGenerator(randomSelector());