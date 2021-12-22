import { createContext, useContext, useState } from "react";

const initialData = {
    ModalBackPackOpened: false,
    setData: null
};

const BackPackContext = createContext();

function BackPackProvider({ children }) {
    const [data, setData] = useState(initialData);

    return (
        <BackPackContext.Provider
            value={{
                ModalBackPackOpened: data.ModalBackPackOpened,
                setData
            }}
        >
            {children}
        </BackPackContext.Provider>
    );
}

function useBackPack() {
    const context = useContext(BackPackContext);

    return context;
}

export { BackPackProvider, useBackPack };