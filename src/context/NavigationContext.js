"use client"
import { createContext, useContext, useState, useEffect } from "react"

const TabContext = createContext();

export function TabProvider({ children }) {
    const [selectedTab, setSelectedTab] = useState("")

    useEffect(() => {
        const tab = sessionStorage.getItem("tab");
        if (tab) {
            setSelectedTab(tab);
        } else {
            setSelectedTab("hero")
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem("tab", selectedTab);
    }, [selectedTab])

    return (
        <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
            {children}
        </TabContext.Provider>
    )
}

export function useTab() {
    return useContext(TabContext);
}