var data; 
var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
    function getData() {
        (localStorage.getItem('data') == null) ? setData('anggota') : false;
        $.ajax({ 
            url:  '/gen4code/data/' +  localStorage.getItem('data') + '.json', 
            dataType: 'json', async: false, dataType: 'json', 

            success: function (dt) { 
            data = dt 
            } 
        });
    }
    
    function setData(dt) {
    localStorage.setItem('data', dt);
        getData()
        // Navbar
        let lulus1 = 0;
        let lulus2 = 0;
        let lulus3 = 0;
        let lulus4 = 0;
        let lulus5 = 0;
        let lulus6 = 0;

        Object.keys(data.anggota).forEach(element => {
            if(data.anggota[element].tahap1 == "Paham"){
                lulus1 += 1;
            }
            if(data.anggota[element].tahap2 == "Paham"){
                lulus2 += 1;
            }
            if(data.anggota[element].tahap3 == "Paham"){
                lulus3 += 1;
            }
            if(data.anggota[element].tahap4 == "Paham"){
                lulus4 += 1;
            }
            if(data.anggota[element].tahap5 == "Paham"){
                lulus5 += 1;
            }
            if(data.anggota[element].tahap6 == "Paham"){
                lulus6 += 1;
            }
            $('#dataAnggota').append(`
            <tr><td> ${element-1+2} </td>
            <td class="text-left">${data.anggota[element].nama}</td>
            <td class="text-center">${data.anggota[element].tahap1 == "Paham" ? '<span class="badge badge-success">'+ data.anggota[element].tahap1 +'</span>' : '<span class="badge badge-danger">'+ data.anggota[element].tahap1 +'</span>'}</td>
            <td class="text-center">${data.anggota[element].tahap2 == "Paham" ? '<span class="badge badge-success">'+ data.anggota[element].tahap2 +'</span>' : '<span class="badge badge-danger">'+ data.anggota[element].tahap2 +'</span>'}</td>
            <td class="text-center">${data.anggota[element].tahap3 == "Paham" ? '<span class="badge badge-success">'+ data.anggota[element].tahap3 +'</span>' : '<span class="badge badge-danger">'+ data.anggota[element].tahap3 +'</span>'}</td>
            <td class="text-center">${data.anggota[element].tahap4 == "Paham" ? '<span class="badge badge-success">'+ data.anggota[element].tahap4 +'</span>' : '<span class="badge badge-danger">'+ data.anggota[element].tahap4 +'</span>'}</td>
            <td class="text-center">${data.anggota[element].tahap5 == "Paham" ? '<span class="badge badge-success">'+ data.anggota[element].tahap5 +'</span>' : '<span class="badge badge-danger">'+ data.anggota[element].tahap5 +'</span>'}</td>
            <td class="text-center">${data.anggota[element].tahap5 == "Paham" ? '<span class="badge badge-success">'+ data.anggota[element].tahap5 +'</span>' : '<span class="badge badge-danger">'+ data.anggota[element].tahap5 +'</span>'}</td>
            </tr>`)
        });
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'pie',

            // The data for our dataset
            data: {
                labels: ['Data Terinput', 'Unknown'],
                datasets: [{
                    label: '# of Votes',
                    data: [Object.keys(data.anggota).length, 20 - Object.keys(data.anggota).length],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },

            // Configuration options go here
            options: {}
        });
        var chart2 = new Chart(ctx2, {
            // The type of chart we want to create
            type: 'pie',

            // The data for our dataset
            data: {
                labels: ['Tahap 1', 'Tahap 2', 'Tahap 3', 'Tahap 4', 'Tahap 5', 'Tahap 6'],
                datasets: [{
                    label: '# of Votes',
                    data: [lulus1, lulus2, lulus3, lulus4, lulus5, lulus6],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },

            // Configuration options go here
            options: {}
        });
    }
$(document).ready(function(){
    setData('anggota');
})