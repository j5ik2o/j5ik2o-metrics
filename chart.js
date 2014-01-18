var options = {
	title: 'かとじゅんのメトリクス',
	width: 900,
	height: 200,
	pointSize: 8,
	series:{ 0:{targetAxisIndex:0}, 1:{targetAxisIndex:1} } ,
	hAxis: { title: '測定日時' },
	vAxes: [ { title: '体重(kg)' }, { title: '体脂肪率(%)' } ],
	legend: { position: 'bottom' }
};

google.load("visualization", "1", {'packages':['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var dataSourceUrl = 'https://docs.google.com/spreadsheet/ccc?key=0AlVz-_rs8_dPdHNjLVpzWVZ1YUVsZ0FQN0t4dzdHRkE&usp=drive_web#gid=0';
	var query = new google.visualization.Query(dataSourceUrl);
	query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
	if (response.isError()) {
		alert('Error!'+response.getMessage());
		return;
	}
	var data = response.getDataTable();
	var target = document.getElementById('chart');
	var chart = new google.visualization.LineChart(target);
	chart.draw(data, options);
}
