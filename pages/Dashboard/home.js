import React from "react";
import HighlightTrades from "../../components/HighlightTrades/HighlightTrades";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home(){
    return(
        <>
            <Sidebar />

            <div className="site--content">
                <HighlightTrades />
            </div>
        </>
    )
}