// createNewTruck = (event) => {
//     event.preventDefault();
//     let formFields = document.getElementsByTagName('input');
//     let company = formFields[0].value;
//     let capacity = formFields[1].value;
//     let location = formFields[2].value;
//     let availability = formFields[3].value;
//     $.post('localhost:3000/api/trucks', {
//         Company: company,
//         Capacity: capacity,
//         Location: location,
//         InUse: availability
//     }, () => {
//         console.log("this worked")
//     })
// }

$(document).ready(function () {
    $('form #search').on('submit', function () {
        let inputs = $('form input');
        let truck = {
            Company: inputs[0].value(),
            Capacity: inputs[1].value(),
            Location: inputs[2].value(),
            Availability: inputs[3].value()
        };
        $.ajax({
            type: 'POST',
            url: '/api/trucks',
            data: truck,
            success: function (truck) {
                location.reload();
            }
        });
        return false;
    });
});