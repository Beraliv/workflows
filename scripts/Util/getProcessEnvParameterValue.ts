export const getProcessEnvParameterValue = (parameter: string) =>
  parameter.split("=")[1];
