$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Segundo Painel");
    content_width = (120 + 5) * 10 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 10,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temperatura-sala" id="default-temperatura-sala"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-humidade-sala" id="default-sensor-humidade-sala"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-temperatura-quarto" id="default-sensor-temperatura-quarto"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-humidade-quarto" id="default-sensor-humidade-quarto"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temperature-158d00023203e4" id="default-temperature-158d00023203e4"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-humidity-158d00023203e4" id="default-humidity-158d00023203e4"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-0x00158d00044b86f8-temperature" id="default-0x00158d00044b86f8-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-0x00158d00044b86f8-humidity" id="default-0x00158d00044b86f8-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-portao-entrada" id="default-sensor-portao-entrada"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-portao-jardim" id="default-sensor-portao-jardim"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-abrir-portao-grande" id="default-abrir-portao-grande"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-abrir-portao-pequeno" id="default-abrir-portao-pequeno"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-portao-30" id="default-portao-30"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-fechar-portao" id="default-fechar-portao"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-on-off-pc" id="default-on-off-pc"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-pc-on-off" id="default-sensor-pc-on-off"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-monitor-do-pc" id="default-monitor-do-pc"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 8, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-radio-panel" id="default-load-radio-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 9, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-aspirador-panel" id="default-load-aspirador-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 10, 6)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-temperatura-sala"] = new basedisplay("default-temperatura-sala", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.temperatura_sala', 'entity_to_sub_entity_attribute': '', 'sub_entity': 'sensor.humidade_sala', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Temperetura sala', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-humidade-sala"] = new basedisplay("default-sensor-humidade-sala", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.humidade_sala', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-temperatura-quarto"] = new basedisplay("default-sensor-temperatura-quarto", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.temperatura_quarto', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-humidade-quarto"] = new basedisplay("default-sensor-humidade-quarto", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.humidade_quarto', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-temperature-158d00023203e4"] = new basedisplay("default-temperature-158d00023203e4", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.temperature_158d00023203e4', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Temperatura Escritório', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-humidity-158d00023203e4"] = new basedisplay("default-humidity-158d00023203e4", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.humidity_158d00023203e4', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Humidade Escritório', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-0x00158d00044b86f8-temperature"] = new basedisplay("default-0x00158d00044b86f8-temperature", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.0x00158d00044b86f8_temperature', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Temperatura Stuva', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-0x00158d00044b86f8-humidity"] = new basedisplay("default-0x00158d00044b86f8-humidity", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.0x00158d00044b86f8_humidity', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Humidade Stuva', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-portao-entrada"] = new basedisplay("default-sensor-portao-entrada", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.portao_entrada', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Portão entrada principal', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 250%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'text_style': 'color: white;font-size: 250%;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-portao-jardim"] = new basedisplay("default-sensor-portao-jardim", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.portao_jardim', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Portão entrada jardim', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 200%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'text_style': 'color: white;font-size: 200%;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-abrir-portao-grande"] = new baseswitch("default-abrir-portao-grande", "", "blur_light", {'widget_type': 'baseswitch', 'entity': 'switch.abrir_portao_grande', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.abrir_portao_grande'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.abrir_portao_grande'}, 'fields': {'title': 'Abrir Portão Grande', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'mdi-gate-arrow-right', 'icon_off': 'mdi-gate-arrow-right'}, 'static_icons': [], 'css': {'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;'}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: white;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'state_text': 1, 'state_map': {'on': 'Aberto', 'off': 'Fechado'}, 'icon_on': 'mdi-gate-arrow-right', 'icon_off': 'mdi-gate-arrow-right', 'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;', 'state_text_style': 'color: white;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-abrir-portao-pequeno"] = new baseswitch("default-abrir-portao-pequeno", "", "blur_light", {'widget_type': 'baseswitch', 'entity': 'switch.abrir_portao_pequeno', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.abrir_portao_pequeno'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.abrir_portao_pequeno'}, 'fields': {'title': 'Abrir Portão Pequeno', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'mdi-gate-arrow-right', 'icon_off': 'mdi-gate-arrow-right'}, 'static_icons': [], 'css': {'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;'}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: white;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'state_text': 1, 'state_map': {'on': 'Aberto', 'off': 'Fechado'}, 'icon_on': 'mdi-gate-arrow-right', 'icon_off': 'mdi-gate-arrow-right', 'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;', 'state_text_style': 'color: white;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-portao-30"] = new baseswitch("default-portao-30", "", "blur_light", {'widget_type': 'baseswitch', 'entity': 'script.portao_30', 'state_inactive': 'off', 'state_active': 'on', 'enable': 1, 'momentary': 1000, 'ignore_state': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'script.portao_30'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'script.portao_30'}, 'fields': {'title': 'Entrar/Sair a Pé', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'mdi-gate-arrow-right', 'icon_off': 'mdi-gate-arrow-right'}, 'static_icons': [], 'css': {'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;'}, 'static_css': {'title_style': '', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: white;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'state_text': 1, 'state_map': {'on': 'Aberto', 'off': 'Fechado'}, 'icon_on': 'mdi-gate-arrow-right', 'icon_off': 'mdi-gate-arrow-right', 'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;', 'state_text_style': 'color: white;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-fechar-portao"] = new baseswitch("default-fechar-portao", "", "blur_light", {'widget_type': 'baseswitch', 'entity': 'switch.fechar_portao', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.fechar_portao'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.fechar_portao'}, 'fields': {'title': 'Fechar Portão', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'mdi-gate-arrow-right', 'icon_off': 'mdi-gate-arrow-right'}, 'static_icons': [], 'css': {'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;'}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: white;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'state_text': 1, 'state_map': {'on': 'Aberto', 'off': 'Fechado'}, 'icon_on': 'mdi-gate-arrow-right', 'icon_off': 'mdi-gate-arrow-right', 'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;', 'state_text_style': 'color: white;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-on-off-pc"] = new baseswitch("default-on-off-pc", "", "blur_light", {'widget_type': 'baseswitch', 'entity': 'switch.on_off_pc', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.on_off_pc'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.on_off_pc'}, 'fields': {'title': 'Ligar/Desligar PC', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'mdi-power-standby', 'icon_off': 'mdi-power-standby'}, 'static_icons': [], 'css': {'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;'}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'icon_on': 'mdi-power-standby', 'icon_off': 'mdi-power-standby', 'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-pc-on-off"] = new basedisplay("default-sensor-pc-on-off", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'switch.on_off_pc', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Estado do PC', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 200%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'state_map': {'on': 'Ligado', 'off': 'Desligado'}, 'text_style': 'color: white;font-size: 200%;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-monitor-do-pc"] = new baseswitch("default-monitor-do-pc", "", "blur_light", {'widget_type': 'baseswitch', 'entity': 'switch.monitor_do_pc', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.monitor_do_pc'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.monitor_do_pc'}, 'fields': {'title': 'Ligar/Desligar Monitor', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'mdi-monitor-screenshot', 'icon_off': 'mdi-monitor-screenshot'}, 'static_icons': [], 'css': {'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;'}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: white;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'state_text': 1, 'state_map': {'on': 'Ligado', 'off': 'Desligado'}, 'icon_on': 'mdi-monitor-screenshot', 'icon_off': 'mdi-monitor-screenshot', 'icon_style_active': 'color: red;', 'icon_style_inactive': 'color: green;', 'state_text_style': 'color: white;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "blur_light", {'widget_type': 'basejavascript', 'fields': {'title': 'Painel Principal', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-home-assistant'}, 'static_css': {'title_style': 'color: white;font-weight: 400;font-size: 130%;', 'title2_style': 'color: #646464;font-weight: 400;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'css': {'icon_active_style': 'color: #646464;', 'icon_inactive_style': 'color: blue;'}, 'static_icons': [], 'icon_inactive': 'mdi-home-assistant', 'dashboard': 'ha_dashboard', 'title_style': 'color: white;font-size: 130%;', 'icon_inactive_style': 'color: blue;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-load-radio-panel"] = new basejavascript("default-load-radio-panel", "", "blur_light", {'widget_type': 'basejavascript', 'fields': {'title': 'Rádio', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-radio'}, 'static_css': {'title_style': 'color: Black;font-weight: 400;', 'title2_style': 'color: #646464;font-weight: 400;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'css': {'icon_active_style': 'color: #646464;', 'icon_inactive_style': 'color: blue;'}, 'static_icons': [], 'icon_inactive': 'mdi-radio', 'dashboard': 'radio', 'title_style': 'color: Black;', 'icon_inactive_style': 'color: blue;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-load-aspirador-panel"] = new basejavascript("default-load-aspirador-panel", "", "blur_light", {'widget_type': 'basejavascript', 'fields': {'title': 'RoboRock S50', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-robot-vacuum'}, 'static_css': {'title_style': 'color: Black;font-weight: 400;', 'title2_style': 'color: #646464;font-weight: 400;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'css': {'icon_active_style': 'color: #646464;', 'icon_inactive_style': 'color: black;'}, 'static_icons': [], 'icon_inactive': 'mdi-robot-vacuum', 'dashboard': 'aspirador', 'title_style': 'color: Black;', 'icon_inactive_style': 'color: black;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    

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
    

    ha_status(stream_url, "Segundo Painel", widgets, "ws");

});