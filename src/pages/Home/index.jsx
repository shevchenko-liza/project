import{HomeHeader} from '../../pages/Home/Header'
import {Main} from '../../pages/Home/Main'
import {Basket} from '../Basket'
import { HeaderStyle } from '../../store/slices/header-styles/component'

import icon from '../Home/Main/photo/video.png'
export const HomePage = () => {

return(
    <div>
           <HeaderStyle height="900px" width="100%" background={`url(${icon})`} />
<HomeHeader/>
<Main/>

<Basket/>

</div>
)
}