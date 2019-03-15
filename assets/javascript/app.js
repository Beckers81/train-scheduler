$(document).ready(function () {

    var database = firebase.database();

    $("form").on("submit", function (event) {
        event.preventDefault();

        var train = {
            destination: $("#destination").val().trim(),
            trainName: $("#trainName").val().trim(),
            firsttraintime: $("#firsttraintime").val().trim(),
            frequency: $("#frequency").val().trim()



        };

        database.ref().child($("#trainName").val().trim()).set(train),
            database.ref().child($("#destination").val().trim()).set(destination),
            database.ref().child($("#firsttraintime").val().trim()).set(firsttraintime),
            database.ref().child($("#frequency").val().trim()).set(frequency)
        trainRow(train)
        alert("trainAdd")
        $('#trainName').val("");
        $('#destination').val("");
        $('#firsttraintime').val("");
        $('#frequency').val("");
    });

    function trainRow(train) {

        var tableRow = $('<tr>');
        tableRow.append('<td>' + train.trainName + '</td>' + '<td>' + train.destination + '</td>' + '<td>' + train.firsttraintime + '</td>' + '<td>' + train.frequency + '</td>')
        $('#trainsgohere').append(tableRow);



    }

    function displayDatabase() {
        for (var trainName in snapshot.val()){
            var train = {

                destination: snapshot.val()[trainName].destination,
                trainName:snapshot.val()[trainName].trainName,
                firsttraintime: $("#firsttraintime").val().trim(),
                frequency: $("#frequency").val().trim()
    
    
    
            };
trainRow(train);
        }
        

    }


    // When adding trains, administrators should be able to submit the following:

    //     * Train Name

    //     * Destination 

    //     * First Train Time -- in military time

    //     * Frequency -- in minutes

    //   * Code this app to calculate when the next train will arrive; this should be relative to the current time.

    //   * Users from many different machines must be able to view same train times.

    //   * Styling and theme are completely up to you. Get Creative!





    // don't code under this line
});