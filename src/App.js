import { useState,useRef } from "react";
import { RecomendationCard } from "./Components/RecomendationCard";
import { TrendingCard } from "./Components/TrendingCard";

import moonIcon from './assets/moon-vector-light.svg';
import sunIcon from './assets/sun.svg';
import searchIconLight from './assets/search-loop-light.svg';
import searchIconDark from './assets/search-loop-dark.svg';

function App() {
  // STATES
  const [lightTheme,setLightTheme] = useState(true);

  //REFS
  const locationsRef = useRef();
  const staysRef = useRef();
  const faqsRef = useRef();
  const aboutUsRef = useRef();

  //FUNCTIONS
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

  return (
    <div className={`w-full h-full ${!lightTheme && 'bg-darkTheme'}`}>
      {/* Desktop NavBar */}
      <nav className={`hidden z-10 fixed shadow-lg h-[73px] pl-6 pr-16 top-0 w-full justify-between items-center lg:flex ${lightTheme ? 'bg-white' : 'bg-darkTheme'}`}>
        <p className={`text-lg font-bold leading-5 ${lightTheme ? 'text-primary' : 'text-white'}`}>Travel agency</p>
        <ul className="flex gap-12">
          <li onClick={() => scrollTo(locationsRef)} className={`text-lg pb-px font-bold leading-5 cursor-pointer hover:border-b-4 hover:mb-[-4px] ${lightTheme ? 'text-primary border-primary' : 'text-white'}`}>Locations</li>
          <li onClick={() => scrollTo(staysRef)} className={`text-lg pb-px font-bold leading-5 cursor-pointer hover:border-b-4 mb-[-4px] ${lightTheme ? 'text-primary border-primary' : 'text-white'}`}>Stays</li>
          <li onClick={() => scrollTo(faqsRef)} className={`text-lg pb-px font-bold leading-5 cursor-pointer hover:border-b-4 mb-[-4px] ${lightTheme ? 'text-primary border-primary' : 'text-white'}`}>FAQS</li>
          <li onClick={() => scrollTo(aboutUsRef)} className={`text-lg pb-px font-bold leading-5 cursor-pointer hover:border-b-4 mb-[-4px] ${lightTheme ? 'text-primary border-primary' : 'text-white'}`}>About Us</li>
        </ul>
        <div className="flex gap-4">
          <img className={`p-2 rounded-full cursor-pointer ${lightTheme ? 'hover:bg-gray-200' : 'hover:bg-gray-700'}`} src={lightTheme ? searchIconLight : searchIconDark} alt="Search icon"/>
          <img onClick={() => setLightTheme(!lightTheme)} className={`p-2 rounded-full cursor-pointer ${lightTheme ? 'hover:bg-gray-200' : 'hover:bg-gray-700'}`} src={lightTheme ? moonIcon : sunIcon} alt="Theme icon"/>
          <svg className={`cursor-pointer transition-all duration-300 ${lightTheme ? 'fill-footer hover:fill-black' : 'fill-white hover:fill-primary'}`} width="15" viewBox="0 0 22 25">
            <path xmlns="http://www.w3.org/2000/svg" d="M2.22261 16.379C3.75597 14.1651 6.47161 12.5 10.9998 12.5C15.528 12.5 18.2437 14.1651 19.777 16.379C21.259 18.5187 21.495 20.9711 21.4997 22.3281C21.5045 23.6927 20.3999 24.5834 19.2675 24.5834H2.73218C1.59972 24.5834 0.495154 23.6927 0.499893 22.3281C0.504606 20.9711 0.740644 18.5187 2.22261 16.379Z"/>
            <path d="M10.9999 10.0834C13.5773 10.0834 15.6666 7.9194 15.6666 5.25002C15.6666 2.58064 13.5773 0.416687 10.9999 0.416687C8.42261 0.416687 6.33327 2.58064 6.33327 5.25002C6.33327 7.9194 8.42261 10.0834 10.9999 10.0834Z"/>
          </svg>
        </div>
      </nav>
      <header className="w-full h-[490px] flex-col p-6 bg-sanFrancisco bg-center bg-cover 
        lg:bg-sanFranciscoDesktop lg:h-screen lg:pl-20">
        {/* Theme button */}
        <div class="lg:hidden w-full flex justify-end">
          <button onClick={() => setLightTheme(!lightTheme)} class={`w-14 h-8 flex justify-center items-center rounded-full ${lightTheme ? 'bg-white' : 'bg-darkTheme'}`}>
            <img className="w-4 h-4" src={lightTheme ? moonIcon : sunIcon} alt="Theme icon"/>
          </button>
        </div>
        {/* Search bar */}
        <div className={`lg:hidden w-full h-[50px] mt-5 pl-[100px] flex items-center gap-1 rounded-full shadow-md ${lightTheme ? 'bg-white' : 'bg-darkTheme'}`}>
          <img src={lightTheme ? searchIconLight : searchIconDark} alt="Search icon"/>
          <input className={`text-[15px] focus:outline-0 bg-transparent ${!lightTheme && 'text-white'}`}/>
        </div>
        {/* Desktop title */}
        <div className={`hidden w-[404px]
          lg:block lg:mt-[233px]`}>
          <p className={`text-4xl font-bold leading-10 text-black `}>Find More Locations Like This</p>
        </div>
        {/* Explore button */}
        <div className="w-full mt-64 flex justify-center
          lg:justify-start lg:mt-11">
          <button onClick={() => scrollTo(locationsRef)} className={`w-48 h-12 flex justify-center items-center text-base font-semibold rounded-full transition-all duration-300 lg:hover:bg-primary lg:hover:text-white ${lightTheme ? 'bg-white text-primary' : 'bg-darkTheme text-white'}`}>Explore More</button>
        </div>
      </header>
      <main>
        {/* Recomendations Section */}
        <div className="w-full pl-4 flex flex-col justify-start" ref={locationsRef}>
          <h2 className={`text-2xl py-7 font-semibold lg:text-3xl lg:pt-20 lg:pl-8 ${lightTheme ? 'text-primary' : 'text-white'}`}>Our Recomendations</h2>
          <section className="flex gap-5 pr-4 overflow-x-auto overscroll-x-contain lg:py-4 lg:pl-8 lg:gap-12">
            <RecomendationCard title={"Norway"} description={"Beautiful landscapes"} secondaryColor={true} lightTheme={lightTheme}/>
            <RecomendationCard title={"New York"} description={"Concrete jungle"} secondaryColor={false} lightTheme={lightTheme}/>
            <RecomendationCard title={"Yosemite"} description={"A break from the world"} secondaryColor={true} lightTheme={lightTheme}/>
            <RecomendationCard title={"Seattle"} description={"Big City"} secondaryColor={false} lightTheme={lightTheme}/>
            <RecomendationCard title={"Switzerland"} description={"Big City"} secondaryColor={true} lightTheme={lightTheme}/>
          </section>
        </div>
        {/* Trending Stays */}
        <div className="w-full flex flex-col justify-start" ref={staysRef}>
          <h2 className={`text-2xl pl-4 pt-7 pb-5 font-semibold lg:text-3xl lg:pl-12 lg:pt-20 ${lightTheme ? 'text-primary' : 'text-white'}`}>Trending Stays</h2>
          <section className="grid px-7 gap-[38px] lg:px-11
            lg:grid-cols-5 lg:grid-rows-7 lg:gap-6 lg:h-auto">
            <TrendingCard title={"Chicago"} description={"2 rooms, bathroom and kitchen."}/>
            <TrendingCard title={"Los Angeles"} description={"4 rooms, 3 bathrooms, kitchen and private pool."}/>
            <TrendingCard title={"Miami"} description={"3 rooms, 2 bathrooms, kitchen and amazing sea view."}/>
            <TrendingCard title={"Bali"} description={"2 rooms, 2 bathrooms, kitchen and private pool."}/>
          </section>
        </div>
        {/* FAQs */}
        <div className="w-full pb-[52px] lg:pb-[73px]" ref={faqsRef}>
          <h2 className={`text-2xl pl-7 pt-[42px] pb-5 font-bold lg:text-3xl lg:pt-20 lg:pb-[41px] lg:pl-10 ${lightTheme ? 'text-primary' : 'text-white'}`}>FAQs</h2>
          <section className="w-full px-[30.6px] space-y-[11px] lg:space-y-[35px] lg:pl-10">
            <div className="w-full space-y-[7px] lg:space-y-[10px]">
              <h4 className={`text-base font-semibold leading-5 lg:text-[25px] lg:leading-10 ${lightTheme ? 'text-primary' : 'text-white'}`}>Payment Methods</h4>
              <p className={`w-full text-xs font-medium leading-4 lg:text-[20px] lg:leading-6 lg:w-[900px] ${lightTheme ? 'text-black' : 'text-FAQDarkMode'}`}>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>
            <div className="w-full space-y-[7px] lg:space-y-[10px]">
              <h4 className={`text-base font-semibold leading-5 lg:text-[25px] lg:leading-10 ${lightTheme ? 'text-primary' : 'text-white'}`}>Cancellation Policy</h4>
              <p className={`w-full text-xs font-medium leading-4 lg:text-[20px] lg:leading-6 lg:w-[900px] ${lightTheme ? 'text-black' : 'text-FAQDarkMode'}`}> If you are unable to attend, you are free to send someone else in your place, but we would appreciate knowing in advance</p>
            </div>
            <div className="w-full space-y-[7px] lg:space-y-[10px]">
              <h4 className={`text-base font-semibold leading-5 lg:text-[25px] lg:leading-10 ${lightTheme ? 'text-primary' : 'text-white'}`}>Long Stays</h4>
              <p className={`w-full text-xs font-medium leading-4 lg:text-[20px] lg:leading-6 lg:w-[900px] ${lightTheme ? 'text-black' : 'text-FAQDarkMode'}`}>You can also design your long stay with whatever services you require: breakfasts, dinners, transport, tours, welcome merchandising, co-working areas, among others.</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full pt-[15px] pl-5 pb-[33px] bg-footer border-y border-solid space-y-[16px] lg:pl-10" ref={aboutUsRef}>
        <h2 className="w-full text-lg font-semibold text-footer lg:text-[25px]">About Us</h2>
        <section className="space-y-[12px]">
          <p className="text-sm font-medium text-footer lg:text-base lg:hover:text-tertiary lg:cursor-pointer">Investors</p>
          <p className="text-sm font-medium text-footer lg:text-base lg:hover:text-tertiary lg:cursor-pointer">Jobs</ p>
          <p className="text-sm font-medium text-footer lg:text-base lg:hover:text-tertiary lg:cursor-pointer">Privacy policy</p>
          <p className="text-sm font-medium text-footer lg:text-base lg:hover:text-tertiary lg:cursor-pointer">Terms and Conditions</p>
          <p className="text-sm font-medium text-footer lg:text-base lg:hover:text-tertiary lg:cursor-pointer">Platzi Travel, inc</p>
          <p className="text-sm font-medium text-footer lg:text-base lg:hover:text-tertiary lg:cursor-pointer">Follow Us</p>
        </section>
        <section className="w-full flex gap-[10px]">
          <svg className={`fill-footer hover:fill-blue-500 cursor-pointer w-6 lg:w-8`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
            <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/>
          </svg>
          <svg className={`fill-footer hover:fill-red-500 cursor-pointer w-6 lg:w-8`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
          </svg>
        </section>
      </footer>
    </div>
  );
}

export default App;
