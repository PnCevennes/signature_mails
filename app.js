var app = angular.module('email', []);

app.controller('mainCtrl', function(){
    var template = '<!DOCTYPE HTML>'+
    '<HTML>'+
    '    <HEAD>'+
    '       <TITLE>Signature PN</TITLE>'+
    '       <META http-equiv="Content-Type" content="text/html; charset=utf-8">'+
    '   </HEAD>'+
    '   <BODY>'+
    '       <HR>'+
    '       <TABLE style="BORDER-WIDTH:0, BORDER-SPACING:1px, PADDING:0">'+
    '           <TR>'+
    '               <TD style="VERTICAL-ALIGN:top"><IMG src="__CNF_LOGO__" alt="" width=65 height=65></TD>'+
    '               <TD style="VERTICAL-ALIGN:top; WIDTH:30px; TEXT-ALIGN:center"><IMG src="http://pnx.espaces-naturels.fr/signature/pointilles_pnc.png" alt="" width=3 height=94></TD>'+
    '               <TD style="VERTICAL-ALIGN:top">'+
    '                   <SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #000000; FONT-SIZE: 11pt; FONT-WEIGHT: bold" >__PRENOM__ __NOM__</SPAN><BR>'+
    '                   <SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #000000; FONT-SIZE: 10pt; FONT-WEIGHT: normal">__FONCTION__</SPAN><BR><BR>'+
    '                   <SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #999999; FONT-SIZE: 10pt; FONT-WEIGHT: bold">__CNF_PARC__</SPAN><BR>'+
    '                   <SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #999999; FONT-SIZE: 10pt; FONT-WEIGHT: normal">__TEL__</SPAN><BR>'+
    '                   <SPAN><A href="http://www.parcsnationaux.fr" style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #999999; FONT-SIZE: 10pt; FONT-WEIGHT: normal; TEXT-DECORATION: none">www.cevennes-parcnational.fr</A></SPAN>'+
    '                   <P>__CNF_FB__ __CNF_TW__ __CNF_YT__ __CNF_PT__ __CNF_IG__ </P>'+
    '               </TD>'+
    '           </TR>'+
    '           <TR>'+
    '               <TD></TD>'+
    '               <TD></TD>'+
    '               <TD><SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #ED8B00; FONT-SIZE: 10pt; FONT-WEIGHT: normal">Faites un geste pour l&lsquo;environnement : n&lsquo;imprimez ce message qu&lsquo;en cas de n&eacute;cessit&eacute;</SPAN></TD>'+
    '               </TR>'+
    '       </TABLE>'+
    '   </BODY>'+
    '</HTML>';
    
    this.output = template;

    var _prenom = '';
    this.prenom = function(x){
        if(!arguments.length){
            return _prenom;
        }
        _prenom = x;
    };

    var _nom = '';
    this.nom = function(x){
        if(!arguments.length){
            return _nom;
        }
        _nom = x;
    };

    var _fonction = '';
    this.fonction = function(x){
        if(!arguments.length){
            return _fonction;
        }
        _fonction = x;
    };

    var _tel = 'Tel : +33 (0)4 66 49 XX XX - Mobile : +33 (0)6 XX XX XX XX';
    this.tel = function(x){
        if(!arguments.length){
            return _tel;
        }
        _tel = x;
    }

    var calc = function(){
        var prenom_f = _prenom[0].toUpperCase() + _prenom.slice(1).toLowerCase();
        var fonction_f= _fonction[0].toUpperCase() + _fonction.slice(1).toLowerCase();
        var output = template
            .replace(/__CNF_PARC__/, CONFIG.parc)
            .replace(/__CNF_LOGO__/, CONFIG.logo)
            .replace(/__CNF_FB__/, CONFIG.facebook)
            .replace(/__CNF_TW__/, CONFIG.twitter)
            .replace(/__CNF_YT__/, CONFIG.youtube)
            .replace(/__CNF_PT__/, CONFIG.pinterest)
            .replace(/__CNF_IG__/, CONFIG.instagram)
            .replace(/__PRENOM__/, prenom_f)                                
            .replace(/__NOM__/, _nom.toUpperCase())                                
            .replace(/__FONCTION__/, fonction_f)                                
            .replace(/__TEL__/, _tel);                                
        return output
    };

    this.save = function(){
        var data = calc();
        var dwn = document.createElement('a');
        dwn.setAttribute('href', 'data:text/html,' + encodeURIComponent(data));
        dwn.setAttribute('download', 'signature_' + _prenom.toLowerCase() + '_' + _nom.toLowerCase() + '.htm');
        dwn.style.display = 'none';
        document.body.appendChild(dwn);
        dwn.click();
        document.body.removeChild(dwn);
    }
});
