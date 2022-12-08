function projectCompletion(input) {
    let projectCount = Number(input[1]);
    let completionTime = projectCount * 3;

    console.log(`The architect ${input[0]} will need ${completionTime} hours to complete ${projectCount} project/s.`);
}