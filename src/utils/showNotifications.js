import { notifications } from "@mantine/notifications";

const showNotification = (title = "title not found", message = "message not found", color = "green") => {
    notifications.show({
        title,
        message,
        color,
    });
};

export default showNotification