function formate_phone_number(number) {
  var num = number.replace(/[^0-9]/g, "");
  var carriers_json =
    '{"kenya":{"carriers":{"Safaricom":["254101","254111","254700","254701","254702","254703","254704","254705","254706","254707","254708","254709","254710","254711","254712","254713","254714","254715","254716","254717","254718","254719","254720","254721","254722","254723","254724","254725","254726","254727","254728","254729","254790","254791","254792","254793","254797","254798","254799","254740","254741","254742","254743","254745","254746","254748","254757","254759","254769"],"Airtel":["254731","254732","254733","254734","254735","254736","254737","254738","254739","254750","254751","254752","254753","254754","254755","254756","254780","254781","254785","254786","254787","254788","254789"],"Telkom":["254770","254771","254772","254773","254774","254775","254776"],"Equitel":["254763","254764","254765"],"Faiba4G":["254747"]}}}';
  var carriers = JSON.parse(carriers_json).kenya.carriers;
  var regexp = /^(?:254|\+254|0)?((7|1)([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]))$/;
  var num_regex = num.match(regexp);
  var response = {
    valid: false,
    mobile: "",
    carrier: "",
    id: "",
  };

  if (!num_regex) {
    return response;
  }

  var num_inter = "254" + num_regex[1];
  var prefix = num_inter.substring(0, 6);
  response.valid = true;
  response.mobile = num_inter;

  if (carriers.Safaricom.includes(prefix)) {
    response.carrier = "safaricom";
    response.id = 1;
  } else if (carriers.Airtel.includes(prefix)) {
    response.carrier = "airtel";
    response.id = 2;
  } else if (carriers.Telkom.includes(prefix)) {
    response.carrier = "telkom";
    response.id = 3;
  } else if (carriers.Equitel.includes(prefix)) {
    response.carrier = "equitel";
    response.id = 4;
  } else if (carriers.Faiba4G.includes(prefix)) {
    response.carrier = "faiba4g";
    response.id = 5;
  } else {
    return response;
  }
  return response;
}
