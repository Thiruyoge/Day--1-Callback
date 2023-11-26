
(function () {
    var count = 10;
  
    function displayCountdown(callback) {
      setTimeout(function () {
        document.body.innerHTML = count;
        count--;
  
        setTimeout(function () {
          document.body.innerHTML = count;
          count--;
  
          setTimeout(function () {
            document.body.innerHTML = count;
            count--;
  
            setTimeout(function () {
              document.body.innerHTML = count;
              count--;
  
              setTimeout(function () {
                document.body.innerHTML = count;
                count--;
  
                setTimeout(function () {
                  document.body.innerHTML = count;
                  count--;
  
                  setTimeout(function () {
                    document.body.innerHTML = count;
                    count--;
  
                    setTimeout(function () {
                      document.body.innerHTML = count;
                      count--;
  
                      setTimeout(function () {
                        document.body.innerHTML = "Happy Independence Day!";
                        callback();
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }
  
    displayCountdown(function () {
      console.log("Countdown completed.");
    });
  })();
  