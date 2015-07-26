Picker.route('/record', function(params, req, res, next) {
  var data = {
    temperature: parseFloat(params.query.temp),
    humidity: parseFloat(params.query.humd),
  };
  console.log(data);
  var result = Recordings.insert(data);

  console.log(result + " :: " + data);

  res.end();
});

Picker.route('/settings', function(params, req, res, next) {
  var settings = Settings.findOne();
  if (settings) {
    var temp = String.fromCharCode(settings.temperature);
    var fanSpeed = String.fromCharCode(settings.fanSpeed);
    var buffer = new Buffer("*" + temp + "" + fanSpeed + "*", 'utf-8');
    res.write(buffer);
  }
  res.end();
});
