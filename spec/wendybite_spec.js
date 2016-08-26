var fs = require("fs");
var validator = require("w3c-css");
var html = fs.readFileSync("index.html", "utf-8");

describe("solution", function(){
  it("links to a css file", function(){
    expect(html.match("<link")).toNotBe(null);
  })
  it("uses utf-8 character encoding", function(){
    expect(html.match("utf-8")).toNotBe(null);
  })
})

describe("css", function(){
  var solution = fs.readFileSync("style.css", "utf-8");
  it("validates", function(done){
    validator.validate({text: solution}, function(err, data){
      expect(data.errors.length).toBe(0);
      done();
    })
  });
  it("uses font-family", function(){
    expect(solution.match("font-family:")).toNotBe(null);
  });
  it("uses margin", function(){
    expect(solution.match("margin")).toNotBe(null);
  });
  it("uses color", function(){
    expect(solution.match("color:")).toNotBe(null);
  });
  it("uses padding", function(){
    expect(solution.match("padding")).toNotBe(null);
  });
  it("uses border", function(){
    expect(solution.match("border")).toNotBe(null);
  });
  it("uses float", function(){
    expect(solution.match("float:")).toNotBe(null);
  });
});
