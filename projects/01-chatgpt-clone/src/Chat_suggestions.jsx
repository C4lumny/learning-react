export function Chat_suggestions({mainText, subText}){
    return(
        <div className="gpt-suggestionsCard">
            <span className="gptSuggestions-strongText">
                {mainText}
            </span>
            <span className="gptSuggestions-weakText">
                {subText}
            </span>
        </div>
    );
}