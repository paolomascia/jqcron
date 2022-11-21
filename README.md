# jQuery plugin: jqcron

JQCron is a [jQuery]/[Bootstrap] plugin to edit crontab expressions.

## Dependencies

 * [jQuery]
 * [Bootstrap]  

## Usage

To use this plugin:

1.Import [jQuery] and [Bootstrap].

2.Import the minimized plugin files *jqcron.min.js* and *jqcron.min.css* from the dist folder: 

3.Attach the plugin to an empty `<DIV>` on DOM ready:
    
    $(document).ready(function() {
        $('#mycrontab').cron();
    });
  

You can pass an on change lister as option:

    $( document ).ready(function() {    
        $('#jqcron').jqcron( {    
                "onChange" : function(c){  $('#cron-exp').html(c); }               
            });
    });

To set the value of the crontab use setValue(crontab_exp):

    var mycron =  $('#mycrontab').cron();
    cron.setValue("0/10 0 * * * ?");

## Copyrights

Copyright (c) 2016-2021, Paolo Mascia.

This project is licensed under the [MIT license].

 [jQuery]: http://jquery.com "jQuery"
 [Bootstrap]: http://jquery.com "Bootstrap"
 [MIT license]: https://opensource.org/licenses/MIT "MIT license"