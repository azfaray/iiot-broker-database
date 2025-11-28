// test_device.js
const mqtt = require('mqtt');

// Koneksi ke broker lokal kita
const client = mqtt.connect('mqtt://localhost:1883');

// Data Dummy (Sesuai dengan skema machine_logs yang kompleks tadi)
const dummyPayload = {
    // Linear Actuators
    la1Forward: true,
    la1Backward: true,
    la2Forward: true,
    la2Backward: true,

    // Stepper Relays
    stepper1Relay: true,
    stepper2Relay: true,

    // Sensors & Proximity
    irRelay: true,
    inductiveRelay: true,
    capacitiveRelay: true,
    irSensor: true,
    inductiveSensor: true,
    capacitiveSensor: true,

    // Values
    stepper1Rpm: 250.7,
    stepper1Position: 45.0,
    stepper2Rpm: 0.0,
    stepper2Position: 0.0,

    // Status
    isPowerLive: true,
    
    // Outer Points (Harus string: empty/occupied/occupied_metallic)
    outerPoint1: "occupied",
    outerPoint2: "empty",
    outerPoint3: "empty",
    outerPoint4: "empty",
    outerPoint5: "empty",

    // Inner Points
    innerPoint1Occupied: true,
    innerPoint2Occupied: false,
    innerPoint3Occupied: false,
    innerPoint4Occupied: false,
    innerPoint5Occupied: false
};

client.on('connect', () => {
    console.log('🔌 Simulasi Device Terkoneksi!');

    // Kirim data ke topik conveyor
    // Pastikan handler conveyor.js kamu sudah pakai versi REVISI (Mapping)
    client.publish('conveyor/data', JSON.stringify(dummyPayload), () => {
        console.log('📤 Data dikirim!');
        client.end(); // Tutup koneksi setelah kirim
    });
});