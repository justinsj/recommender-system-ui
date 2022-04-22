export const SECRETS = {
  logUrl: 'https://e8jh0cx6wf.execute-api.us-east-2.amazonaws.com/default/LogAction',
  getFormUrl: (userId, sessionId, taskId, interfaceId) => `https://docs.google.com/forms/d/e/1FAIpQLSdjhQ8Y0JUb4Xg1Ly6zxx8NCBOHOWNoxYJMFyoJBCriFSNTpA/viewform?usp=pp_url&entry.1549906755=${userId}&entry.766909740=${sessionId}&entry.980578527=${taskId}&entry.716243612=${interfaceId}`
}