let table = document.getElementById("apiTable");
fetch('https://script.google.com/macros/s/AKfycbwnCvitRB9ZjDsuF8nAuEmj-H6sBEnhgy-ADxBpk4Q981zGXGuecusySYu1e6C23MG5Hw/exec')
    .then(response => response.json())
    .then(data => {
        let apiResponse = data;
        let results = apiResponse.message.result;

        let rows = table.rows;

        for (let i = 0; i < results.length; i++) {
            if (rows[i]) {
                if (rows[i + 1].cells[1]) {
                    let lastCell = rows[i + 1].cells[4];
                    lastCell.textContent = results[i] + "分";
                } else {
                    let newCell = rows[i + 1].insertCell(4);
                    newCell.textContent = results[i] + "分";
                }
                // if (rows[i + 1].cells[2]) {
                //     let lastCell_2 = rows[i + 1].cells[2];
                //     lastCell_2.textContent = diffArr[i];
                // } else {
                //     let newCell_2 = rows[i + 1].insertCell(2);
                //     newCell_2.textContent = diffArr[i];
                // }
            } else {
                console.log("そんなはずなくない？")
            }
        }

// どうしましょ
        //for (let i = 0; i < results.length; i++) {
        //    if (rows[i]) {
        //        for (let j = 1; j <= 2; j++) {
        //            let cell = rows[i + 1].cells[j] || rows[i + 1].insertCell(j);
        //            cell.textContent = j === 1 ? results[i] : diffArr[i];
        //        }
        //    } else {
        //        console.log("そんなはずなくない？")
        //    }
        //}



    });