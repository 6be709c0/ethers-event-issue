/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { ContractA, ContractAInterface } from "../ContractA";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensMinted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061014e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a0712d6814610030575b600080fd5b61004a600480360381019061004591906100c1565b61004c565b005b7f772f66a00a405709c30e7f18feadcc8f123b20c09c7260165d3eec36c9f213728160405161007b91906100fd565b60405180910390a150565b600080fd5b6000819050919050565b61009e8161008b565b81146100a957600080fd5b50565b6000813590506100bb81610095565b92915050565b6000602082840312156100d7576100d6610086565b5b60006100e5848285016100ac565b91505092915050565b6100f78161008b565b82525050565b600060208201905061011260008301846100ee565b9291505056fea264697066735822122004a74e45206c5b9fcef9d032b58b54c2313ee826df8abf43f26ce69075c0dd6f64736f6c63430008120033";

type ContractAConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractAConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractA__factory extends ContractFactory {
  constructor(...args: ContractAConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ContractA & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ContractA__factory {
    return super.connect(runner) as ContractA__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractAInterface {
    return new Interface(_abi) as ContractAInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ContractA {
    return new Contract(address, _abi, runner) as unknown as ContractA;
  }
}