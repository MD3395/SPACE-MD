require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAANq*lqVeeepXAQAAH8HAAAKAAAAY3JlZHMuanNvbpVV27KiOBT9l7xqNSCgaNWpGq6KF0QREaf6IUKAKAKGAGKX*97FufTph5meMzyFXPZee621kx8gy3GJFqgFkx+gILiGFHVD2hYITIBSRREioA9CSCGYAFVe62eMzqjML8MD6c2bubZnYFxvH7uzrp0Xc4O2bGyu9uYLePZBUZ1SHPwh4GjrHB17Ppgfmu2UXRqLTY+MAs8beOIlXx2Lg2A+zJ52a7nNC3h2ESEmOIv1IkFXRGC6QK0NMfkafMGujCE5UmN8mqp2fFqI00WyNWx*5+atN7bR4MqgLb9nDf1r8D31LtQ+p3ja0upVsuFR*Ty+BL5KN8o1jszReokXs*tilL7DL3GcodAMUUYxbb*M+20mbG11OL7WMTMe6Itpa2N9qdyNPTNs9vodbk9jQ7myU271NeDn+c4M80sTpZgEZcPXQrZm1sMHH9fLjftgmpVVCb1cPrv+78Bt8uGVy**hPbal9eHkJkxbo42ss8GuVxayeJqz8bGZwsdDUq85PbAGF38NvuAo6k4IGrto7z33lMzc4UOMzci53AQH09rDvsKsUG0OLp*wIa3In1BiT4+ijWrqIl3WnCwbSwPqkbrnmTa99TRo9PYhg9yKkdDqNKYpyoxWmDmuTPeaK56VJhkfPYurT7usR3Ufyv6GS+KX14ouqDVDMOGefUBQjEtKIMV51s0N+FEfwLB2UEAQfaUXqI98yMK908I6lY7KZcuu7mtva5FmV0qM5y0coiHSZjdRfgF9UJA8QGWJwhkuaU7aFSpLGKMSTP7+3gcZutM34bp0PNcHESYldbOqSHMYfqj6sQiDIK8y6rRZoHYDRMCE*ZxGlOIsLjseqwySIME1UhNISzCJYFqiXxUigkIwoaRCv7pWzcOOeG6241e+vgd9cH0VBIdgAgaiMBqIQ4nnpMFkIP1Vfmu6sLAovmWIgj7IYLcbTOEVnfIW9EH6eo4TudF4xAujMcePOaE72i08f0HuMoSIQpyWHbWrxSMpZE03r4PbajOdym4sq7EMPkv88MqbFgpsKiKvLasIriWcDYezMO+RJEMSNVOXjfcjZzVcj2zFcV*+IQiYAKLSk7N0tCUcK+rZlsxikNbtGoVb31snqcNoGyeWguEYIVdZzGxb0fiLGHM+WQmSqzFHzqfRVqjZpDAFi61k38y15qXLFqIaB+j3ZLoTpvJcSDZWmeyqe4SR1csriI7zoLhhcSRVpu8njRi6W59oCdr2zhoXWJbT5ka+vxn7WRYcQuY2O1SidV*4unUP8LuLX7sofb+98Ku*OvG63wij18vgXaT*FPMNeOc59tn*Lcb79fIvLapsvHJ5a7TzDh7mZJr0qoSH9k048vXSme8t00DseX2uHo2bgufzex8UKaRRTq5gAsrrCYI+IHnVOdjMovyPL11s6u9lp7Ck8mdX7PAVlRReCzDhRiIvSRwvjt522SQvZrBMwATY3kVUOoe3clE4FNKPHgNy9y2Ha*D8CVBLAQIUAxQAAAgIAANq*lqVeeepXAQAAH8HAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIQEAAAAAA==',
  
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
