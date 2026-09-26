export function getMarketStatus(schedule) {
  const now = new Date();

  const currentDay = now.toLocaleDateString('en-NG', {
    weekday: 'long'
  });

  const todaySchedule = schedule.find(
    (item) => item.day === currentDay
  );

  if (!todaySchedule) {
    return {
      isOpen: false,
      label: 'Closed today'
    };
  }

  const currentMinutes =
    now.getHours() * 60 + now.getMinutes();

  const [openHour, openMinute] =
    todaySchedule.open.split(':').map(Number);

  const [closeHour, closeMinute] =
    todaySchedule.close.split(':').map(Number);

  const openMinutes =
    openHour * 60 + openMinute;

  const closeMinutes =
    closeHour * 60 + closeMinute;

  const isOpen =
    currentMinutes >= openMinutes &&
    currentMinutes < closeMinutes;

  return {
    isOpen,
    label: isOpen ? 'Open now' : 'Closed now'
  };
}