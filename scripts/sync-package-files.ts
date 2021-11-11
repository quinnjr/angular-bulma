import glob from 'glob';
import { resolve } from 'path';
import { promises as fs } from 'fs';

import pkg from '../package.json';

const main = async () => {
  const projects = glob.sync(resolve(__dirname, '../projects/**/package.json'));

  for(const project of projects) {
    let json = JSON.parse(await (await fs.readFile(project)).toString());

    json.keywords = pkg.keywords;
    json.homepage = pkg.homepage;
    json.bugs = pkg.bugs;
    json.author = pkg.author;
    json.repository = pkg.repository;
    json.license = pkg.license;

    await fs.writeFile(project, JSON.stringify(json, null, 2));
  }
}

main().catch(console.error);
