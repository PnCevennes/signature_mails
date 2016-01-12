var app = angular.module('email', []);

app.controller('mainCtrl', function(){
    

    this.prenom = '';
    this.nom = '';
    this.fonction = '';
    this.tel = CONFIG.tel;

    var calc = angular.bind(this, function(){
        var prenom_f = this.prenom[0].toUpperCase() + this.prenom.slice(1).toLowerCase();
        var fonction_f= this.fonction[0].toUpperCase() + this.fonction.slice(1).toLowerCase();
        var output = TEMPLATE
            .replace(/__CNF_PARC__/g, CONFIG.parc)
            .replace(/__CNF_LIEN_PARC__/g, CONFIG.lien_parc)
            .replace(/__CNF_LOGO__/g, CONFIG.logo)
            .replace(/__CNF_POINTS__/g, CONFIG.points)
            .replace(/__CNF_FB__/g, CONFIG.facebook)
            .replace(/__CNF_TW__/g, CONFIG.twitter)
            .replace(/__CNF_YT__/g, CONFIG.youtube)
            .replace(/__CNF_PT__/g, CONFIG.pinterest)
            .replace(/__CNF_IG__/g, CONFIG.instagram)
            .replace(/__PRENOM__/g, prenom_f)                                
            .replace(/__NOM__/g, this.nom.toUpperCase())                                
            .replace(/__FONCTION__/g, fonction_f)                                
            .replace(/__TEL__/g, this.tel);                                
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
