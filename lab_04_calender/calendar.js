document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar-container');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function generateCalendar(year) {
        for (let month = 0; month < 12; month++) {
            // Create a new Date object for the first day of the month
            let date = new Date(year, month, 1);
            let firstDayIndex = date.getDay();

            // Get the number of days in the month
            let daysInMonth = new Date(year, month + 1, 0).getDate();

            // Create month container
            let monthDiv = document.createElement('div');
            monthDiv.classList.add('month');

            // Add month name
            let monthName = document.createElement('h3');
            monthName.textContent = monthNames[month];
            monthDiv.appendChild(monthName);

            // Create the calendar grid
            let calendarGrid = document.createElement('div');
            calendarGrid.classList.add('calendar');

            // Add the day headers
            dayNames.forEach(day => {
                let header = document.createElement('div');
                header.classList.add('header');
                header.textContent = day;
                calendarGrid.appendChild(header);
            });

            // Add blank days for the first week
            for (let i = 0; i < firstDayIndex; i++) {
                let blankDay = document.createElement('div');
                blankDay.classList.add('day');
                calendarGrid.appendChild(blankDay);
            }

            // Add the days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                let dayDiv = document.createElement('div');
                dayDiv.classList.add('day');
                dayDiv.textContent = day;
                calendarGrid.appendChild(dayDiv);
            }

            // Append the calendar grid to the month div
            monthDiv.appendChild(calendarGrid);

            // Append the month div to the calendar container
            calendarContainer.appendChild(monthDiv);
        }
    }

    generateCalendar(new Date().getFullYear());
});
