## The Long Night

A decentralized platform enables the bettors to use Ether and betting can be made all over the world within the blockchain platform. Since our app is using GSN contracts there won't be any gas fee charged (like in the ethereum platform) from the players. The payouts are done by the smart contracts so more liquidity will be there
In our game,

The admin, himself, is responsible for paying the gas cost of the players.
The players don’t need to pay for the gas for any transaction here.

## Why Matic?

# High Scalability

# Highly fast transactions

# Awesome user experience.

Video Url: https://www.youtube.com/watch?v=cu4QTft5Jbo

## Steps:

1 . npm install
2 . npx gsn deploy --network https://rpc-mumbai.matic.today --mnemonic ./wallet.txt --from 0x67Cf1dc639746Ca6d0436AA44EF53f9ec5aBd5a8

Deployed GSN to network: https://rpc-mumbai.matic.today

RelayHub: 0xa21c4149cC64EF91A7BC82fA1325C1C1c584647F
StakeManager: 0xD06708FD0f133cC2483523510D05325CCb7Be7CA
Penalizer: 0x758281069E33A0e80AcBCC7b5621C8622D9B3a56
TrustedForwarder: 0x554CB95b183116360233c54e7C777b38678Ce7BE
Paymaster (Default): 0x1FF43F11868eC96b6aA7de46a3b2EFCbf014dac6

3 . npx gsn paymaster-fund --network https://rpc-mumbai.matic.today--mnemonic ./wallet.txt --from 0x67Cf1dc639746Ca6d0436AA44EF53f9ec5aBd5a8
4 . npx gsn relayer-run --Workdir ./ --DevMode --RelayHubAddress 0xa21c4149cC64EF91A7BC82fA1325C1C1c584647F --network https://rpc-mumbai.matic.today --mnemonic ./wallet.txt --from 0x67Cf1dc639746Ca6d0436AA44EF53f9ec5aBd5a8

5 . npx gsn relayer-register --network https://rpc-mumbai.matic.today --mnemonic ./wallet.txt --from 0x67Cf1dc639746Ca6d0436AA44EF53f9ec5aBd5a8

6 . truffle migrate --reset --network matic

7 . npm run pack

8 . npm start
