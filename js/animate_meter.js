var getClass, setActive, stepTotal;

stepTotal = 100;

setActive = function(fillTo, activeClass, stepDuration, rotateFrom) {
  var i, _i, _results;
  if (activeClass == null) {
    activeClass = "active";
  }
  if (stepDuration == null) {
    stepDuration = 12;
  }
  if (rotateFrom == null) {
    rotateFrom = 50;
  }
  _results = [];
  for (i = _i = 0; 0 <= fillTo ? _i <= fillTo : _i >= fillTo; i = 0 <= fillTo ? ++_i : --_i) {
    _results.push((function(i) {
      return setTimeout(function() {
        var childIndex;
        childIndex = (rotateFrom + i) % stepTotal;
        return $(".step1").eq(childIndex).addClass(activeClass);
      }, stepDuration * i);
    })(i));
  }
  return _results;
};
setActive2 = function(fillTo, activeClass, stepDuration, rotateFrom) {
  var i, _i, _results;
  if (activeClass == null) {
    activeClass = "active";
  }
  if (stepDuration == null) {
    stepDuration = 12;
  }
  if (rotateFrom == null) {
    rotateFrom = 50;
  }
  _results = [];
  for (i = _i = 0; 0 <= fillTo ? _i <= fillTo : _i >= fillTo; i = 0 <= fillTo ? ++_i : --_i) {
    _results.push((function(i) {
      return setTimeout(function() {
        var childIndex;
        childIndex = (rotateFrom + i) % stepTotal;
        return $(".step2").eq(childIndex).addClass(activeClass);
      }, stepDuration * i);
    })(i));
  }
  return _results;
};
setActive3 = function(fillTo, activeClass, stepDuration, rotateFrom) {
  var i, _i, _results;
  if (activeClass == null) {
    activeClass = "active";
  }
  if (stepDuration == null) {
    stepDuration = 12;
  }
  if (rotateFrom == null) {
    rotateFrom = 50;
  }
  _results = [];
  for (i = _i = 0; 0 <= fillTo ? _i <= fillTo : _i >= fillTo; i = 0 <= fillTo ? ++_i : --_i) {
    _results.push((function(i) {
      return setTimeout(function() {
        var childIndex;
        childIndex = (rotateFrom + i) % stepTotal;
        return $(".step3").eq(childIndex).addClass(activeClass);
      }, stepDuration * i);
    })(i));
  }
  return _results;
};

$(function() {
  var go;
  go = function() {
    var randNum;
    $('.step1').removeClass('active');
    $('.wrapper1').removeClass('low med high');
    randNum = ~~(Math.floor(Math.random()*(33+1)));
    $(".text1").text(randNum * 10);
    setActive(randNum);
    return $(".wrapper1").addClass(getClass(randNum));
  };
  go();
  return setInterval(go, 3000);
});
$(function() {
  var go2;
  go2 = function() {
    var randNum;
    $('.step2').removeClass('active');
    $('.wrapper2').removeClass('low med high');
    randNum = ~~(Math.floor(Math.random()*(66-33+1)+33));
    $(".text2").text(randNum * 10);
    setActive2(randNum);
    return $(".wrapper2").addClass(getClass(randNum));
  };
  go2();
  return setInterval(go2, 3000);
});
$(function() {
  var go3;
  go3 = function() {
    var randNum;
    $('.step3').removeClass('active');
    $('.wrapper3').removeClass('low med high');
    randNum = ~~(Math.floor(Math.random()*(100-66+1)+66));
    $(".text3").text(randNum * 10);
    setActive3(randNum);
    return $(".wrapper3").addClass(getClass(randNum));
  };
  go3();
  return setInterval(go3, 3000);
});

getClass = function(randNum) {
  if (randNum < 33) {
    return "low";
  } else if (randNum < 66) {
    return "med";
  } else if (randNum < 100) {
    return "high";
  }
};
