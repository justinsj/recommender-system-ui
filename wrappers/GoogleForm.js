import {SECRETS} from "../secrets/secrets";

export function generateInterfaceSurveyLink(userId, sessionId, taskId, interfaceId){
  return SECRETS.getFormUrl(userId, sessionId, taskId, interfaceId);
}

export function generateTaskSurveyLink(userId, sessionId, taskId){
  return SECRETS.getOverallFormUrl(userId, sessionId, taskId)
}