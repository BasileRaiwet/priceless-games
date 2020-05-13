import { store } from 'react-notifications-component';

export const addNotif = (title) => {
    store.addNotification({
        title: `${title} is add to your favorite list`,
        message: " ",
        type: "info",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: false
        }
      });
}

export const removedNotif = (title) => {
    store.addNotification({
        title: `${title} is removed`,
        message: " ",
        type: "warning",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: false
        }
      });
}