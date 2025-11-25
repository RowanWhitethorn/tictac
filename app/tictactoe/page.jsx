"use client"

function Square({value}) {
      return <button > {value} </button>
}

function Board(){
        return(
        <>
        <div>
        <Square value = "X"/>
        <Square value = "X"/>
        <Square value = "X"/>
        </div>
        <div>
        <Square value = "X"/>
        <Square value = "X"/>
        <Square value = "X"/>
        </div>
        <div>
        <Square value = "X"/>
        <Square value = "X"/>
        <Square value = "X"/>
        </div>
        </>
    );  

}

export default function TicTacToePage(){
    return <Board/>
    
};
