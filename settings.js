require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAHw+*VobXEDWWwQAAH4HAAAKAAAAY3JlZHMuanNvbpVU2ZKiSBT9l3zVaEBkkYiKGEBlUXBBwHKiH1JIIZVNMhGpDv+9g1q6+mGmp4anJJd7zr3n3PsDFCUmaIE6oPwAVY1vkKJ+SbsKAQVozemEajAEMaQQKKAxjWuhL9WrU9RBKUcWcxjIXDi720a70NitKe2PBdI8On9+Ao8hqJpjhqM*BDQjYyqGFTNjtuuBHWYrl9zsRB*AyGu3p+rkrhYLi2udICRP4NFHhLjGRTKrUpSjGmYL1K0hrr9GPzGWV1dMHFo4eroWk42v0fuzJNPJZXlYhvXpADF*8s638Iv05WUabpMaLrUSjxjeTlx9yhwks9DELYMO2AsGhsMFNRvKb*QJTgoUWzEqKKbdl+vOGpOFaZdaMXhZPdtbf5w4x6ubaAUzTzaTuR6jOL3oki*k7NeIs5jC4r7DZ*O+zk*pZS*wxAuskSAGe7seyevnLI3Ewjb86Hfi6*rDK5f*U*fGku+His2xqXqQdFPvqgW6ITYnumSOcz+W3Uzbz+uZz2++Rv9Iw3nZ+MxgM26OxzZSc3aXumKEO*nAsZc422xYi1+UHJ980oe0qf*EkuFvoSnjVCRlSm5mMD9UuWRMxQaPj8fVsTgQNjLPZCQS626cdpzn68y5ahkG7mdBY7r6fpm0y0Cfzw*MnTc2*i7Wtc3Ta0YX1FkxULjHENQowYTWkOKy6PdGwhDA+OahqEb0tbogEMoJZ9pd7vDiJGTZdpvvY2bwEnYWu+XagzGJrk5kN1PXegJDUNVlhAhBsYkJLevOQYTABBGg*P19CAp0p2+69Wg8NwQnXBPqF02VlTD+EPXjEEZR2RTU64pI7xeoBgr7uY0oxUVC+jI2BayjFN+QnkJKgHKCGUG*EkQ1ioFC6wb9alq9jPu6O*ZMGE0cEQxB*qoHjoECRsJYGgmizHPySBmJf5FvbR8WVtW3AlEwBAXsbwMD5uhYdmAIstd3nMBJE4kfSxOOn3Dj*ml*8PhFuUeIEYU4I0ABurN4SSt1OrOXUhltDEN1ElVPVPCZ4odV3rTQYNvU6sp1qygn0BRFMy4HdVogmVqZzyaB5DniSlprnv*0D0GAAmxWfNnFbcWYEJasNIC+Ed0LfHfb44122BDuDo9fkt1MmhwQcdXa3W2rebGvMHNFwllLZDEwxPlmcFRLoy0YZqzKWvvUo8XohiP0Oxj1Rb29OIWMtCTxzf3lpXuWw8w7J1NuznNr*vIcIDd0je0+SRKeyQdNsBtNl5mNLjC2txF7tjbadXy9mH5WxpmBXF5N3kz82kTZ+*DCr*7qxet*Txi9zoJ3kf5TzDfivefYx*C3GO*T5V86VNuEZHltp+cd3Nu1kQ6alIfr6*jA35aeHbjWHLHn1bl5af0MPB7fh6DKID2VdQ4UQPIjBENQl03vYKs4lX9A0tXEmr2nnUFC1c+u2OEcEQrzCiicJPCSJAjs5O3Wui4rE5IUKGAdXgStd3inVpVHIf3oMaD231JcgcdPUEsBAhQDFAAACAgAfD79WhtcQNZbBAAAfgcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAgwQAAAAA',
  
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
