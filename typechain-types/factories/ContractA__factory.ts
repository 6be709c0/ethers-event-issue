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
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "EventAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "EventAddressIndexed",
    type: "event",
  },
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
    name: "EventNumber",
    type: "event",
  },
  {
    inputs: [],
    name: "testWithEventAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testWithEventAddressIndexed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testWithMultipleEvents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "testWithNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506103c7806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063135adfc3146100515780636bd084391461005b5780637a0bbbe014610065578063dc193af114610081575b600080fd5b61005961008b565b005b6100636100d0565b005b61007f600480360381019061007a9190610228565b61017a565b005b6100896101b4565b005b3373ffffffffffffffffffffffffffffffffffffffff167f5fb7372f852a02412aa24f2a4e27824c1cba87e2a5cc05e12c4b7caa932fea5460405160405180910390a2565b7fe34497f12deb78d742c8be3a8e6850288d0d7c82782ce88e8d76e709d7486ca5610539604051610101919061029a565b60405180910390a17fe34497f12deb78d742c8be3a8e6850288d0d7c82782ce88e8d76e709d7486ca5600560405161013991906102f0565b60405180910390a17f52cb491081609a3d8c50cb8d5c1395de748f65789fc66e140e795decadd86c3033604051610170919061034c565b60405180910390a1565b7fe34497f12deb78d742c8be3a8e6850288d0d7c82782ce88e8d76e709d7486ca5816040516101a99190610376565b60405180910390a150565b7f52cb491081609a3d8c50cb8d5c1395de748f65789fc66e140e795decadd86c30336040516101e3919061034c565b60405180910390a1565b600080fd5b6000819050919050565b610205816101f2565b811461021057600080fd5b50565b600081359050610222816101fc565b92915050565b60006020828403121561023e5761023d6101ed565b5b600061024c84828501610213565b91505092915050565b6000819050919050565b6000819050919050565b600061028461027f61027a84610255565b61025f565b6101f2565b9050919050565b61029481610269565b82525050565b60006020820190506102af600083018461028b565b92915050565b6000819050919050565b60006102da6102d56102d0846102b5565b61025f565b6101f2565b9050919050565b6102ea816102bf565b82525050565b600060208201905061030560008301846102e1565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103368261030b565b9050919050565b6103468161032b565b82525050565b6000602082019050610361600083018461033d565b92915050565b610370816101f2565b82525050565b600060208201905061038b6000830184610367565b9291505056fea26469706673582212203de74f829772d9cc8a583c3ced905df134e2d36efacf87ef5dbabdf8d183ca7064736f6c63430008120033";

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
