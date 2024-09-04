import React from "react";
import {useSelector} from "react-redux";

export default function BannerSlider() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    return (
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className={`flex flex-col md:flex-row items-strech justify-between ${darkMode ? 'bg-gray-50' : 'bg-gray-800'}  py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12`}>
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className={`text-3xl lg:text-4xl font-semibold ${darkMode ? 'text-gray-800' : 'text-white '}`}>I-NOTEBOOK</h1>
                        <p className={`text-base lg:text-xl ${darkMode ? 'text-gray-800' : 'text-white '} mt-2`}>
                        Trusted by <span className="font-bold">2.5+</span> million journalers
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" />
                    </div>
                </div>
                <div className={`md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 ${darkMode ? 'bg-gray-50' : 'bg-gray-800'} py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center`}>
                    <div className="flex flex-col justify-center">
                        <h1 className={`text-3xl lg:text-4xl font-semibold ${darkMode ? 'text-gray-800' : 'text-white '}`}>Document Ext</h1>
                        <p className={`text-base lg:text-xl ${darkMode ? 'text-gray-800' : 'text-white '}`}>
                            Save Upto <span className="font-bold">30%</span>
                        </p>
                    </div>
                    {/*<div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-30 lg:-right-4">*/}
                    {/*    <img src={noteImage} alt="" className="md:w-20 md:h-20 lg:w-44 lg:h-40"  style={{transform: 'rotate(18deg)'}} />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}