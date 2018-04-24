// Code based on https://stackoverflow.com/a/37901176
function obfuscatedsort(){
    var adgjihgrgahgarhues = document.getElementById("input").value;
    adgjihgrgahgarhues = adgjihgrgahgarhues.split(",");
    var gjhdksonfuinevinsesinvspn = [];
    var fdkanhbinmffnbdfjugnh;
    var hgjsdfglhgl=0;
    var gkihnssng = 1;

    for (var kfmgknlknsd = hgjsdfglhgl; kfmgknlknsd < adgjihgrgahgarhues.length; kfmgknlknsd++) {
        gjhdksonfuinevinsesinvspn.push(parseInt(adgjihgrgahgarhues[kfmgknlknsd]));
    }
    ;;;;;;;;;; ;;;;;;;;;; ;;;;    ;; ;;;;;;;; ;;     ;; ;;;;;;;; ;;;;;;;; ;;;;;;
    ;;         ;;      ;; ;; ;;   ;; ;;       ;;     ;; ;;       ;;       ;;    ;;
    ;;         ;;      ;; ;;  ;;  ;; ;;;;;;   ;;     ;; ;;;;;;;; ;;;;;    ;;    ;;
    ;;         ;;      ;; ;;   ;; ;; ;;       ;;     ;;       ;; ;;       ;;    ;;
    ;;;;;;;;;; ;;;;;;;;;; ;;    ;;;; ;;       ;;;;;;;;; ;;;;;;;; ;;;;;;;; ;;;;;;
    do {
        fdkanhbinmffnbdfjugnh = false;
        for (var nfgdsjgnjdsfngn=hgjsdfglhgl; nfgdsjgnjdsfngn < gjhdksonfuinevinsesinvspn.length-gkihnssng; nfgdsjgnjdsfngn++) {
            if (gjhdksonfuinevinsesinvspn[nfgdsjgnjdsfngn] > gjhdksonfuinevinsesinvspn[nfgdsjgnjdsfngn+gkihnssng]) {
                var bhdsfbhdbsfhdf = gjhdksonfuinevinsesinvspn[nfgdsjgnjdsfngn];
                gjhdksonfuinevinsesinvspn[nfgdsjgnjdsfngn] = gjhdksonfuinevinsesinvspn[nfgdsjgnjdsfngn+gkihnssng];
                gjhdksonfuinevinsesinvspn[nfgdsjgnjdsfngn+gkihnssng] = bhdsfbhdbsfhdf;
                fdkanhbinmffnbdfjugnh = true;
            }
        }
    } while (fdkanhbinmffnbdfjugnh);

    document.getElementById("output").value = gjhdksonfuinevinsesinvspn;
}
/*
1) all variables to jiberish
2) adding unnecessary variables and code
3) changed the code structure
 */