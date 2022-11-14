let sout,i,j;
sout = "<table border = '1' width = '300' cellpadding = '3' cellspađing = '0'>";
for (i = 1; i < 10; i++) {
    sout = sout + "<tr>";
    for (j = 2; j<10; j++) {
        sout = sout + "<td>" + j + "*" + i + "=" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}    
document.write(sout);