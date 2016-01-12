var app = angular.module('email', []);

app.controller('mainCtrl', function(){
    

    this.prenom = '';
    this.nom = '';
    this.fonction = '';
    this.tel = 'Tel : +33 (0)X XX XX XX XX - Mobile : +33 (0)6 XX XX XX XX';

    var calc = angular.bind(this, function(){
        var prenom_f = this.prenom[0].toUpperCase() + this.prenom.slice(1).toLowerCase();
        var fonction_f= this.fonction[0].toUpperCase() + this.fonction.slice(1).toLowerCase();
        var output = TEMPLATE
            .replace(/__CNF_PARC__/, CONFIG.parc)
            .replace(/__CNF_LOGO__/, CONFIG.logo)
            .replace(/__CNF_POINTS__/, CONFIG.points)
            .replace(/__CNF_FB__/, CONFIG.facebook)
            .replace(/__CNF_TW__/, CONFIG.twitter)
            .replace(/__CNF_YT__/, CONFIG.youtube)
            .replace(/__CNF_PT__/, CONFIG.pinterest)
            .replace(/__CNF_IG__/, CONFIG.instagram)
            .replace(/__PRENOM__/, prenom_f)                                
            .replace(/__NOM__/, this.nom.toUpperCase())                                
            .replace(/__FONCTION__/, fonction_f)                                
            .replace(/__TEL__/, this.tel);                                
        return output
    });

    this.save = function(){
        var data = calc();
        var dwn = document.createElement('a');
        dwn.setAttribute('href', 'data:text/html,' + encodeURIComponent(data));
        dwn.setAttribute('download', 'signature_' + this.prenom.toLowerCase() + '_' + this.nom.toLowerCase() + '.htm');
        dwn.style.display = 'none';
        document.body.appendChild(dwn);
        dwn.click();
        document.body.removeChild(dwn);
    }
});
