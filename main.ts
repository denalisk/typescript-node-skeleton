async function asyncMain(args: string[]): Promise<void> {
    await setTimeout(() => null, 100);
    console.log('Async code can be awaited here');
}

export function main(args: string[]) {
    asyncMain(args);
    console.log('Synchronous code goes here');
}

main(process.argv);