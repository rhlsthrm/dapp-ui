import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ercAbi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ercAbi}__
 */
export const useReadErc = /*#__PURE__*/ createUseReadContract({ abi: ercAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadErcAllowance = /*#__PURE__*/ createUseReadContract({
  abi: ercAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErcBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ercAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadErcDecimals = /*#__PURE__*/ createUseReadContract({
  abi: ercAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"name"`
 */
export const useReadErcName = /*#__PURE__*/ createUseReadContract({
  abi: ercAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadErcSymbol = /*#__PURE__*/ createUseReadContract({
  abi: ercAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErcTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ercAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ercAbi}__
 */
export const useWriteErc = /*#__PURE__*/ createUseWriteContract({ abi: ercAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteErcApprove = /*#__PURE__*/ createUseWriteContract({
  abi: ercAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErcTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: ercAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErcTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: ercAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ercAbi}__
 */
export const useSimulateErc = /*#__PURE__*/ createUseSimulateContract({
  abi: ercAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErcApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: ercAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErcTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: ercAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ercAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErcTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ercAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ercAbi}__
 */
export const useWatchErcEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ercAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ercAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErcApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ercAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ercAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErcTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ercAbi,
    eventName: 'Transfer',
  })
