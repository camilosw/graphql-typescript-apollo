import { codegen } from '@graphql-codegen/core';
import { loadSchema } from '@graphql-toolkit/core';
import { UrlLoader } from '@graphql-toolkit/url-loader';
import fs from 'fs';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import { printSchema, parse } from 'graphql';

const schemaPath = 'http://localhost:4000';
const token = 'XXXXXXXXXXXXX';
const outputFile = `${process.cwd()}/src/graphqlTypes.ts`;

export default (async () => {
  try {
    const schema = await loadSchema(schemaPath, {
      loaders: [new UrlLoader()],
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const config = {
      filename: outputFile,
      schema: parse(printSchema(schema)),
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
