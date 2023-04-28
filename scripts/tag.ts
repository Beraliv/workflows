import { getProcessEnvParameterValue } from "./Util/getProcessEnvParameterValue";

const [_tsNodePath, _scriptPath, versionKeyValue] = process.argv;

const version = getProcessEnvParameterValue(versionKeyValue);

console.log(`✅ Tag v${version} is successfully created`);
process.exit(0);
