Blockly.JavaScript['ifttt'] = function(block) {
  var dropdown_location = block.getFieldValue('location');
  var dropdown_sensor_type = block.getFieldValue('sensor_type');
  var dropdown_sensor_condition = block.getFieldValue('sensor_condition');
  var text_sensor_value = block.getFieldValue('sensor_value');
  var add_condition = block.getFieldValue('additional_condition');
  var statements_actuation_frame = Blockly.JavaScript.statementToCode(block, 'actuation_frame');
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.body.style.backgroundColor = "#FFDD55"';
  return code;
};

Blockly.JavaScript['actuation_frame'] = function(block) {
  var value_actuation = Blockly.JavaScript.valueToCode(block, 'actuation', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

