/*
 * The MIT License
 * 
 * Copyright (c) 2012 Petar Petrov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
Crafty.scene("splash", function() {
    
    Crafty.background("#fff");

    // Show HiScore Dialog
    Crafty.bind("ShowHowTo", function() {
        
        $("#dialog-howto").show();
        
        // show dialog
        $("#dialog-howto").dialog({
            resizable: false,
            "width": 720,
            "height": 400,
            modal: true,
            "title": "How to play",
            buttons: {
                "Sounds legit": function() {
                    $(this).dialog("close");
                }
            },
            close: function(event, ui) {
                //TODO:
            }            
        });          
    }); 
    
    $("#menu-start").click(function() {
        $("#menu").hide();
        Crafty.scene('main');
    });    
    
    $("#menu-howto").click(function() {
        Crafty.trigger('ShowHowTo');
    });        
    
    $("#menu-hiscore").click(function() {
        
    });        
    
    $("#menu").show();
});