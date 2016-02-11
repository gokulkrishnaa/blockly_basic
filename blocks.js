Blockly.Blocks['ifttt'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("IFTTT BLOCK")
    this.appendDummyInput()
        .appendField("Location:")
        .appendField(new Blockly.FieldDropdown([["HCII", "anind"], ["Synergy", "yuvraj"]]), "location");
    this.appendDummyInput()
        .appendField("Sensor Type:")
        .appendField(new Blockly.FieldDropdown([["Temperature", "temperature"], ["Humidity", "humidity"], ["Pressure", "pressure"], ["Lux", "lux"]]), "sensor_type")
        .appendField("Sensor Condition:")
        .appendField(new Blockly.FieldDropdown([["<", "less than"], ["=", "equals"], [">", "greater than"]]), "sensor_condition")
        .appendField("Sensor Value:")
        .appendField(new Blockly.FieldTextInput("Enter a value"), "sensor_value")
        .appendField(new Blockly.FieldDropdown([['Nil', 'no'] ,['AND/OR', 'and']], function(option) {
              var expandmod = (option == 'and');
              this.sourceBlock_.updateShape_(expandmod);
            }), "additional_condition");
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
    mutationToDom: function() {
        var container = document.createElement('mutation');
        var expandmod = (this.getFieldValue('additional_condition') == 'and');
        container.setAttribute('expand', expandmod);
        return container;
    },
    domToMutation: function(xmlElement) {
        var expandmod = (xmlElement.getAttribute('expand') == 'true');
        console.log(expandmod);
        this.updateShape_(expandmod);
  },
    updateShape_: function(condTrue) {
        // Add or remove a Value Input.
        if (condTrue && !isNaN(this.getFieldValue('sensor_value'))) {
            this.appendStatementInput("actuation_frame")
                .setCheck("type_actuation")
                .appendField("Actuation:");

        } 
        else {
            if(this.getInput('actuation_frame')){
                this.removeInput('actuation_frame');
            }
        }
  }

};


Blockly.Blocks['actuation_frame'] = {
  init: function() {
    this.appendValueInput("actuation")
        .setCheck("cat")
        .appendField("Enter an Actuation:");
    this.setPreviousStatement(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};