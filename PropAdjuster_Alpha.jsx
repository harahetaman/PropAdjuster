function myScript(thisObj) {
    function myScript_UI(thisObj) {
      var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("panel", "FitToComp", undefined, {resizable:true, closeButton:false});
      myPanel.orientation = "column";
      
      var topGroup = myPanel.add("group", undefined, "topGroup");
      topGroup.orientation = "row";
      var plusButton = topGroup.add("button", undefined, "+");
      plusButton.size = [40, 25];
  
      var minusButton = topGroup.add("button", undefined, "-");
      minusButton.size = [40, 25];
  
      var loopText = topGroup.add("edittext", undefined, "1");
      loopText.size = [40, 25];
  
      var runButton = myPanel.add("button", undefined, "Run");
      runButton.size = [80, 25];
  
      myPanel.layout.layout(true);
      myPanel.show();
    }
  
    myScript_UI(thisObj);
  }
  myScript(this);
  