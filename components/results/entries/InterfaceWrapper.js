import {Interfaces} from './../../../constants/Interfaces';
import {ControlEntry} from './ControlEntry';
import {LargeLongEntry} from "./LargeLongEntry";
import {LargeShortEntry} from "./LargeShortEntry";
import {SmallLongEntry} from "./SmallLongEntry";
import {SmallShortEntry} from "./SmallShortEntry";

export function InterfaceWrapper(props) {
  /*
  This wrapper changes the returned prop based on interfaceId.
  */
  const {interfaceId} = props;
  switch (interfaceId) {
    case (Interfaces.control):
      return <ControlEntry {...props}/>
    case (Interfaces.small_short):
      return <SmallShortEntry {...props}/>
    case (Interfaces.large_short):
      return <LargeShortEntry {...props}/>
    case (Interfaces.small_long):
      return <SmallLongEntry {...props}/>
    case (Interfaces.large_long):
      return <LargeLongEntry {...props}/>
    default:
      console.error("No such interfaceId: " + interfaceId)
      return null
  }
}