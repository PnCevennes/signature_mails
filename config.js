var TEMPLATE = `<!DOCTYPE HTML>
    <HTML>
        <HEAD>
           <TITLE>Signature PN</TITLE>
           <META http-equiv="Content-Type" content="text/html; charset=utf-8">
       </HEAD>
       <BODY>
           <HR>
           <TABLE style="BORDER-WIDTH:0, BORDER-SPACING:1px, PADDING:0">
               <TR>
                   <TD style="VERTICAL-ALIGN:top"><IMG src="__CNF_LOGO__" alt="" width=65 height=65></TD>
                   <TD style="VERTICAL-ALIGN:top; WIDTH:30px; TEXT-ALIGN:center"><IMG src="__CNF_POINTS__" alt="" width=3 height=94></TD>
                   <TD style="VERTICAL-ALIGN:top">
                       <SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #000000; FONT-SIZE: 11pt; FONT-WEIGHT: bold" >__PRENOM__ __NOM__</SPAN><BR>
                       <SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #000000; FONT-SIZE: 10pt; FONT-WEIGHT: normal">__FONCTION__</SPAN><BR><BR>
                       <img src="http://pnx.espaces-naturels.fr/signature/reservebio_pnc.png" alt="" align="left" style="align: left; margin-top: 8px; margin-right: 15px;" ><!--ajout pnc-->
                       <SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #999999; FONT-SIZE: 10pt; FONT-WEIGHT: bold;">__CNF_PARC__</SPAN><BR>
                       <SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #999999; FONT-SIZE: 10pt; FONT-WEIGHT: normal">__TEL__</SPAN><BR>
                       <SPAN><A href="http://__CNF_LIEN_PARC__" style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #999999; FONT-SIZE: 10pt; FONT-WEIGHT: normal; TEXT-DECORATION: none">__CNF_LIEN_PARC__</A></SPAN>
                       <P>__CNF_FB__ __CNF_TW__ __CNF_YT__ __CNF_PT__ __CNF_IG__ </P>
                   </TD>
               </TR>
               <TR>
                   <TD></TD>
                   <TD></TD>
                   <TD><SPAN style="FONT-FAMILY: Arial, Helvetica, sans-serif; COLOR: #ED8B00; FONT-SIZE: 10pt; FONT-WEIGHT: normal">Faites un geste pour l&lsquo;environnement : n&lsquo;imprimez ce message qu&lsquo;en cas de n&eacute;cessit&eacute;</SPAN></TD>
                   </TR>
           </TABLE>
       </BODY>
    </HTML>`;


var CONFIG = {
    logo: 'http://pnx.espaces-naturels.fr/signature/embleme_pnc.png',
    lien_parc: 'www.cevennes-parcnational.fr',
    points: 'http://pnx.espaces-naturels.fr/signature/pointilles_pnc.png',
    parc: 'Parc national des Cévennes',
    facebook: '<A href="https://www.facebook.com/Parc.national.des.Cevennes"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_facebook.png" alt="" id="Facebook" style="BORDER:0px"></A>',
    twitter: '<A href="https://twitter.com/pnCevennes"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_twitter.png" alt="" id="Twitter" style="BORDER:0px"></A>',
    youtube: '<A href="https://www.youtube.com/channel/UCnfhAcy-fgEj7TCP4qxzN6g"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_youtube.png" alt="" id="YouTube" style="BORDER:0px"></A>',
    pinterest: '',
    instagram: ''
    //pinterest: '<A href="https://www.pinterest.com/XXXXXXXXXX"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_pinterest.png" alt="" id="Pinterest" style="BORDER:0px"></A>',
    //instagram: '<A href="https://instagram.com/XXXXXXXXXX"><IMG src="http://pnx.espaces-naturels.fr/signature/signature_instagram.png" alt="" id="Instagram" style="BORDER:0px"></A>'
}
