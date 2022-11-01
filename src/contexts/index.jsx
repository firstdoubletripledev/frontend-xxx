import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useCallback,
    useEffect,
} from "react";
import { ethers } from "ethers";

const BlockchainContext = createContext();

export function useBlockchainContext() {
    return useContext(BlockchainContext);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload
    }
}
// 56  BSC
// 1   Ethereum

const INIT_STATE = {
    Loading: true,
    signer: {},
    provider: {},
    balance: "0",
    isDark: false,
    networkID: 56,
    Network: [],
};


export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const updateAll = async () => {
        // supportedNFTs.map((supportedNFT) => {
        //     updateNFTContents(supportedNFT);
        // })
    }

    /* ------------ get data ------------- */

    useEffect(() => {
        updateAll();
    }, [state.signer])



    return (
        <BlockchainContext.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        updateAll,
                        dispatch
                    }
                ],
                [state]
            )}
        >
            {children}
        </BlockchainContext.Provider>
    );
}