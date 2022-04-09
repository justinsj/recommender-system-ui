import { Interfaces } from './../../../constants/Interfaces';
import { ControlEntry } from './ControlEntry';
import { MediumEntry } from './MediumEntry';
import { SmallEntry } from './SmallEntry';
import { LargeEntry } from './LargeEntry';

export function InterfaceWrapper(props){
  const { interfaceId } = props;
  switch (interfaceId){
    case (Interfaces.control):
      return <ControlEntry {...props}/>
    case (Interfaces.small):
      return <SmallEntry {...props}/>
    case (Interfaces.medium):
      return <MediumEntry {...props}/>
    case (Interfaces.large):
      return <LargeEntry {...props}/>
    default:
      console.error("No such interfaceId: " + interfaceId)
      return null
  }
}