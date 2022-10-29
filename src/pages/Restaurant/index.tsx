import { Text } from './text'
import { Photo } from './photo'
import { Form } from './form/form'

import map from './photo/map.jpg'

import classes from './styles.module.scss'

export const Restaurant = () => (
    <div>
        <Photo />
        <Text />
        <Form />
        <img src={map} className={classes.map} />
    </div>
)
// export function RestKey(props:any) {
//   const key = (
//     <ul>
//       {props.restaurant.map((item:any) =>
//         <li key={item.id}>
//         </li>
//       )}
//     </ul>
//   );
//       }