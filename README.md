# ethers-event-issue
Simple project to show an issue with ethersjs not firing the "on" event listener when an event is raised from a smart contract with some specifications

## Steps to reproduce the issue
- Clone the repo
- `pnpm install`
- `npx hardhat compile`
- `npx hardhat test`

Actual behavior:
```t
## Triggering test event with a number...
- Received events testWithNumber with amount: 123

## Triggering test event with an address...
- Received events testWithEventAddress with value: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

## Triggering test event with an address indexed...

## Triggering test with 2 events...
- Received events testWithNumber with amount: 1337
```

Expected Behavior:
```t
## Triggering test event with a number...
- Received events testWithNumber with amount: 123

## Triggering test event with an address...
- Received events testWithEventAddress with value: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

## Triggering test event with an address indexed...
- Received events testWithEventAddressIndexed with value: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

## Triggering test with 2 events...
- Received events testWithNumber with amount: 1337
- Received events testWithNumber with amount: 5
- Received events testWithEventAddress with value: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

```