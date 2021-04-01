var mainButtons = {
    index: [Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1]
};
var subButtons = {
    index: [0, 0, 0, 0] 
};

const b0 = document.querySelector(".sub0")
const b1 = document.querySelector(".sub1")
const b2 = document.querySelector(".sub2")
const b3 = document.querySelector(".sub3")
const b4 = document.querySelector(".sub4")
const b5 = document.querySelector(".sub5")
const b6 = document.querySelector(".sub6")
const b7 = document.querySelector(".sub7")
const b8 = document.querySelector(".sub8")
const b9 = document.querySelector(".sub9")
const b10 = document.querySelector(".sub10")
const b11 = document.querySelector(".sub11")
const b12 = document.querySelector(".sub12")
const b13 = document.querySelector(".sub13")
const b14 = document.querySelector(".sub14")
const b15 = document.querySelector(".sub15")
const b16 = document.querySelector(".sub16")
const b17 = document.querySelector(".sub17")
const b18 = document.querySelector(".sub18")
const b19 = document.querySelector(".sub19")
const b20 = document.querySelector(".sub20")
const b21 = document.querySelector(".sub21")
const b22 = document.querySelector(".sub22")
const b23 = document.querySelector(".sub23")
const b24 = document.querySelector(".sub24")
const b25 = document.querySelector(".sub25")
const b26 = document.querySelector(".sub26")
const b27 = document.querySelector(".sub27")
const b28 = document.querySelector(".sub28")
const b29 = document.querySelector(".sub29")
const b30 = document.querySelector(".sub30")
const b31 = document.querySelector(".sub31")


function change_color(i) {
    if (i === 0) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 == 1) {
            b0.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 == 2) {
            b0.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 == 3) {
            b0.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 == 4) {
            b0.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 == 5) {
            b0.style.backgroundColor = "purple";
        } else {
            b0.style.backgroundColor = "green";
             
        }
    } else if (i === 1) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b1.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b1.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b1.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b1.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b1.style.backgroundColor = "purple";
        } else {
            b1.style.backgroundColor = "green";
             
        }
    } else if (i === 2) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b2.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b2.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b2.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b2.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b2.style.backgroundColor = "purple";
        } else {
            b2.style.backgroundColor = "green";
             
        }
    } else {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b3.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b3.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b3.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b3.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b3.style.backgroundColor = "purple";
        } else {
            b3.style.backgroundColor = "green";
             
        }
    }
    
}
function change_colorV2(i) {
    if (i === 0) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b4.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b4.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b4.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b4.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b4.style.backgroundColor = "purple";
        } else {
            b.style.backgroundColor = "green";
             
        }
    } else if (i === 1) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b5.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b5.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b5.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b5.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b5.style.backgroundColor = "purple";
        } else {
            b5.style.backgroundColor = "green";
             
        }
    } else if (i === 2) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b6.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b6.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b6.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b6.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b6.style.backgroundColor = "purple";
        } else {
            b6.style.backgroundColor = "green";
             
        }
    } else {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b7.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b7.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b7.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b7.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b7.style.backgroundColor = "purple";
        } else {
            b7.style.backgroundColor = "green";
             
        }
    }
    
}
function change_colorV3(i) {
    if (i === 0) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b8.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b8.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b8.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b8.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b8.style.backgroundColor = "purple";
        } else {
            b8.style.backgroundColor = "green";
             
        }
    } else if (i === 1) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b9.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b9.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b9.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b9.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b9.style.backgroundColor = "purple";
        } else {
            b9.style.backgroundColor = "green";
             
        }
    } else if (i === 2) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b10.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b10.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b10.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b10.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b10.style.backgroundColor = "purple";
        } else {
            b10.style.backgroundColor = "green";
             
        }
    } else {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b11.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b11.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b11.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b11.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b11.style.backgroundColor = "purple";
        } else {
            b11.style.backgroundColor = "green";
             
        }
    }
    
}
function change_colorV4(i) {
    if (i === 0) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b12.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b12.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b12.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b12.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b12.style.backgroundColor = "purple";
        } else {
            b.style.backgroundColor = "green";
             
        }
    } else if (i === 1) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b13.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b13.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b13.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b13.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b13.style.backgroundColor = "purple";
        } else {
            b13.style.backgroundColor = "green";
             
        }
    } else if (i === 2) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b14.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b14.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b14.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b14.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b14.style.backgroundColor = "purple";
        } else {
            b14.style.backgroundColor = "green";
             
        }
    } else {
        subButtons.index[i] += 1;
        if (subButtons.index[i] === 1) {
            b15.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b15.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b15.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b15.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b15.style.backgroundColor = "purple";
        } else {
            b15.style.backgroundColor = "green";
             
        }
    }
    
}
function change_colorV5(i) {
    if (i === 0) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b16.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b16.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b16.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b16.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b16.style.backgroundColor = "purple";
        } else {
            b16.style.backgroundColor = "green";
             
        }
    } else if (i === 1) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b17.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b17.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b17.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b17.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b17.style.backgroundColor = "purple";
        } else {
            b17.style.backgroundColor = "green";
             
        }
    } else if (i === 2) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b18.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b18.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b18.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b18.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b18.style.backgroundColor = "purple";
        } else {
            b18.style.backgroundColor = "green";
             
        }
    } else {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b19.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b19.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b19.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b19.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b19.style.backgroundColor = "purple";
        } else {
            b19.style.backgroundColor = "green";
             
        }
    }
    
}
function change_colorV6(i) {
    if (i === 0) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b20.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b20.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b20.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b20.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b20.style.backgroundColor = "purple";
        } else {
            b20.style.backgroundColor = "green";
             
        }
    } else if (i === 1) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b21.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b21.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b21.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b21.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b21.style.backgroundColor = "purple";
        } else {
            b21.style.backgroundColor = "green";
             
        }
    } else if (i === 2) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b22.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b22.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b22.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b22.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b22.style.backgroundColor = "purple";
        } else {
            b22.style.backgroundColor = "green";
             
        }
    } else {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b23.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b23.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b23.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b23.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b23.style.backgroundColor = "purple";
        } else {
            b23.style.backgroundColor = "green";
             
        }
    }
    
}
function change_colorV7(i) {
    if (i === 0) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b24.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b24.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b24.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b24.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b24.style.backgroundColor = "purple";
        } else {
            b24.style.backgroundColor = "green";
             
        }
    } else if (i === 1) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b25.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b25.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b25.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b25.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b25.style.backgroundColor = "purple";
        } else {
            b25.style.backgroundColor = "green";
             
        }
    } else if (i === 2) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b26.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b26.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b26.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b26.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b26.style.backgroundColor = "purple";
        } else {
            b26.style.backgroundColor = "green";
             
        }
    } else {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b27.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b27.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b27.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b27.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b27.style.backgroundColor = "purple";
        } else {
            b27.style.backgroundColor = "green";
             
        }
    }
    
}
function change_colorV8(i) {
    if (i === 0) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b28.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b28.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b28.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b28.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b28.style.backgroundColor = "purple";
        } else {
            b28.style.backgroundColor = "green";
             
        }
    } else if (i === 1) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b29.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b29.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b29.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b29.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b29.style.backgroundColor = "purple";
        } else {
            b29.style.backgroundColor = "green";
             
        }
    } else if (i === 2) {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b30.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b30.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b30.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b30.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b30.style.backgroundColor = "purple";
        } else {
            b30.style.backgroundColor = "green";
             
        }
    } else {
        subButtons.index[i] += 1;
        if (subButtons.index[i] % 6 === 1) {
            b31.style.backgroundColor = "yellow";
        } else if (subButtons.index[i] % 6 === 2) {
            b31.style.backgroundColor = "orange";
        } else if (subButtons.index[i] % 6 === 3) {
            b31.style.backgroundColor = "red";
        } else if (subButtons.index[i] % 6 === 4) {
            b31.style.backgroundColor = "blue";
        } else if (subButtons.index[i] % 6 === 5) {
            b31.style.backgroundColor = "purple";
        } else {
            b31.style.backgroundColor = "green";
             
        }
    }
    
}
function check() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (subButtons.index[i] > 0)
            count++;
    }
    if (count < 4) {
        alert(`Таны оруулсан өнгөнүүд дутуу байна.`);
        return;
    }
    let array = [0, 0, 0, 0, 0, 0, 0];
    let sameColor = 0;
    for (let i = 0; i < 4; i++) {
        array[mainButtons.index[i]]++;
    }
    for (let i = 0; i < 4; i++) {
        if (array[subButtons.index[i]] > 0) {
            sameColor++;
            array[subButtons.index[i]]--;
        }
    }
    let sameColorAndPosition = 0;
    for (let i = 0; i < 4; i++) {
        if (mainButtons.index[i] === subButtons.index[i]) {
            sameColorAndPosition++;
            sameColor--;
        }
    }
    document.getElementById("sameColor").innerHTML = sameColor;
    document.getElementById("samePos").innerHTML = sameColorAndPosition;

    if (sameColorAndPosition < 4) {
        document.getElementById("chance1").style.display = "flex";
        document.getElementById("submit-button2").style.display = "flex";
        document.getElementById("submit-button").style.display = "none";
        change_color = undefined;    
    } else {
        alert(`Баяр хүргэе, Танд сонирхолтой байсан гэдэгт итгэлтэй байна.`);
    }

    for (let i = 0; i < 4; i++) {
        subButtons.index[i] = 0;
    }
}
function checkV2() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (subButtons.index[i] > 0)
            count++;
    }
    if (count < 4) {
        alert(`Таны оруулсан өнгөнүүд дутуу байна.`);
        return;
    }
    let array = [0, 0, 0, 0, 0, 0, 0];
    let sameColor = 0;
    for (let i = 0; i < 4; i++) {
        array[mainButtons.index[i]]++;
    }
    for (let i = 0; i < 4; i++) {
        if (array[subButtons.index[i]] > 0) {
            sameColor++;
            array[subButtons.index[i]]--;
        }
    }
    let sameColorAndPosition = 0;
    for (let i = 0; i < 4; i++) {
        if (mainButtons.index[i] === subButtons.index[i]) {
            sameColorAndPosition++;
            sameColor--;
        }
    }
    document.getElementById("sameColorV2").innerHTML = sameColor;
    document.getElementById("samePosV2").innerHTML = sameColorAndPosition;

    if (sameColorAndPosition < 4) {
        document.getElementById("chance2").style.display = "flex";
        document.getElementById("submit-button3").style.display = "flex";
        document.getElementById("submit-button2").style.display = "none";
        change_colorV2 = undefined; 
    } else {
        alert(`Баяр хүргэе, Танд сонирхолтой байсан гэдэгт итгэлтэй байна.`);
    }

    for (let i = 0; i < 4; i++) {
        subButtons.index[i] = 0;
    }
}
function checkV3() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (subButtons.index[i] > 0)
            count++;
    }
    if (count < 4) {
        alert(`Таны оруулсан өнгөнүүд дутуу байна.`);
        return;
    }
    let array = [0, 0, 0, 0, 0, 0, 0];
    let sameColor = 0;
    for (let i = 0; i < 4; i++) {
        array[mainButtons.index[i]]++;
    }
    for (let i = 0; i < 4; i++) {
        if (array[subButtons.index[i]] > 0) {
            sameColor++;
            array[subButtons.index[i]]--;
        }
    }
    let sameColorAndPosition = 0;
    for (let i = 0; i < 4; i++) {
        if (mainButtons.index[i] === subButtons.index[i]) {
            sameColorAndPosition++;
            sameColor--;
        }
    }
    document.getElementById("sameColorV3").innerHTML = sameColor;
    document.getElementById("samePosV3").innerHTML = sameColorAndPosition;

    if (sameColorAndPosition < 4) {
        document.getElementById("chance3").style.display = "flex";
        document.getElementById("submit-button4").style.display = "flex";
        document.getElementById("submit-button3").style.display = "none";
        change_colorV3 = undefined; 
    } else {
        alert(`Баяр хүргэе, Танд сонирхолтой байсан гэдэгт итгэлтэй байна.`);
    }

    for (let i = 0; i < 4; i++) {
        subButtons.index[i] = 0;
    }
}
function checkV4() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (subButtons.index[i] > 0)
            count++;
    }
    if (count < 4) {
        alert(`Таны оруулсан өнгөнүүд дутуу байна.`);
        return;
    }
    let array = [0, 0, 0, 0, 0, 0, 0];
    let sameColor = 0;
    for (let i = 0; i < 4; i++) {
        array[mainButtons.index[i]]++;
    }
    for (let i = 0; i < 4; i++) {
        if (array[subButtons.index[i]] > 0) {
            sameColor++;
            array[subButtons.index[i]]--;
        }
    }
    let sameColorAndPosition = 0;
    for (let i = 0; i < 4; i++) {
        if (mainButtons.index[i] === subButtons.index[i]) {
            sameColorAndPosition++;
            sameColor--;
        }
    }
    document.getElementById("sameColorV4").innerHTML = sameColor;
    document.getElementById("samePosV4").innerHTML = sameColorAndPosition;

    if (sameColorAndPosition < 4) {
        document.getElementById("chance4").style.display = "flex";
        document.getElementById("submit-button5").style.display = "flex";
        document.getElementById("submit-button4").style.display = "none";
        change_colorV4 = undefined; 
    } else {
        alert(`Баяр хүргэе, Танд сонирхолтой байсан гэдэгт итгэлтэй байна.`);
    }

    for (let i = 0; i < 4; i++) {
        subButtons.index[i] = 0;
    }
}
function checkV5() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (subButtons.index[i] > 0)
            count++;
    }
    if (count < 4) {
        alert(`Таны оруулсан өнгөнүүд дутуу байна.`);
        return;
    }
    let array = [0, 0, 0, 0, 0, 0, 0];
    let sameColor = 0;
    for (let i = 0; i < 4; i++) {
        array[mainButtons.index[i]]++;
    }
    for (let i = 0; i < 4; i++) {
        if (array[subButtons.index[i]] > 0) {
            sameColor++;
            array[subButtons.index[i]]--;
        }
    }
    let sameColorAndPosition = 0;
    for (let i = 0; i < 4; i++) {
        if (mainButtons.index[i] === subButtons.index[i]) {
            sameColorAndPosition++;
            sameColor--;
        }
    }
    document.getElementById("sameColorV5").innerHTML = sameColor;
    document.getElementById("samePosV5").innerHTML = sameColorAndPosition;

    if (sameColorAndPosition < 4) {
        document.getElementById("chance5").style.display = "flex";
        document.getElementById("submit-button6").style.display = "flex";
        document.getElementById("submit-button5").style.display = "none";
        change_colorV5 = undefined; 
    } else {
        alert(`Баяр хүргэе, Танд сонирхолтой байсан гэдэгт итгэлтэй байна.`);
    }

    for (let i = 0; i < 4; i++) {
        subButtons.index[i] = 0;
    }
}
function checkV6() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (subButtons.index[i] > 0)
            count++;
    }
    if (count < 4) {
        alert(`Таны оруулсан өнгөнүүд дутуу байна.`);
        return;
    }
    let array = [0, 0, 0, 0, 0, 0, 0];
    let sameColor = 0;
    for (let i = 0; i < 4; i++) {
        array[mainButtons.index[i]]++;
    }
    for (let i = 0; i < 4; i++) {
        if (array[subButtons.index[i]] > 0) {
            sameColor++;
            array[subButtons.index[i]]--;
        }
    }
    let sameColorAndPosition = 0;
    for (let i = 0; i < 4; i++) {
        if (mainButtons.index[i] === subButtons.index[i]) {
            sameColorAndPosition++;
            sameColor--;
        }
    }
    document.getElementById("sameColorV6").innerHTML = sameColor;
    document.getElementById("samePosV6").innerHTML = sameColorAndPosition;

    if (sameColorAndPosition < 4) {
        document.getElementById("chance6").style.display = "flex";
        document.getElementById("submit-button7").style.display = "flex";
        document.getElementById("submit-button6").style.display = "none";
        change_colorV6 = undefined; 
    } else {
        alert(`Баяр хүргэе, Танд сонирхолтой байсан гэдэгт итгэлтэй байна.`);
    }

    for (let i = 0; i < 4; i++) {
        subButtons.index[i] = 0;
    }
}
function checkV7() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (subButtons.index[i] > 0)
            count++;
    }
    if (count < 4) {
        alert(`Таны оруулсан өнгөнүүд дутуу байна.`);
        return;
    }
    let array = [0, 0, 0, 0, 0, 0, 0];
    let sameColor = 0;
    for (let i = 0; i < 4; i++) {
        array[mainButtons.index[i]]++;
    }
    for (let i = 0; i < 4; i++) {
        if (array[subButtons.index[i]] > 0) {
            sameColor++;
            array[subButtons.index[i]]--;
        }
    }
    let sameColorAndPosition = 0;
    for (let i = 0; i < 4; i++) {
        if (mainButtons.index[i] === subButtons.index[i]) {
            sameColorAndPosition++;
            sameColor--;
        }
    }
    document.getElementById("sameColorV7").innerHTML = sameColor;
    document.getElementById("samePosV7").innerHTML = sameColorAndPosition;

    if (sameColorAndPosition < 4) {
        document.getElementById("chance7").style.display = "flex";
        document.getElementById("submit-button8").style.display = "flex";
        document.getElementById("submit-button7").style.display = "none";
        change_colorV7 = undefined; 
    } else {
        alert(`Баяр хүргэе, Танд сонирхолтой байсан гэдэгт итгэлтэй байна.`);
    }

    for (let i = 0; i < 4; i++) {
        subButtons.index[i] = 0;
    }
}
function checkV8() {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        if (subButtons.index[i] > 0)
            count++;
    }
    if (count < 4) {
        alert(`Таны оруулсан өнгөнүүд дутуу байна.`);
        return;
    }
    let array = [0, 0, 0, 0, 0, 0, 0];
    let sameColor = 0;
    for (let i = 0; i < 4; i++) {
        array[mainButtons.index[i]]++;
    }
    for (let i = 0; i < 4; i++) {
        if (array[subButtons.index[i]] > 0) {
            sameColor++;
            array[subButtons.index[i]]--;
        }
    }
    let sameColorAndPosition = 0;
    for (let i = 0; i < 4; i++) {
        if (mainButtons.index[i] === subButtons.index[i]) {
            sameColorAndPosition++;
            sameColor--;
        }
    }
    document.getElementById("sameColorV8").innerHTML = sameColor;
    document.getElementById("samePosV8").innerHTML = sameColorAndPosition;

    if (sameColorAndPosition < 4) {
        alert(`Сайн оролдлого байлаа. Одоо уул нь ганц тоглочихвол хожлоо тэ.`);
        document.getElementById("submit-button8").style.display = "none";
        document.getElementById("try-again").style.display = "flex";
    } else {
        alert(`Баяр хүргэе, Танд сонирхолтой байсан гэдэгт итгэлтэй байна.`);
    }

    for (let i = 0; i < 4; i++) {
        subButtons.index[i] = 0;
    }
    change_colorV8 = undefined; 
}