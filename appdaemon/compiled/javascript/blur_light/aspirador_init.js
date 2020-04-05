$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Aspirador");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect-default-estados-de-succao" id="default-estados-de-succao"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect-default-zonas-de-aspiracao" id="default-zonas-de-aspiracao"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 2, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-estado-aspirador" id="default-sensor-vacuum-estado-aspirador"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-area-limpa" id="default-sensor-vacuum-area-limpa"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-inicio-ultima-limpeza" id="default-sensor-vacuum-inicio-ultima-limpeza"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-area-limpeza-total" id="default-sensor-vacuum-area-limpeza-total"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-fim-ultima-limpeza" id="default-sensor-vacuum-fim-ultima-limpeza"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-limpeza-total" id="default-sensor-vacuum-limpeza-total"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-tempo-aspiraccao" id="default-sensor-vacuum-tempo-aspiraccao"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-tempo-limpeza-total" id="default-sensor-vacuum-tempo-limpeza-total"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-bateria-aspirador" id="default-sensor-vacuum-bateria-aspirador"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-escova-lateral" id="default-sensor-vacuum-escova-lateral"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-lavagem-filtro" id="default-sensor-vacuum-lavagem-filtro"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-vacuum-limpar-sensores" id="default-sensor-vacuum-limpar-sensores"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 8, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-secundario-panel" id="default-load-secundario-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 9, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-radio-panel" id="default-load-radio-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 10, 6)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-estados-de-succao"] = new baseselect("default-estados-de-succao", "", "blur_light", {'widget_type': 'baseselect', 'entity': 'input_select.estados_de_succao', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.estados_de_succao'}, 'fields': {'title': 'Velocidade de Aspiração', 'title2': '', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #646464;font-weight: 400;', 'title2_style': 'color: #646464;font-weight: 400;', 'select_style': 'background-color: #999;color:black;', 'selectcontainer_style': '', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-zonas-de-aspiracao"] = new baseselect("default-zonas-de-aspiracao", "", "blur_light", {'widget_type': 'baseselect', 'entity': 'input_select.zonas_de_aspiracao', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.zonas_de_aspiracao'}, 'fields': {'title': 'Escolher Zona', 'title2': '', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #646464;font-weight: 400;', 'title2_style': 'color: #646464;font-weight: 400;', 'select_style': 'background-color: #999;color:black;', 'selectcontainer_style': '', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-estado-aspirador"] = new basedisplay("default-sensor-vacuum-estado-aspirador", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_estado_aspirador', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Estado da Bateria', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 150%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'text_style': 'color: white;font-size: 150%;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-area-limpa"] = new basedisplay("default-sensor-vacuum-area-limpa", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_area_limpa', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Última área limpa', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'text_style': 'color: white;font-size: 100%;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-inicio-ultima-limpeza"] = new basedisplay("default-sensor-vacuum-inicio-ultima-limpeza", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_inicio_ultima_limpeza', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': 'Última limpeza', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 150%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'text_style': 'color: white;font-size: 150%;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-area-limpeza-total"] = new basedisplay("default-sensor-vacuum-area-limpeza-total", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_area_limpeza_total', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-fim-ultima-limpeza"] = new basedisplay("default-sensor-vacuum-fim-ultima-limpeza", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_fim_ultima_limpeza', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-limpeza-total"] = new basedisplay("default-sensor-vacuum-limpeza-total", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_limpeza_total', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-tempo-aspiraccao"] = new basedisplay("default-sensor-vacuum-tempo-aspiraccao", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_tempo_aspiraccao', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-tempo-limpeza-total"] = new basedisplay("default-sensor-vacuum-tempo-limpeza-total", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_tempo_limpeza_total', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-bateria-aspirador"] = new basedisplay("default-sensor-vacuum-bateria-aspirador", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_bateria_aspirador', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-escova-lateral"] = new basedisplay("default-sensor-vacuum-escova-lateral", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_escova_lateral', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-lavagem-filtro"] = new basedisplay("default-sensor-vacuum-lavagem-filtro", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_lavagem_filtro', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-sensor-vacuum-limpar-sensores"] = new basedisplay("default-sensor-vacuum-limpar-sensores", "", "blur_light", {'widget_type': 'basedisplay', 'entity': 'sensor.vacuum_limpar_sensores', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: black;', 'title2_style': 'color: #646464;font-weight: 400;', 'state_text_style': 'color: #646464;font-size: 100%;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);', 'container_style': ''}, 'css': {'value_style': 'color: white;font-size: 250%;', 'text_style': 'color: white;font-size: 100%;', 'unit_style': 'color: #f2f375;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "blur_light", {'widget_type': 'basejavascript', 'fields': {'title': 'Painel Principal', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-home-assistant'}, 'static_css': {'title_style': 'color: Black;font-weight: 400;', 'title2_style': 'color: #646464;font-weight: 400;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'css': {'icon_active_style': 'color: #646464;', 'icon_inactive_style': 'color: blue;'}, 'static_icons': [], 'icon_inactive': 'mdi-home-assistant', 'dashboard': 'ha_dashboard', 'title_style': 'color: Black;', 'icon_inactive_style': 'color: blue;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-load-secundario-panel"] = new basejavascript("default-load-secundario-panel", "", "blur_light", {'widget_type': 'basejavascript', 'fields': {'title': 'Painel Secundário', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-home-floor-2'}, 'static_css': {'title_style': 'color: Black;font-weight: 400;', 'title2_style': 'color: #646464;font-weight: 400;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'css': {'icon_active_style': 'color: #646464;', 'icon_inactive_style': 'color: blue;'}, 'static_icons': [], 'icon_inactive': 'mdi-home-floor-2', 'dashboard': 'segundo_painel', 'title_style': 'color: Black;', 'icon_inactive_style': 'color: blue;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    
        widgets["default-load-radio-panel"] = new basejavascript("default-load-radio-panel", "", "blur_light", {'widget_type': 'basejavascript', 'fields': {'title': 'Rádio', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-radio'}, 'static_css': {'title_style': 'color: Black;font-weight: 400;', 'title2_style': 'color: #646464;font-weight: 400;', 'widget_style': 'backdrop-filter: blur(30px);background-color: rgba(255, 255, 255, 0.5);'}, 'css': {'icon_active_style': 'color: #646464;', 'icon_inactive_style': 'color: blue;'}, 'static_icons': [], 'icon_inactive': 'mdi-radio', 'dashboard': 'radio', 'title_style': 'color: Black;', 'icon_inactive_style': 'color: blue;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 0, 'namespace': 'default'})
    

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
    

    ha_status(stream_url, "Aspirador", widgets, "ws");

});