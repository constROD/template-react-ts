/**
 * * When you add a new environment, you must add it to the list below.
 * * You must also add it to the list of environments in the .env file.
 * * You must also add it to the next.config.js file.
 */

export const STAGES = {
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;
export const STAGE_VALUES = [...Object.values(STAGES)] as const;

export const STAGE = (process.env.STAGE as typeof STAGE_VALUES[number]) || STAGES.Dev;
