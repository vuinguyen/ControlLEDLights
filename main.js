/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console

var GreenLED = new mraa.Gpio(5); 
GreenLED.dir(mraa.DIR_OUT); //set the gpio direction to output 

var RedLED = new mraa.Gpio(6); 
RedLED.dir(mraa.DIR_OUT);   //set the gpio direction to output 

var BlueLED = new mraa.Gpio(7); 
BlueLED.dir(mraa.DIR_OUT);  //set the gpio direction to output 

var totalLEDs = 3;              // total number of LEDs
var totalRounds = 4;            // total rounds of LED lights blinking
var totalLEDLightBlinks = totalLEDs * totalRounds;

var seconds = 1;                // number of seconds we want to pause
var pauseTime = 1000 * seconds; // number of milliseconds to pause

// Blink each LED light: Green, Red, and Blue, one after another
// in each round, for the total number of rounds specified in totalRounds
// For a grand total of totalLEDLightBlinks
// Pause for pauseTime between transitions
var i = 0;
var round = 1;
var waiting = setInterval(function() {
            if (i == totalLEDLightBlinks) 
            {
                console.log("Rounds complete");
    
                GreenLED.write(0);
                RedLED.write(0);
                BlueLED.write(0);
                
                clearInterval(waiting);
            }
    
            else if (i % totalLEDs == 0)
            {
                console.log("Round number: " + round);
                
                GreenLED.write(1);
                RedLED.write(0);
                BlueLED.write(0);
                
                round++;
            }
            else if (i % totalLEDs == 1)
            {
                GreenLED.write(0);
                RedLED.write(1);
                BlueLED.write(0);
            }
            else // i % totalLEDs == 2
            {
                GreenLED.write(0);
                RedLED.write(0);
                BlueLED.write(1);
            }
            
            i++;
    }, pauseTime);