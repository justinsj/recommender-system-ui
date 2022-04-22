import {SECRETS} from "../secrets/secrets";

export function generateLink(userId, sessionId, taskId, interfaceId){
  return SECRETS.getFormUrl(userId, sessionId, taskId, interfaceId);
}