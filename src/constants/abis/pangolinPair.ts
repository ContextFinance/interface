import { Interface } from '@ethersproject/abi'
import { abi as IContextPairABI } from 'context-exchange-contracts/artifacts/contracts/context-core/interfaces/IContextPair.sol/IContextPair.json'

const PANGOLIN_PAIR_INTERFACE = new Interface(IContextPairABI)

export { PANGOLIN_PAIR_INTERFACE }
