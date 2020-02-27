import { codegen } from '@graphql-codegen/core';
import fs from 'fs';
import path from 'path';
import glob from 'glob';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import { parse } from 'graphql';

export default (async () => {
  try {
    // NOTE: you can import multiple files using codegen with a configuration file,
    // see the documentation here https://graphql-code-generator.com/docs/getting-started/schema-field#glob-expression
    // Use this approach only if you need to do something special.
    const files = glob.sync(
      path.join(process.cwd(), '../server/src/graphql/*.graphql'),
    );

    const schema = files.reduce((accum, file) => {
      accum += fs.readFileSync(file) + '\n';
      return accum;
    }, '');

    const outputFile = `${process.cwd()}/src/graphqlTypes.ts`;
    const config = {
      filename: outputFile,
      schema: parse(schema),
      plugins: [
        {
          typescript: {
            scalars: {
              UUID: 'string',
            },
          },
        },
      ],
      pluginMap: {
        typescript: typescriptPlugin,
      },
    };

    const output = await codegen(config);
    fs.writeFile(outputFile, output, () => {
      console.log('GraphQL types generated!');
    });
  } catch (error) {
    console.log(error);
    console.log('GraphQL types generation failed');
  }
})();
