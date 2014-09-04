//define functions and global variables here...
var siteloc = "http://localhost/Activity-Sept4-";
var scriptloc = "/scripts/"

function result()
{
  $.ajax({
      url: siteloc + scriptloc + "highdef.py",
      data: {result:$("#Input Number").val()},
      success: function (res) {
                  $("p").append(res);
              }
    });
}

function result1()
{
  $.ajax({
      url: siteloc + scriptloc + "highdef1.py",
      data: {result:$("#Input Number").val()},
      success: function (res) {
                  $("p").append(res);
              }
    });
}