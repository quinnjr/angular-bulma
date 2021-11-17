import { promises as fs } from 'fs';
import { join } from 'path';
import { spawn } from 'child_process';

const main = async () => {
  const directories = await fs.readdir(join(__dirname, '..', 'projects'));

  for (const directory of directories) {
    const cmd = spawn(join(__dirname, '../node_modules/.bin/ng-packagr'), ['-p', join(__dirname, '../projects', directory)]);

    cmd.stdout.on('data', (data) => {
      console.log(data.toString());
    });
    cmd.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    cmd.on('close', () => {
      console.log(`${directory} built.`);
    });
  }
}

main().catch(console.error);
