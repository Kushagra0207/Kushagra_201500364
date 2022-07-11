document.getElementById("my").textContent = "KUSHAGRA GUPTA";
        document.getElementById("U").textContent = "201500364";
        document.getElementById("UM").textContent = "GLA UNIVERSITY";
        window.onload = date;



        // for date kushagra code never lies

        function date() {
            var d = new Date();
            var day = "" + d.getDate(), month = "" + (d.getMonth() + 1), year = d.getFullYear();
            if (day.length < 2) day = "0" + day;
            if (month.length < 2) month = "0" + month;
            var date = day + "-" + month + "-" + year;
            document.getElementById("date").textContent = `${date}`;
        }