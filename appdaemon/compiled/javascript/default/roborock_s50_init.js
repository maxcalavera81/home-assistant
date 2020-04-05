$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "RoboRock S50");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basevacuum-default-vacuum-xiaomi-vacuum-cleaner" id="default-vacuum-xiaomi-vacuum-cleaner"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="frame" id ="frame">    <img class="robo_img" id="robo_img" src="/custom_css/img/rr.png">    <div class="m2" id ="m2">250 m2</div>    <div class="count" id ="count">12 ggr</div>    <div class="time" id ="time">23:45</div>    <div class="battery" id ="battery"></div>    <div class="status" id ="status">Charging</div>    <div class="button" id="button"></div></div><div class="fandiv">    <img class="robo_dock" id="robo_dock" src="/custom_css/img/dock.png">    <img class="robo_fan_0" id="robo_fan_0" src="/custom_css/img/mop.png">    <img class="robo_fan_1" id="robo_fan_1" src="/custom_css/img/fan.png">    <img class="robo_fan_2" id="robo_fan_2" src="/custom_css/img/fan.png">    <img class="robo_fan_3" id="robo_fan_3" src="/custom_css/img/fan.png">    <img class="robo_fan_4" id="robo_fan_4" src="/custom_css/img/fan.png"></div> </div></li>', 5, 4, 1, 1)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-vacuum-xiaomi-vacuum-cleaner"] = new basevacuum("default-vacuum-xiaomi-vacuum-cleaner", "", "default", {'widget_type': 'basevacuum', 'entity': 'vacuum.xiaomi_vacuum_cleaner', 'fields': {'title': 'Escrava Isaura'}, 'css': {}, 'static_icons': [], 'static_css': {'title_style': '', 'widget_style': ''}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events

    
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    

    ha_status(stream_url, "RoboRock S50", widgets, "ws");

});