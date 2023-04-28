import { getProcessEnvParameterValue } from "./Util/getProcessEnvParameterValue";

const [_tsNodePath, _scriptPath, releaseTypeKeyValue] = process.argv;

const releaseType = getProcessEnvParameterValue(releaseTypeKeyValue);

console.log(`✅ ${releaseType} release is successfully created`);
