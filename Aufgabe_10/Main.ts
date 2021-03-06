namespace L10_Virus {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable[] = [];

    // let viruses: Virus[] = [];
    // let antibodys: Antibody[] = [];
    // let killercells: Killercell[] = [];
    // let bloodcells: Bloodcell[] = [];

    let background: ImageData;


    function handleLoad(_event: Event): void {
        console.log("Particles moving");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        createVirus(12);
        createAntibody(4);
        createKillercell(4);
        createBloodcell(9);

        // testPosition(_event);

        //zeit für neuladen
        window.setInterval(update, 20);
    }

    function drawBackground(): void {
        console.log("Background");
        
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#FF938E");
        gradient.addColorStop(1, "#FD2117");
        
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        
        console.log("Bloodvessel");
        
        // Muster
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
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
        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, 750, 400);
        
        pattern.closePath();
        pattern.restore();
        
        background = crc2.getImageData(0, 0, 750, 400);
    }

    function createVirus(_nVirus: number): void {
        console.log("create Virus");
        for (let i: number =  0; i < _nVirus; i++) {
            let virus: Virus = new Virus(1.0);
            moveables.push(virus);
        }
    }

    function createAntibody(_nAntibody: number): void {
        console.log("create Antibody");
        for (let i: number =  0; i < _nAntibody; i++) {
            let antibody: Antibody = new Antibody(1.0);
            moveables.push(antibody);
        }
    }

    function createKillercell(_nKillercells: number): void {
        console.log("create Killercell");
        for (let i: number =  0; i < _nKillercells; i++) {
            let killercell: Killercell = new Killercell(1.0);
            moveables.push(killercell);
        }
    }

    function createBloodcell(_nBloodcell: number): void {
        console.log("create Bloodcell");
        for (let i: number =  0; i < _nBloodcell; i++) {
            let bloodcell: Bloodcell = new Bloodcell(1.0);
            moveables.push(bloodcell);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.width);

        crc2.putImageData(background, 0, 0);

        // Update Viruses
        for (let virus of moveables) {
            virus.move(1 / 50);
            virus.draw();
        }

        // Update Antibodys
        for (let antibody of moveables) {
            antibody.move(1 / 50);
            antibody.draw();
        }

        // Update Killercells
        for (let killercell of moveables) {
            killercell.move(1 / 50);
            killercell.draw();
        }

        // Update Bloodecells
        for (let bloodcell of moveables) {
            bloodcell.move(1 / 50);
            bloodcell.draw();
        }
    }

    // function testPosition(_event: Event): void {
    //     for (let virus of moveables) {
    //         let humancellHit: Killercell | null = getKillercellHit(virus.position);
    //         // wenn der Virus auf die Killerzelle trifft, dann werden mehrere Funktionen aufgerufen
    //         if (humancellHit)  {
    //            getKillercellHit(virus.position);
    //         }
    //     }
    // }

    // function startInfection(): void {

    //     window.setTimeout(function (): void {
    //         console.log("setTiemout");
    //     },                5000);
    // }

    // function getKillercellHit(_virusposition: Vector): Killercell | null {
    //     for (let killercell of killercells) {
    //         if (killercell.isHit(_virusposition)) {
    //             startInfection();
    //             return killercell;
    //         }
    //     }
    //     return null;
    // }

}