import Random from "./Random";
const Promotions = ({selectedLang, customDate}) => {

    return(
        <div className="container">
            <Random
                selectedLang={selectedLang}
                customDate={customDate}
            />
        </div>
    )
}

export default Promotions;