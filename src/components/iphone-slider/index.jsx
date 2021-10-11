// IMG IMPORTS
import instagramLogo from '../../assets/instagramLogo.png'
import porfileStory from '../../assets/porfileStory.png'
import story from '../../assets/story.png'
import story2 from '../../assets/story2.png'
import story3 from '../../assets/story3.png'
import story4 from '../../assets/story4.png'
import user from '../../assets/user.png'
import rir1 from '../../assets/rir1.png'
import saveIcon from '../../assets/saveIcon.png'
import likeShareComment from '../../assets/likeShareComment.png'
import bottomBar from '../../assets/bottomBar.png'
// ICONS
import {BsBatteryFull} from 'react-icons/bs'
import {AiFillSignal, AiOutlinePlusCircle, AiOutlineHeart} from 'react-icons/ai'

// FUNCTIONAL IMPORTS
import { MobileFrame, InstaFrame } from "./styles"
import Galery from '../img-transition'


const IphoneSlider = () => {
    
    return (
        <div>
            <Galery/>
            <MobileFrame>
                <InstaFrame>
                    <div className='top'>
                        <p>9:24</p>  <span> <AiFillSignal/> <BsBatteryFull/> </span>
                    </div>

                    <div className="superior">
                        <img src={instagramLogo} alt="insta-logo" /> <span> <AiOutlinePlusCircle/> <AiOutlineHeart/></span>
                    </div>
                    <div className='story'>
                        <img src={porfileStory} alt="storys" className='main' /> <img src={story} alt="storys" /> 
                        <img src={story2} alt="storys" /> <img src={story3} alt="storys" />  <img src={story4} alt="storys" />
                    </div>
                    <div className='user'>
                        <div className='user-details'><img src={user} alt="user" /> <p>youruser</p></div> <span className="dots">...</span>
                    </div>

                    <div className='post'>
                        <img src={rir1} height="270" width="280" alt="" />
                    <span><img src={likeShareComment} alt="subs" className='subs'/></span> 
                    <span> <img src={saveIcon} alt="save" className='save'/>  </span>
                    </div>

                    <div className="bottom">
                        <img src={bottomBar} alt="bar" className='save'/> 
                    </div>

                   
                
                </InstaFrame>
            </MobileFrame>
        </div>
    )
}

export default IphoneSlider