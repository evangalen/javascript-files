window.onerror = function(errorMsg, url, lineNumber) {
  var text = document.documentElement.innerHTML;
  var lines = text.match(/^.*((\r\n|\n|\r)|$)/gm);
 
  var windowOnLoadLineNumber = null;
 
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
 
    if (line.indexOf('window.onload') === 0) {
      windowOnLoadLineNumber = i + 3;
      break;
    }
  }
 
  var actualLineNumber = lineNumber;
  if (windowOnLoadLineNumber) {
    actualLineNumber -= windowOnLoadLineNumber;
  }
  
  console.error('' + actualLineNumber + ': ' + errorMsg);
};
