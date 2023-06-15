let messageArr = ['Cats have whiskers on the backs of their front legs, as well.',
'Male cats are more likely to be left-pawed, while female cats are more likely to be right-pawed.',
'A group of kittens is called a “kindle.”',
'The first known cat video was recorded in 1894.']

const ranMessage = () => {
    let index = Math.floor(Math.random()* messageArr.length)
    console.log(`--- your message of the day is --- \n ${messageArr[index]} `)
}
ranMessage()