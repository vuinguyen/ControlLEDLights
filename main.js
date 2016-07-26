/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)


var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console

// Load Grove module
var groveSensor = require('jsupm_grove');

var GreenLED = new mraa.Gpio(5); 
GreenLED.dir(mraa.DIR_OUT); //set the gpio direction to output 
//var GreenLED = new groveSensor.GroveLed(5);   // this works too!

var RedLED = new mraa.Gpio(6); 
RedLED.dir(mraa.DIR_OUT); //set the gpio direction to output 
//var RedLED = new groveSensor.GroveLed(6);


var BlueLED = new mraa.Gpio(7); 
BlueLED.dir(mraa.DIR_OUT); //set the gpio direction to output 
//var BlueLED = new groveSensor.GroveLed(7);

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
    
                //GreenLED.off();
                //RedLED.off();
                //BlueLED.off();
                GreenLED.write(0);
                RedLED.write(0);
                BlueLED.write(0);
                clearInterval(waiting);
            }
    
            else if (i % 3 == 0)
                {
                    console.log("Round number: " + round);
                
                    //GreenLED.on();
                    //RedLED.off();
                    //BlueLED.off();
                    
                    GreenLED.write(1);
                    RedLED.write(0);
                    BlueLED.write(0);
                
                    round++;
                }
            else if (i % 3 == 1)
                {
                    //GreenLED.off();
                    //RedLED.on();
                    //BlueLED.off();
                    
                    GreenLED.write(0);
                    RedLED.write(1);
                    BlueLED.write(0);
                }
            else // i % 3 == 2
                {
                    //GreenLED.off();
                    //RedLED.off();
                    //BlueLED.on();
                    
                    GreenLED.write(0);
                    RedLED.write(0);
                    BlueLED.write(1);
                }
            
        i++;
    }, pauseTime);