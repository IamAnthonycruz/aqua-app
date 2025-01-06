import React, { useEffect } from "react";
import PushNotification from "react-native-push-notification";

// Initialize push notification configuration
PushNotification.configure({
  onNotification: function (notification) {
    console.log("Notification received:", notification);
  },
  popInitialNotification: true,
});
