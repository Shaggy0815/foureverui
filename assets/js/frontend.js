// inital version Shaggy0815 2024-10-07
//var definitions for API
var API = 'https://pool.anokas.tech/api/v2/Pool-Anokas/';
var current = 'current';
var historical ='historical';

// Function used to load overview statistics
function loadOverviewStatistics() {
	return $.ajax(API + current + '/ports') // async get call from from jQuery .done will wait for execution
		.done(function (response) {
		// Check if the response body contains data
            if (response.body && response.body.length > 0) {
                // Loop through the bodyinfo array
                $.each(response.body, function (index, bodyinfo) {
			//for debugging console log extracted informations
			console.log("Port: ", bodyinfo.port);
			console.log("Enabled: ", bodyinfo.enabled);
			console.log("TLS: ", bodyinfo.tls);
			console.log("Difficulty (initial): ", bodyinfo.difficulty.initial);
			console.log("Difficulty (minimum): ", bodyinfo.difficulty.minimum);
			console.log("Difficulty (maximum): ", bodyinfo.difficulty.maximum);
			console.log("Target Time: ", bodyinfo.difficulty.targetTime);
			console.log("Retarget Time: ", bodyinfo.difficulty.retargetTime);
			console.log("Variance: ", bodyinfo.difficulty.variance);

			// updateing HTML elements
			$('#port').text(bodyinfo.port);
			$('#enabled').text(bodyinfo.enabled ? 'Yes' : 'No');
			$('#tls').text(bodyinfo.tls ? 'Yes' : 'No');
			$('#initial_difficulty').text(bodyinfo.difficulty.initial);
                });
            } else {
                console.log("No port information available.");
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching data: ", textStatus, errorThrown);
        });
}

