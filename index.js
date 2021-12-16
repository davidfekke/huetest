
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ip_address = process.env.IP_ADDRESS;
const user = process.env.USERTOKEN;

const endpoint = `http://${ip_address}/api/${user}/lights/1/state`;

let toggle = true;

async function cycleXMASLights() {
    await axios.put(endpoint, {
        "on":true, 
        "sat":254, 
        "bri":254,
        "hue": toggle ? 20000 : 0
    });
    toggle = !toggle;
}

var timer = setInterval(await cycleXMASLights, 2000);
