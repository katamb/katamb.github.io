// Code based on https://stackoverflow.com/a/37901176

function bubbleSort() {
    var input = document.getElementById("input").value;
    input = input.split(",");
    var list = [];
    var swapped;

    for (var n = 0; n < input.length; n++) {
        list.push(parseInt(input[n]));
    }

    do {
        swapped = false;
        for (var i=0; i < list.length-1; i++) {
            if (list[i] > list[i+1]) {
                var temp = list[i];
                list[i] = list[i+1];
                list[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    document.getElementById("output").value = list;
}
