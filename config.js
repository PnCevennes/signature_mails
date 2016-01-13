var TEMPLATE = `<!DOCTYPE HTML>
    <HTML>
        <HEAD>
           <meta charset="utf8" />
       </HEAD>
       <BODY>
           <HR>
           <TABLE style="FONT-SIZE: 10pt; FONT-FAMILY: Arial, Helvetica, sans-serif;BORDER-SPACING:1px; PADDING:0">
               <TR style="vertical-align: top">
                   <TD><IMG src="__CNF_LOGO__"></TD>
                   <TD><IMG src="__CNF_POINTS__" alt="" style="margin: 15px; margin-top: 0"></TD>
                   <TD><SPAN style="COLOR: #000000;">
                       <b style="FONT-SIZE: 11pt;" >__PRENOM__ __NOM__</b><BR>
                       __FONCTION__</SPAN><BR><BR>
                       <img src="http://pnx.espaces-naturels.fr/signature/reservebio_pnc.png" alt="" align="left" style="align: left; margin-top: 8px; margin-right: 15px;" ><!--ajout pnc-->
                       <span style="color: #999999">
                        <b>__CNF_PARC__</b><BR>
                        __TEL__<BR>
                        <A href="http://__CNF_LIEN_PARC__" style="COLOR: #999999; TEXT-DECORATION: none">__CNF_LIEN_PARC__</A>
                       </span>
                       __APP_LOGOS__
                       <p style="color: #ed8b00">Faites en geste pour l'environnement : n'imprimez ce message qu'en cas de nécessité</p>
                   </TD>
               </TR>
           </TABLE>
       </BODY>
    </HTML>`;


var CONFIG = {
    logo: 'http://pnx.espaces-naturels.fr/signature/embleme_pnc.png',
    lien_parc: 'www.cevennes-parcnational.fr',
    points: 'http://pnx.espaces-naturels.fr/signature/pointilles_pnc.png',
    parc: 'Parc national des Cévennes',
    tel: 'Tel : +33 (0)4 66 49 53 XX - Mobile : +33 (0)6 XX XX XX XX',
    facebook: '<A href="https://www.facebook.com/Parc.national.des.Cevennes"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_facebook.png" alt="" id="Facebook" style="BORDER:0px"></A>',
    twitter: '<A href="https://twitter.com/pnCevennes"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_twitter.png" alt="" id="Twitter" style="BORDER:0px"></A>',
    youtube: '<A href="https://www.youtube.com/channel/UCnfhAcy-fgEj7TCP4qxzN6g"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_youtube.png" alt="" id="YouTube" style="BORDER:0px"></A>',
    pinterest: '',
    instagram: ''
    //pinterest: '<A href="https://www.pinterest.com/XXXXXXXXXX"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_pinterest.png" alt="" id="Pinterest" style="BORDER:0px"></A>',
    //instagram: '<A href="https://instagram.com/XXXXXXXXXX"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_instagram.png" alt="" id="Instagram" style="BORDER:0px"></A>'
}
