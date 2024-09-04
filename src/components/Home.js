import React , {useContext, useEffect} from "react";
import BannerSlider from "./BannerSlider";
import NoteForm from "./NoteForm";

export default function Home(){
    return(
        <div>
            {/* {`This is me ${state.name}`} */}
            <BannerSlider/>
        </div>
    )
}