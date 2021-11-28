# Context Interface

An open source interface for Context -- a community-driven decentralized exchange for Avalanche and Ethereum assets with fast settlement, low transaction fees, and a democratic distribution -- powered by Avalanche.

- Interface: [context.finance](https://context.finance)
- Discord: [Context](https://discord.gg/P9Jzt9pbxM)
- Twitter: [@ContextFinance](https://twitter.com/ContextFinance)

## Accessing the Context Interface

Visit [context.finance](https://context.finance).

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to your JSON-RPC provider

Note that the interface only works on testnets where both
[Context](https://github.com/ContextFinance/exchange-contracts) and
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Attribution

This code was adapted from this Pangolin repo: [pangolin-interface](https://github.com/ContextFinance/interface).
