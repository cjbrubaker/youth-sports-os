// script.js
// Populate tables and lists when document is ready.

$(document).ready(function() {
    // Initialize the programs table using DataTables
    const programRows = programsData.map(item => {
        return [
            item.rank,
            `<strong>${item.name}</strong>`,
            item.sports,
            item.location,
            item.ageRange,
            item.season,
            item.costRange,
            `<a href="${item.website}" target="_blank" rel="noopener">Link</a>`
        ];
    });
    $('#programsTable').DataTable({
        data: programRows,
        columns: [
            { title: 'Rank' },
            { title: 'Program Name' },
            { title: 'Sport(s)' },
            { title: 'Location' },
            { title: 'Age Range' },
            { title: 'Season' },
            { title: 'Cost Range' },
            { title: 'Website', orderable: false }
        ],
        order: [[0, 'asc']],
        lengthMenu: [5, 10, 20, 50],
        pageLength: 10
    });

    // Populate the calendar table
    const calendarRows = calendarData.map(item => {
        return [
            item.sport,
            item.season,
            item.registrationOpens,
            item.registrationDeadline
        ];
    });
    $('#calendarTable').DataTable({
        data: calendarRows,
        columns: [
            { title: 'Sport' },
            { title: 'Season' },
            { title: 'Registration Opens' },
            { title: 'Registration Deadline' }
        ],
        order: [[0, 'asc']],
        paging: false,
        searching: false
    });

    // Populate discounts list
    const discountList = $('#discountList');
    discountData.forEach(item => {
        const li = $('<li>').addClass('list-group-item');
        li.append(`<strong>${item.title}:</strong> ${item.description}`);
        discountList.append(li);
    });

    // Populate development plan
    const devContainer = $('#developmentPlan');
    developmentPlan.forEach(stage => {
        const section = $('<div>').addClass('phase');
        section.append(`<h4>${stage.phase}</h4>`);
        // Goals
        const goalsList = $('<ul>');
        stage.goals.forEach(g => goalsList.append(`<li>${g}</li>`));
        section.append('<strong>Goals:</strong>');
        section.append(goalsList);
        // Recommended sports
        const recList = $('<ul>');
        stage.recommendedSports.forEach(rec => {
            recList.append(`<li><strong>${rec.sport}</strong>: ${rec.rationale}</li>`);
        });
        section.append('<strong>Recommended Sports:</strong>');
        section.append(recList);
        devContainer.append(section);
    });

    // Populate parent guide
    const guideContainer = $('#guideContent');
    guideData.forEach(item => {
        const section = $('<div>').addClass('guide-section');
        section.append(`<h4>${item.heading}</h4>`);
        const list = $('<ul>');
        item.points.forEach(p => list.append(`<li>${p}</li>`));
        section.append(list);
        guideContainer.append(section);
    });
});

/*
 * Google Sheets integration (optional)
 *
 * This project currently uses static arrays defined in data.js. To connect
 * your own Google Sheet as the data source, follow these steps:
 *
 * 1. Create a Google Sheet with columns matching the fields used in the
 *    programsData array (e.g. Rank, Name, Sports, Location, Age Range,
 *    Season, Cost Range, Website).
 * 2. Publish the sheet to the web or make it viewable to anyone with the
 *    link. Then, use a library such as Tabletop.js, Papa Parse or a simple
 *    fetch call to retrieve the data as JSON or CSV.
 *    Example using Tabletop.js:
 *        <script src="https://unpkg.com/tabletop@1.5.3"></script>
 *        Tabletop.init({
 *          key: 'YOUR_SHEET_ID',
 *          simpleSheet: true,
 *          callback: function(data) {
 *            // Replace programsData with data from your sheet
 *            // and reinitialize the table.
 *          }
 *        });
 *
 * 3. For updating the sheet (e.g. adding new programs), use Google Forms
 *    or write custom code with the Google Sheets API. You'll need an
 *    API key and OAuth credentials to write data back to the sheet.
 */