ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.8.0/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk

const zoomMeeting = document.getElementById("zmmtg-root")
const apiKey = document.getElementById("apiPublic").value

const meetingConfig = {
  apiKey: apiKey,
  meetingNumber: document.getElementById("meetingNumber").value,
  userName: document.getElementById("userName").value,
  passWord: document.getElementById("passWord").value,
  leaveUrl: "/dashboard",
  role: 0,
  userEmail: document.getElementById("userEmail").value,
  lang: 'es-ES',
  signature: document.getElementById("signatureID").value,
  china: 0,
};

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

function beginJoin(signature) {
  ZoomMtg.init({
    leaveUrl: meetingConfig.leaveUrl,
    webEndpoint: meetingConfig.webEndpoint,
    success: function () {
      console.log(meetingConfig);
      console.log("signature", signature);
      $.i18n.reload(meetingConfig.lang);
      ZoomMtg.join({
        meetingNumber: meetingConfig.meetingNumber,
        userName: meetingConfig.userName,
        signature: signature,
        apiKey: meetingConfig.apiKey,
        userEmail: meetingConfig.userEmail,
        passWord: meetingConfig.passWord,
        success: function (res) {
          console.log("join meeting success");
          console.log("get attendeelist");
          ZoomMtg.getAttendeeslist({});
          ZoomMtg.getCurrentUser({
            success: function (res) {
              console.log("success getCurrentUser", res.result.currentUser);
            },
          });
        },
        error: function (res) {
          console.log(res);
        },
      });
    },
    error: function (res) {
      console.log(res);
    },
  });

  ZoomMtg.inMeetingServiceListener('onUserJoin', function (data) {

    console.log('inMeetingServiceListener onUserJoin', data);
  });

  ZoomMtg.inMeetingServiceListener('onUserLeave', function (data) {
    console.log('inMeetingServiceListener onUserLeave', data);
  });

  ZoomMtg.inMeetingServiceListener('onUserIsInWaitingRoom', function (data) {
    console.log('inMeetingServiceListener onUserIsInWaitingRoom', data);
  });

  ZoomMtg.inMeetingServiceListener('onMeetingStatus', function (data) {
    console.log('inMeetingServiceListener onMeetingStatus', data);
  });

}

beginJoin(meetingConfig.signature);