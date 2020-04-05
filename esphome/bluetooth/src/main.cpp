// Auto generated code by esphome
// ========== AUTO GENERATED INCLUDE BLOCK BEGIN ===========
#include "esphome.h"
using namespace esphome;
logger::Logger *logger_logger;
web_server_base::WebServerBase *web_server_base_webserverbase;
wifi::WiFiComponent *wifi_wificomponent;
ota::OTAComponent *ota_otacomponent;
api::APIServer *api_apiserver;
using namespace sensor;
using namespace api;
web_server::WebServer *web_server_webserver;
using namespace json;
esp32_ble_tracker::ESP32BLETracker *esp32_ble_tracker_esp32bletracker;
xiaomi_lywsdcgq::XiaomiLYWSDCGQ *xiaomi_lywsdcgq_xiaomilywsdcgq;
xiaomi_lywsdcgq::XiaomiLYWSDCGQ *xiaomi_lywsdcgq_xiaomilywsdcgq_2;
xiaomi_ble::XiaomiListener *xiaomi_ble_xiaomilistener;
sensor::Sensor *sensor_sensor;
sensor::Sensor *sensor_sensor_4;
sensor::Sensor *sensor_sensor_2;
sensor::Sensor *sensor_sensor_5;
sensor::Sensor *sensor_sensor_3;
sensor::Sensor *sensor_sensor_6;
// ========== AUTO GENERATED INCLUDE BLOCK END ==========="

void setup() {
  // ===== DO NOT EDIT ANYTHING BELOW THIS LINE =====
  // ========== AUTO GENERATED CODE BEGIN ===========
  // async_tcp:
  // esphome:
  //   name: bluetooth
  //   platform: ESP32
  //   board: mhetesp32devkit
  //   arduino_version: espressif32@1.11.0
  //   includes: []
  //   libraries: []
  //   platformio_options: {}
  //   build_path: bluetooth
  App.pre_setup("bluetooth", __DATE__ ", " __TIME__);
  // logger:
  //   level: DEBUG
  //   tx_buffer_size: 512
  //   hardware_uart: UART0
  //   id: logger_logger
  //   baud_rate: 115200
  //   logs: {}
  logger_logger = new logger::Logger(115200, 512, logger::UART_SELECTION_UART0);
  logger_logger->pre_setup();
  App.register_component(logger_logger);
  // web_server_base:
  //   id: web_server_base_webserverbase
  web_server_base_webserverbase = new web_server_base::WebServerBase();
  App.register_component(web_server_base_webserverbase);
  // wifi:
  //   id: wifi_wificomponent
  //   power_save_mode: LIGHT
  //   reboot_timeout: 15min
  //   domain: .local
  //   fast_connect: false
  //   networks:
  //   - ssid: Vaitentando
  //     password: RESIDENCIAMELO2017
  //     priority: 0.0
  //     id: wifi_wifiap
  //   use_address: bluetooth.local
  wifi_wificomponent = new wifi::WiFiComponent();
  wifi_wificomponent->set_use_address("bluetooth.local");
  wifi::WiFiAP wifi_wifiap = wifi::WiFiAP();
  wifi_wifiap.set_ssid("Vaitentando");
  wifi_wifiap.set_password("RESIDENCIAMELO2017");
  wifi_wifiap.set_priority(0.0f);
  wifi_wificomponent->add_sta(wifi_wifiap);
  wifi_wificomponent->set_reboot_timeout(900000);
  wifi_wificomponent->set_power_save_mode(wifi::WIFI_POWER_SAVE_LIGHT);
  wifi_wificomponent->set_fast_connect(false);
  App.register_component(wifi_wificomponent);
  // ota:
  //   password: akcw77qw81
  //   id: ota_otacomponent
  //   port: 3232
  //   safe_mode: true
  ota_otacomponent = new ota::OTAComponent();
  ota_otacomponent->set_port(3232);
  ota_otacomponent->set_auth_password("akcw77qw81");
  App.register_component(ota_otacomponent);
  ota_otacomponent->start_safe_mode();
  // api:
  //   password: ''
  //   id: api_apiserver
  //   reboot_timeout: 15min
  //   port: 6053
  api_apiserver = new api::APIServer();
  App.register_component(api_apiserver);
  // web_server:
  //   port: 80
  //   web_server_base_id: web_server_base_webserverbase
  //   id: web_server_webserver
  //   css_url: https:esphome.io/_static/webserver-v1.min.css
  //   js_url: https:esphome.io/_static/webserver-v1.min.js
  // sensor:
  api_apiserver->set_port(6053);
  api_apiserver->set_password("");
  api_apiserver->set_reboot_timeout(900000);
  web_server_webserver = new web_server::WebServer(web_server_base_webserverbase);
  App.register_component(web_server_webserver);
  web_server_base_webserverbase->set_port(80);
  web_server_webserver->set_css_url("https://esphome.io/_static/webserver-v1.min.css");
  web_server_webserver->set_js_url("https://esphome.io/_static/webserver-v1.min.js");
  // json:
  // esp32_ble_tracker:
  //   scan_parameters:
  //     duration: 5min
  //     active: true
  //     interval: 320ms
  //     window: 30ms
  //   id: esp32_ble_tracker_esp32bletracker
  esp32_ble_tracker_esp32bletracker = new esp32_ble_tracker::ESP32BLETracker();
  App.register_component(esp32_ble_tracker_esp32bletracker);
  // sensor.xiaomi_lywsdcgq:
  //   platform: xiaomi_lywsdcgq
  //   mac_address: 58:2D:34:31:2B:5E
  //   temperature:
  //     name: Temperatura sala
  //     icon: mdi:thermometer
  //     id: sensor_sensor
  //     force_update: false
  //     accuracy_decimals: 1
  //     unit_of_measurement: °C
  //   humidity:
  //     name: Humidade sala
  //     icon: mdi:water-percent
  //     id: sensor_sensor_2
  //     force_update: false
  //     accuracy_decimals: 1
  //     unit_of_measurement: '%'
  //   battery_level:
  //     name: Bateria temperatura sala
  //     icon: mdi:battery
  //     id: sensor_sensor_3
  //     force_update: false
  //     accuracy_decimals: 0
  //     unit_of_measurement: '%'
  //   id: xiaomi_lywsdcgq_xiaomilywsdcgq
  //   esp32_ble_id: esp32_ble_tracker_esp32bletracker
  xiaomi_lywsdcgq_xiaomilywsdcgq = new xiaomi_lywsdcgq::XiaomiLYWSDCGQ();
  App.register_component(xiaomi_lywsdcgq_xiaomilywsdcgq);
  // sensor.xiaomi_lywsdcgq:
  //   platform: xiaomi_lywsdcgq
  //   mac_address: 58:2D:34:34:44:01
  //   temperature:
  //     name: Temperatura quarto
  //     icon: mdi:thermometer
  //     id: sensor_sensor_4
  //     force_update: false
  //     accuracy_decimals: 1
  //     unit_of_measurement: °C
  //   humidity:
  //     name: Humidade quarto
  //     icon: mdi:water-percent
  //     id: sensor_sensor_5
  //     force_update: false
  //     accuracy_decimals: 1
  //     unit_of_measurement: '%'
  //   battery_level:
  //     name: Bateria temperatura quarto
  //     icon: mdi:battery
  //     id: sensor_sensor_6
  //     force_update: false
  //     accuracy_decimals: 0
  //     unit_of_measurement: '%'
  //   id: xiaomi_lywsdcgq_xiaomilywsdcgq_2
  //   esp32_ble_id: esp32_ble_tracker_esp32bletracker
  xiaomi_lywsdcgq_xiaomilywsdcgq_2 = new xiaomi_lywsdcgq::XiaomiLYWSDCGQ();
  App.register_component(xiaomi_lywsdcgq_xiaomilywsdcgq_2);
  // xiaomi_ble:
  //   esp32_ble_id: esp32_ble_tracker_esp32bletracker
  //   id: xiaomi_ble_xiaomilistener
  xiaomi_ble_xiaomilistener = new xiaomi_ble::XiaomiListener();
  esp32_ble_tracker_esp32bletracker->set_scan_duration(300);
  esp32_ble_tracker_esp32bletracker->set_scan_interval(512);
  esp32_ble_tracker_esp32bletracker->set_scan_window(48);
  esp32_ble_tracker_esp32bletracker->set_scan_active(true);
  esp32_ble_tracker_esp32bletracker->register_listener(xiaomi_ble_xiaomilistener);
  esp32_ble_tracker_esp32bletracker->register_listener(xiaomi_lywsdcgq_xiaomilywsdcgq);
  esp32_ble_tracker_esp32bletracker->register_listener(xiaomi_lywsdcgq_xiaomilywsdcgq_2);
  xiaomi_lywsdcgq_xiaomilywsdcgq->set_address(0x582D34312B5EULL);
  sensor_sensor = new sensor::Sensor();
  App.register_sensor(sensor_sensor);
  sensor_sensor->set_name("Temperatura sala");
  sensor_sensor->set_unit_of_measurement("\302\260C");
  sensor_sensor->set_icon("mdi:thermometer");
  sensor_sensor->set_accuracy_decimals(1);
  sensor_sensor->set_force_update(false);
  xiaomi_lywsdcgq_xiaomilywsdcgq_2->set_address(0x582D34344401ULL);
  sensor_sensor_4 = new sensor::Sensor();
  App.register_sensor(sensor_sensor_4);
  sensor_sensor_4->set_name("Temperatura quarto");
  sensor_sensor_4->set_unit_of_measurement("\302\260C");
  sensor_sensor_4->set_icon("mdi:thermometer");
  sensor_sensor_4->set_accuracy_decimals(1);
  sensor_sensor_4->set_force_update(false);
  xiaomi_lywsdcgq_xiaomilywsdcgq->set_temperature(sensor_sensor);
  sensor_sensor_2 = new sensor::Sensor();
  App.register_sensor(sensor_sensor_2);
  sensor_sensor_2->set_name("Humidade sala");
  sensor_sensor_2->set_unit_of_measurement("%");
  sensor_sensor_2->set_icon("mdi:water-percent");
  sensor_sensor_2->set_accuracy_decimals(1);
  sensor_sensor_2->set_force_update(false);
  xiaomi_lywsdcgq_xiaomilywsdcgq_2->set_temperature(sensor_sensor_4);
  sensor_sensor_5 = new sensor::Sensor();
  App.register_sensor(sensor_sensor_5);
  sensor_sensor_5->set_name("Humidade quarto");
  sensor_sensor_5->set_unit_of_measurement("%");
  sensor_sensor_5->set_icon("mdi:water-percent");
  sensor_sensor_5->set_accuracy_decimals(1);
  sensor_sensor_5->set_force_update(false);
  xiaomi_lywsdcgq_xiaomilywsdcgq->set_humidity(sensor_sensor_2);
  sensor_sensor_3 = new sensor::Sensor();
  App.register_sensor(sensor_sensor_3);
  sensor_sensor_3->set_name("Bateria temperatura sala");
  sensor_sensor_3->set_unit_of_measurement("%");
  sensor_sensor_3->set_icon("mdi:battery");
  sensor_sensor_3->set_accuracy_decimals(0);
  sensor_sensor_3->set_force_update(false);
  xiaomi_lywsdcgq_xiaomilywsdcgq_2->set_humidity(sensor_sensor_5);
  sensor_sensor_6 = new sensor::Sensor();
  App.register_sensor(sensor_sensor_6);
  sensor_sensor_6->set_name("Bateria temperatura quarto");
  sensor_sensor_6->set_unit_of_measurement("%");
  sensor_sensor_6->set_icon("mdi:battery");
  sensor_sensor_6->set_accuracy_decimals(0);
  sensor_sensor_6->set_force_update(false);
  xiaomi_lywsdcgq_xiaomilywsdcgq->set_battery_level(sensor_sensor_3);
  xiaomi_lywsdcgq_xiaomilywsdcgq_2->set_battery_level(sensor_sensor_6);
  // =========== AUTO GENERATED CODE END ============
  // ========= YOU CAN EDIT AFTER THIS LINE =========
  App.setup();
}

void loop() {
  App.loop();
}
