function showTable() {
    document.getElementById("resultTable").style.display = "table"; 

    let sub1 = document.getElementById("sub1").value;
    let sub1total = Number(document.getElementById("sub1total").value);
    let sub1attend = Number(document.getElementById("sub1attend").value);

    let sub2 = document.getElementById("sub2").value;
    let sub2total = Number(document.getElementById("sub2total").value);
    let sub2attend = Number(document.getElementById("sub2attend").value);

    let sub3 = document.getElementById("sub3").value;
    let sub3total = Number(document.getElementById("sub3total").value);
    let sub3attend = Number(document.getElementById("sub3attend").value);

    let sub4 = document.getElementById("sub4").value;
    let sub4total = Number(document.getElementById("sub4total").value);
    let sub4attend = Number(document.getElementById("sub4attend").value);

    let sub5 = document.getElementById("sub5").value;
    let sub5total = Number(document.getElementById("sub5total").value);
    let sub5attend = Number(document.getElementById("sub5attend").value);

    document.getElementById("sub1attendance").innerText = ((sub1attend / sub1total) * 100).toFixed(2);
    document.getElementById("sub2attendance").innerText = ((sub2attend / sub2total) * 100).toFixed(2);
    document.getElementById("sub3attendance").innerText = ((sub3attend / sub3total) * 100).toFixed(2);
    document.getElementById("sub4attendance").innerText = ((sub4attend / sub4total) * 100).toFixed(2);
    document.getElementById("sub5attendance").innerText = ((sub5attend / sub5total) * 100).toFixed(2);


    document.getElementById("resultsub1").innerText = sub1;
    document.getElementById("resultsub2").innerText = sub2;
    document.getElementById("resultsub3").innerText = sub3;
    document.getElementById("resultsub4").innerText = sub4;
    document.getElementById("resultsub5").innerText = sub5;
}

function hideTable() {
    document.getElementById("resultTable").style.display = "none";
}