import Raspberry4 from "../assets/Raspberry Pi 4 Modelo B 4GB.jpg";
import Raspberry2 from "../assets/Raspberry Pi Zero 2 W.jpg";
import Orange5 from "../assets/Orange Pi 5 8GB.jpg";
import Orange3 from "../assets/Orange Pi Zero 3 2GB.jpg";
import EspBluetooth from "../assets/ESP32 WiFi + Bluetooth.jpg";
import DisplayI2C from "../assets/Display OLED 0.96” I2C.jpg";
import SensorTemp from "../assets/Sensor de Temperatura e Umidade DHT22 (AM2302).jpg";
import KitJumpers from "../assets/Kit de Jumpers + Protoboard.jpg";
import ModuloRele5V from "../assets/Módulo Relé 1 Canal 5V.jpg";
import CaboUSB from "../assets/Cabo USB para Arduino Uno.jpg";
import ArduinoUno from "../assets/Arduino Uno (Compatível).jpeg";

export const produtos = [
  {
    id: "raspberry_pi_4_modelo_b",
    nome: "Raspberry Pi 4 Modelo B 4GB",
    preco: "R$ 450,00",
    imagem: Raspberry4,
    descricao:
      "Placa de desenvolvimento com 4GB de RAM, ideal para projetos de automação, servidores e aprendizado.",
    categoria: "Placas de Desenvolvimento",
    marca: "Raspberry Pi Foundation",
    disponibilidade: "Em estoque",
    peso: "46g",
    garantia: "12 meses",
    conteudo: "1x Raspberry Pi 4 Modelo B 4GB, 1x Manual",
    datasheet: "https://www.raspberrypi.com/documentation/",
    especificacoes: {
      processador:
        "Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz",
      conexao:
        "2x USB 3.0, 2x USB 2.0, 2x Micro HDMI, Ethernet, GPIO, WiFi, Bluetooth",
      tensao: "5V via USB-C",
    },
  },
  {
    id: "raspberry_pi_zero_2_w",
    nome: "Raspberry Pi Zero 2 W",
    preco: "R$ 220,00",
    imagem: Raspberry2,
    descricao:
      "Versão compacta da linha Raspberry Pi, ideal para projetos portáteis e de baixo consumo.",
    categoria: "Placas de Desenvolvimento",
    marca: "Raspberry Pi Foundation",
    disponibilidade: "Em estoque",
    peso: "11g",
    garantia: "12 meses",
    conteudo: "1x Raspberry Pi Zero 2 W",
    datasheet: "https://www.raspberrypi.com/documentation/",
    especificacoes: {
      processador: "Quad-core Cortex-A53 (ARMv8) 64-bit SoC @ 1GHz",
      conexao: "WiFi 2.4GHz, Bluetooth 4.2, Mini HDMI, Micro USB OTG",
      tensao: "5V via Micro USB",
    },
  },
  {
    id: "orange_pi_5",
    nome: "Orange Pi 5 8GB",
    preco: "R$ 490,00",
    imagem: Orange5,
    descricao:
      "Placa poderosa com processador Rockchip RK3588S, ideal para aplicações de IA e processamento de vídeo.",
    categoria: "Placas de Desenvolvimento",
    marca: "Orange Pi",
    disponibilidade: "Em estoque",
    peso: "55g",
    garantia: "12 meses",
    conteudo: "1x Orange Pi 5 8GB",
    datasheet: "http://www.orangepi.org/",
    especificacoes: {
      processador: "Rockchip RK3588S, 8-Core 64-bit",
      conexao: "USB, HDMI, Ethernet, GPIO, WiFi (com módulo externo)",
      tensao: "5V via USB-C",
    },
  },
  {
    id: "orange_pi_zero_3",
    nome: "Orange Pi Zero 3 2GB",
    preco: "R$ 210,00",
    imagem: Orange3,
    descricao:
      "Placa compacta com 2GB de RAM, ideal para aplicações embarcadas e automação.",
    categoria: "Placas de Desenvolvimento",
    marca: "Orange Pi",
    disponibilidade: "Em estoque",
    peso: "30g",
    garantia: "12 meses",
    conteudo: "1x Orange Pi Zero 3",
    datasheet: "http://www.orangepi.org/",
    especificacoes: {
      processador: "Allwinner H618 Quad-Core Cortex-A53",
      conexao: "USB, Ethernet, GPIO",
      tensao: "5V via USB-C",
    },
  },
  {
    id: "esp32_wifi_bt",
    nome: "ESP32 WiFi + Bluetooth",
    preco: "R$ 38,00",
    imagem: EspBluetooth,
    descricao:
      "Módulo WiFi e Bluetooth de baixo custo e alto desempenho, ideal para projetos IoT.",
    categoria: "Módulos de Comunicação",
    marca: "Espressif",
    disponibilidade: "Em estoque",
    peso: "10g",
    garantia: "3 meses",
    conteudo: "1x Módulo ESP32",
    datasheet: "https://www.espressif.com/en/products/socs/esp32/resources",
    especificacoes: {
      processador: "Xtensa Dual-Core 32-bit LX6",
      conexao: "WiFi, Bluetooth, GPIO, UART, SPI, I2C",
      tensao: "3.3V",
    },
  },
  {
    id: "display_oled_096",
    nome: "Display OLED 0.96” I2C",
    preco: "R$ 22,00",
    imagem: DisplayI2C,
    descricao:
      "Display gráfico monocromático de 0.96” com interface I2C, ideal para mostrar dados em projetos.",
    categoria: "Displays",
    marca: "Genérico",
    disponibilidade: "Em estoque",
    peso: "5g",
    garantia: "3 meses",
    conteudo: "1x Display OLED 0.96” I2C",
    datasheet: "https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf",
    especificacoes: {
      processador: "Controlador SSD1306",
      conexao: "I2C",
      tensao: "3.3V ou 5V",
    },
  },
  {
    id: "sensor_dht22",
    nome: "Sensor de Temperatura e Umidade DHT22 (AM2302)",
    preco: "R$ 18,00",
    imagem: SensorTemp,
    descricao:
      "Sensor digital de temperatura e umidade com boa precisão, ideal para projetos de monitoramento ambiental.",
    categoria: "Sensores",
    marca: "Aosong",
    disponibilidade: "Em estoque",
    peso: "7g",
    garantia: "3 meses",
    conteudo: "1x Sensor DHT22",
    datasheet:
      "https://cdn.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf",
    especificacoes: {
      processador: "Integrado no sensor",
      conexao: "Digital",
      tensao: "3.3V a 6V",
    },
  },
  {
    id: "kit_jumpers_protoboard",
    nome: "Kit de Jumpers + Protoboard",
    preco: "R$ 25,00",
    imagem: KitJumpers,
    descricao:
      "Conjunto com protoboard e jumpers para montagem rápida de circuitos em bancada.",
    categoria: "Acessórios",
    marca: "Genérico",
    disponibilidade: "Em estoque",
    peso: "90g",
    garantia: "3 meses",
    conteudo: "1x Protoboard, 1x Pacote de jumpers variados",
    datasheet: "",
    especificacoes: {
      processador: "Não aplicável",
      conexao: "Não aplicável",
      tensao: "Não aplicável",
    },
  },
  {
    id: "modulo_rele_1_canal",
    nome: "Módulo Relé 1 Canal 5V",
    preco: "R$ 12,00",
    imagem: ModuloRele5V,
    descricao:
      "Módulo relé com acionamento 5V ideal para controle de cargas AC ou DC em automações.",
    categoria: "Componentes Eletrônicos",
    marca: "Genérico",
    disponibilidade: "Em estoque",
    peso: "25g",
    garantia: "3 meses",
    conteudo: "1x Módulo Relé 1 Canal 5V",
    datasheet: "",
    especificacoes: {
      processador: "Não aplicável",
      conexao: "Pinos digitais",
      tensao: "5V",
    },
  },
  {
    id: "cabo_usb_arduino_uno",
    nome: "Cabo USB para Arduino Uno",
    preco: "R$ 10,00",
    imagem: CaboUSB,
    descricao:
      "Cabo USB tipo A para B, compatível com Arduino Uno e impressoras.",
    categoria: "Cabos",
    marca: "Genérico",
    disponibilidade: "Em estoque",
    peso: "50g",
    garantia: "3 meses",
    conteudo: "1x Cabo USB A-B",
    datasheet: "",
    especificacoes: {
      processador: "Não aplicável",
      conexao: "USB tipo A para tipo B",
      tensao: "5V",
    },
  },
  {
    id: "arduino_uno_compat",
    nome: "Arduino Uno (Compatível)",
    preco: "R$ 75,00",
    imagem: ArduinoUno,
    descricao:
      "Placa compatível com Arduino Uno, ideal para iniciantes e projetos educacionais.",
    categoria: "Placas de Desenvolvimento",
    marca: "Compatível",
    disponibilidade: "Em estoque",
    peso: "30g",
    garantia: "6 meses",
    conteudo: "1x Arduino Uno Compatível",
    datasheet: "https://docs.arduino.cc/hardware/uno-rev3",
    especificacoes: {
      processador: "ATmega328P",
      conexao: "USB, GPIO, UART, I2C, SPI",
      tensao: "5V",
    },
  },
];
