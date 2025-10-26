'use client';
import Image from 'next/image';
const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mx-auto t-7" onClick={()=>{
            console.log('clicked');
        }}>
            <a href="#events">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="down-arrow" width={24} height={24}/>
            </a>
        </button>
    )
}
export default ExploreBtn
