function RecomendationCard({title,description,secondaryColor,lightTheme}){
    // Dynamic Class
    const backgroundColor = () => {
        if(lightTheme) {
            return secondaryColor ? 'bg-secondary' : 'bg-white'; 
        } else {
            return secondaryColor ? 'bg-darkCardSecondary' : 'bg-darkCardNotSecondary brightness-125';
        }
    }
    const textColor = () => {
        if(lightTheme) {
            return secondaryColor ? 'text-white' : 'text-tertiary'; 
        } else {
            return 'text-white';
        }
    }


    return(
        <div className="w-[155px] flex-none rounded-lg overflow-hidden shadow-md 
            lg:w-[277px] lg:hover:scale-105 lg:cursor-pointer lg:transition-all lg:duration-300 lg:hover:brightness-105 lg:hover:shadow-xl lg:z-0">
            <div className={`lg:h-[196px] w-full h-[110px] bg-center bg-cover 
                ${title === "Norway" && 'bg-norway'}
                ${title === "New York" && 'bg-newYork'}
                ${title === "Yosemite" && 'bg-yosemite'}
                ${title === "Seattle" && 'bg-seattle'}
                ${title === "Switzerland" && 'bg-switzerland'}
                `}></div>
            <div className={`w-full h-[77px] pt-3 pl-3 flex flex-col gap-[6.9px] lg:h-[139px] lg:pt-5 lg:pl-4 lg:gap-3 ${backgroundColor()}`}>
                <h3 className={`w-full text-[14px] leading-4 font-bold lg:text-[20px] ${textColor()}`}>{title}</h3>
                <p className={`w-3/4 text-[9px] font-medium leading-3 lg:text-sm ${textColor()}`}>{description}</p>
            </div>
        </div>
    )
}

export { RecomendationCard };