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
    inputs: [],
    name: "ContractA__AnyError",
    type: "error",
  },
  {
    inputs: [],
    name: "helloWorld",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50609d8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c605f76c14602d575b600080fd5b60336035565b005b6040517fd02b4e7700000000000000000000000000000000000000000000000000000000815260040160405180910390fdfea2646970667358221220cb18fa5011ceba024738a1e8a0545f8d2b82f80d92e508dfbf3fa3fd9ce9a99464736f6c63430008120033";

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
