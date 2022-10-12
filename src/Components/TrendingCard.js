function TrendingCard({title,description}){
    return(
        <div className={`w-full h-[402px] rounded-[18px] overflow-hidden bg-cover lg:cursor-pointer 
        ${title === "Chicago" && 'bg-chicago bg-center lg:row-span-3 lg:col-span-5 lg:h-[700px] lg:bg-center'}
        ${title === "Los Angeles" && 'bg-LA bg-left lg:row-span-4 lg:col-span-2 lg:h-[auto]'}
        ${title === "Miami" && 'bg-miami bg-center lg:row-span-2 lg:col-start-3 lg:col-span-3 lg:h-[350px]'}
        ${title === "Bali" && 'bg-bali bg-left lg:row-span-2 lg:col-start-3 lg:col-span-3 lg:h-[350px]'}
        `}>
            <div className={`ml-6 lg:flex lg:flex-col lg:items-end lg:mr-6 lg:ml-0
            ${title === "Chicago" && 'mt-12 space-y-[11px] md:mt-12 md:flex md:flex-col md:items-end md:mr-6 md:ml-0'}
            ${title === "Los Angeles" && 'mt-11 space-y-[11px]'}
            ${title === "Miami" && 'mt-11 space-y-[11px] lg:mr-[130px] lg:mt-7 lg:space-y-[6px]'}
            ${title === "Bali" && 'mt-24 space-y-[5px] lg:mr-9 lg:mt-16 lg:space-y-[32px]'}
            `}>
                <h3 className={`w-auto font-black text-[25.5px] text-white leading-8 lg:text-[30px] lg:text-end`}>{title}</h3>
                <p className={`w-[200px] text-[16.6px] font-medium  text-white text-base leading-5 lg:text-end lg:leading-7
                    ${title === "Chicago" && 'lg:w-[430px] lg:text-[25px] md:text-end'}
                    ${title === "Los Angeles" && 'lg:w-[297px] lg:text-[22px]'}
                    ${title === "Miami" && 'lg:w-[265px] lg:text-base lg:leading-5'}
                    ${title === "Bali" && 'lg:w-[235px] lg:text-base lg:leading-5'}
                `}>{description}</p>
            </div>
        </div>
    )
}

export { TrendingCard };