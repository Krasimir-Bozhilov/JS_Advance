function roadRadar(speed, area) {
    let speedNum = Number(speed);
    var speedLimit;
    switch (area) {
        case'motorway':
            speedLimit = 130;
            if (speedLimit >= speedNum) {
                console.log(`Driving ${speedNum} km/h in a ${speedLimit} zone`);
            } else {
                if ((speedNum - speedLimit) > 40) {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                } else if ((speedNum - speedLimit) > 20 && (speedNum - speedLimit) <= 40) {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);

                } else {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`);

                }
            }
            break;
        case'interstate':
            speedLimit = 90;
            if (speedLimit >= speedNum) {
                console.log(`Driving ${speedNum} km/h in a ${speedLimit} zone`);
            } else {
                if ((speedNum - speedLimit) > 40) {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                } else if ((speedNum - speedLimit) > 20 && (speedNum - speedLimit) <= 40) {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);

                } else {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`);

                }
            }
            break;
        case'city':
            speedLimit = 50;
            if (speedLimit >= speedNum){
                console.log(`Driving ${speedNum} km/h in a ${speedLimit} zone`);
            } else {speedLimit - speedNum
                if ((speedLimit - speedNum) > 40) {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                } else if ((speedNum - speedLimit) > 20 && (speedNum - speedLimit) <= 40) {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);

                } else {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`);

                }
            }
            break;
        case'residential':
            speedLimit = 20;
            if (speedLimit >= speedNum) {
                console.log(`Driving ${speedNum} km/h in a ${speedLimit} zone`);
            } else {
                if ((speedNum - speedLimit) > 40) {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                } else if ((speedNum - speedLimit) > 20 && (speedNum - speedLimit) <= 40) {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);

                } else {
                    console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`);

                }
            }
            break;
    }

}

roadRadar(120, 'interstate')