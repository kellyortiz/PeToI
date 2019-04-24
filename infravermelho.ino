#define pinSensor 7

void setup() {
  // put your setup code here, to run once:
  pinMode(pinSensor,INPUT);
}

void loop() {
 bool sensor = digitalRead(pinSensor);
 if (!sensor){
    Serial.print("Não passou");
 } else {
  Serial.print("Passou");
 }
}
