require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAI5u*lqphdqIXAQAAH8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3ptY0RRQCI6YgGRixdExFY29qGEAkq5VhUqTvjvG9jT0*OwO9vLU1GXkyfznMzvoCgxRXPUAvk7qAi+QIa6JWsrBGSgNnGMCOiBCDIIZFAvhPW44t+St*5WlNS8fNng3Wi39rf52Go9FNjJ2+ycq9mOewWPHqiaY4bD3wAON+h8MPbH*shWj9Kkz7Gi1lLbDmN3eEB+2EIHnsjyECsdYIcIMcFFolcpyhGB2Ry1a4jJ1+i*OPgSHGdX3F+e9PK0mc+4K78XhZC3R3k2o9zY6QuBrkm78Gv0bXUxsFQhmKmKwtUpNiLjICiToJ+tdjtqTs*FeQ6rZoVU5Z0+xUmBIitCBcOs*XLdrcWFHy8YGkTajg9vlTI*NXTiVSy6MZ3HZm7P7BRO8W1Wfo34Rm196qa8MoCb5eiFuwdDXyppdROPiybkPN9GxZVY7cYc*Up8TT68cv5fdV*NvfM08i*71cXlVkG1d2dGOEQtfy*zoH1pLWdxjG++OXS*Rh8PsbibJwHkwr66NpbYt2Z3yxLN*o3PdkYSoXrrzR2s4Osnfcga8juWiMamdFp63FTfCnUjmff9ZWOMTrdqxE*70rEsbb2cCGfv6tZOdl36m*DqIMdwmzxcnQ88yarBm6D2K5Gcyv5CmhXD4HR9fWZ0Rq0VAXnw6AGCEkwZgQyXxXNPknoARhcPhQSxZ3lBeZLcm71A6nlgUX2vucgQ7H5t1CnTvDShErkqy426DVXpFfRARcoQUYoiE1NWknaJKIUJokD+868eKNCNvQvXheMHPRBjQplfNFVWwuhD1Y9DGIZlUzCvLUKtWyACZO5zGzGGi4R2dWwKSMIUX5CWQkaBHMOMop8ZIoIiIDPSoJ9dq5VRV3h97y7dgTkGPZA*BcFRNwrGI3E4FiR+IA3l4eQP+u3awcKq+lYgBnqggN1tYMAcHcsW9ED2fDcYD8SJyI*EyYCfDEbd0+7g8ZNyFyFCDOKMAhloS+eeVspUt49mvXQNQ9ETRUsU8Jnih1fetVDhtSGKs1pVYU6hKQhmVL6QtEASszKfS3aitxQcca16*us*gAAZ7Ib5*Cp5uW8Ktq3TxCRi29wMLp0fD0p7i1fm0PUD4RJwl2zE8dswQm5o7bBd33R7Gsd7Khw3Ur*ah76Ibs7EO+BGS167aBG64BD9GozLZmKIVKteT0xPLQ*+vE7raauVs12z3q+nWaLXur8w7+ItXJL13Vbbfuy4TYy8dpkrvqGlm3NwP9pC5aar+yLhF23qvrv42UXZj+mFn*7qxOt+Y4yew+CHSP8p5jvxznPco*cLxo*x8i8tqrpvdFFfp6ct3NvESF+alIfrehTwl4Vn71bWDHEn59Tcr34GHo+*eqDKIItLkgMZ0PwIQQ+QsukcbBVx+ZtImpJYevKedgYpUz67YotzRBnMKyAPxDEvSfx4NH6*tSZlZUKaAhms385jtXN4q1SVxyD76DGgdN9CcMDjb1BLAQIUAxQAAAgIAI5u*lqphdqIXAQAAH8HAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIQEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254725683182',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'MD3395,
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
