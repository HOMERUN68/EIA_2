"use strict";
var L09_Virus;
(function (L09_Virus) {
    function createPaths() {
        // eigene Funktion von draw Virus einfügen
        L09_Virus.virusPaths = createVirusPaths();
        L09_Virus.antibodyPaths = createAntibodyPaths();
        L09_Virus.killercellPaths = createKillercellPaths();
        L09_Virus.bloodcellPaths = createBloodcellPaths();
    }
    L09_Virus.createPaths = createPaths;
    function createVirusPaths() {
        let paths = [];
    }
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=Paths.js.map