function add()
{
    var first_num, second_num, sum;
    first_num = parseInt(document.getElementById("num_1").value);
    second_num = parseInt(document.getElementById("num_2").value);
    sum = first_num + second_num;
    document.getElementById("answer").value = sum;
}