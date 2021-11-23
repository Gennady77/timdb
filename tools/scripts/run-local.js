const { createProcess } = require('./create-process');

const processServer = createProcess('Server', 'npm run start:server');
const processReact = createProcess('React', 'react-scripts start');

process.on('SIGINT', () => undefined);
process.on('close', _ => {
    processReact.kill('SIGINT');
    processServer.kill('SIGINT');
    process.exit();
});