import check from './bot/commands/check'
import startNewCycle from './bot/commands/new'

function menu() {
    console.log('\nSimple Trading Bot v2 \n');
    console.log('--check      -c    Check config \n');
    console.log('--new        -n    Start new cycle \n');
    console.log('--update     -n    Update running cycles \n');
    console.log('--server     -s    Run server \n');
}

const lastArg = Bun.argv.at(-1)

switch (lastArg) {
    case '-c':
    case '--check':
        await check();
        break;
    case '-n':
    case '--new':
        await startNewCycle()
        break;
    case '-u':
    case '--update':
        console.log('Update');
        break;
    case '-s':
    case '--server':
        console.log('Server');
        break;
    default:
        menu();
}