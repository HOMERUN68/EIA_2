"use strict";
var L09_Virus;
(function (L09_Virus) {
    window.addEventListener("load", handleLoad);
    let viruses = [];
    let antibodys = [];
    let killercells = [];
    let bloodcells = [];
    let background;
    function handleLoad(_event) {
        console.log("Particles moving");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Virus.crc2 = canvas.getContext("2d");
        drawBackground();
        createVirus(15);
        createAntibody(4);
        createKillercell(4);
        createBloodcell(9);
        testPosition(_event);
        //zeit für neuladen
        window.setInterval(update, 20);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = L09_Virus.crc2.createLinearGradient(0, 0, 0, L09_Virus.crc2.canvas.height);
        gradient.addColorStop(0, "#FF938E");
        gradient.addColorStop(1, "#FD2117");
        L09_Virus.crc2.fillStyle = gradient;
        L09_Virus.crc2.fillRect(0, 0, L09_Virus.crc2.canvas.width, L09_Virus.crc2.canvas.height);
        console.log("Bloodvessel");
        // Muster
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.beginPath();
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.strokeStyle = "#FB0C01";
        pattern.stroke();
        L09_Virus.crc2.fillStyle = L09_Virus.crc2.createPattern(pattern.canvas, "repeat");
        L09_Virus.crc2.fillRect(0, 0, 750, 400);
        pattern.closePath();
        pattern.restore();
        background = L09_Virus.crc2.getImageData(0, 0, 750, 400);
    }
    function createVirus(_nVirus) {
        console.log("create Virus");
        for (let i = 0; i < _nVirus; i++) {
            let virus = new L09_Virus.Virus(1.0);
            viruses.push(virus);
        }
    }
    function createAntibody(_nAntibody) {
        console.log("create Antibody");
        for (let i = 0; i < _nAntibody; i++) {
            let antibody = new L09_Virus.Antibody(1.0);
            antibodys.push(antibody);
        }
    }
    function createKillercell(_nKillercells) {
        console.log("create Killercell");
        for (let i = 0; i < _nKillercells; i++) {
            let killercell = new L09_Virus.Killercell(1.0);
            killercells.push(killercell);
        }
    }
    function createBloodcell(_nBloodcell) {
        console.log("create Bloodcell");
        for (let i = 0; i < _nBloodcell; i++) {
            let bloodcell = new L09_Virus.Bloodcell(1.0);
            bloodcells.push(bloodcell);
        }
    }
    function update() {
        console.log("Update");
        L09_Virus.crc2.fillRect(0, 0, L09_Virus.crc2.canvas.width, L09_Virus.crc2.canvas.width);
        L09_Virus.crc2.putImageData(background, 0, 0);
        // Update Viruses
        for (let virus of viruses) {
            virus.move(1 / 50);
            virus.draw();
        }
        // Update Antibodys
        for (let antibody of antibodys) {
            antibody.move(1 / 50);
            antibody.draw();
        }
        // Update Killercells
        for (let killercell of killercells) {
            killercell.move(1 / 50);
            killercell.draw();
        }
        // Update Bloodecells
        for (let bloodcell of bloodcells) {
            bloodcell.move(1 / 50);
            bloodcell.draw();
        }
    }
    function testPosition(_event) {
        for (let virus of viruses) {
            let humancellHit = getKillercellHit(virus.position);
            // wenn der Virus auf die Killerzelle trifft, dann werden mehrere Funktionen aufgerufen
            if (humancellHit) {
                getKillercellHit(virus.position);
            }
        }
    }
    function startInfection() {
        window.setTimeout(function () {
            console.log("setTiemout");
        }, 5000);
    }
    function getKillercellHit(_virusposition) {
        for (let killercell of killercells) {
            if (killercell.isHit(_virusposition)) {
                startInfection();
                return killercell;
            }
        }
        return null;
    }
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=Main.js.map