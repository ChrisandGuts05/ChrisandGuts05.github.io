(function(window, undefined) {
  var dictionary = {
    "b3a19fe0-79f0-4ad3-ad66-7174065443f8": "Restaurants",
    "2f208ed1-90be-427a-b959-2ed24e397042": "Sightseeing",
    "41292695-3ec3-4f0f-b173-1cd874084997": "Lodging",
    "b3d9aa72-160b-4a0b-bfa1-40d61a285dbd": "Entertainment",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "91d2aebe-930d-472c-bde6-9d9554722893": "Transportation",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);